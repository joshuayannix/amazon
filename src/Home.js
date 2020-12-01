import React, { useState, useEffect } from 'react';
import axios from 'axios';
import background from './amazon-background.jpg';
import './Home.css';
import Product from './Product';

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  //add OR statement to include the ticker sign as well

  return (
    <div className='home'>
      <img 
        className='home__image'
        src={background} 
        alt="amazon background image"
      />
      <div className="home__row">
        <Product 
         id="12321341"
         title="Apple AirPods Pro"
         price={219.99}
         rating={4}
         image="https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg"
        />
        <Product 
          id='123123'
          title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)'
          price={299.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg'
        /> 
        <Product 
          id='123123'
          title='Super Smash Bros. Ultimate - Nintendo Switch'
          price={59.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._SL1500_.jpg'
        />
        
      </div>
      <div className="home__row">        
        
        <Product 
          id="49538094"
          title="Everlast Pro Style Training Gloves"
          price={20.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/918ZBw7f6tL._AC_SL1500_.jpg"
        />
        <Product 
          id='123123'
          title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal'
          price={39.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61IxWv3ecpL._AC_SL1000_.jpg'
        />
      </div>
      <div className="home__row">
        
        <Product 
          id='123123'
          title='New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray'
          price={2099.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg'
        />     
      </div>
      
    </div>
  )
}

export default Home
