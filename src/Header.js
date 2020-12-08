import React from 'react';
import './Header.css';
import bitcoin_prime_logo from './bitcoin_prime_logo.png'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTerm } from './features/appSlice';
import { selectUser } from './features/userSlice';
import { cartRedux } from './features/cartSlice';

function Header({ showSearchBar }) {
  const dispatch = useDispatch();
  const cart = useSelector(cartRedux)
  const user = useSelector(selectUser);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  
  const handleChange = e => {
    //dispatch the search term to reducer
    dispatch(updateSearchTerm({
      text: e.target.value
    }));
  };
  return (
    <nav className='header'>

      <Link to='/'>      
        <img  
          className='header__logo' 
          src={bitcoin_prime_logo} alt="amazon logo"
        />
      </Link>

      {showSearchBar === true ? (
        <div className="header__search">
          <form action="">
            <input 
              type="text" className="header__searchInput"
              placeholder='Search for coins'
              onChange={handleChange}
            />
          </form>        
      </div>   
      ) : (
        <div className='header__search'></div>
      )  
      }
      
      <div className="header__nav">
        <Link to={!user && '/login'} className='header__link'>
          <div 
            onClick={handleAuthentication}
            className="header__option"
          >
            <span className='header__optionLineOne'>Hello, {user ? user.displayName : 'Guest'}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>   
        <Link className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='header__link'>
          <div className="header__optionCart">
            <ShoppingCartIcon />
          <span className='header__optionLineTwo header__cartCount'>{cart?.length}</span>
          </div>
        </Link>
      </div>   

    </nav>
  )
}

export default Header
