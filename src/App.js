import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux'
import { login, logout } from './features/userSlice';
import { receiveCoinsFromAPI } from './features/appSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is logged in:', authUser)

      if(authUser) {      
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout())
      }

    })
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        // dispatch the coins to reducer        
        dispatch(receiveCoinsFromAPI({
          id: res.data
        }))
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header showSearchBar={false}/>
            <Checkout />
          </Route>
          <Route path='/login'>    
            <Login />       
          </Route>
          <Route path='/'>
            <Header showSearchBar={true}/>
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
