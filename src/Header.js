import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ cart, user, coins }] = useStateValue();
  const [{ searchTerm }, dispatch] = useStateValue();
  
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  
  const handleChange = e => {
    //dispatch the search term to reducer
    dispatch({
      type:'UPDATE_SEARCH_TERM',
      id: e.target.value
    });
  };
  return (
    <nav className='header'>

      <Link to='/'>      
        <img  
          className='header__logo' 
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <form action="">
          <input 
            type="text" className="header__searchInput"
            placeholder='Search for coins'
            onChange={handleChange}
          />
        </form>        
      </div>   

      <div className="header__nav">
        <Link to={!user && '/login'} className='header__link'>
          <div 
            onClick={handleAuthentication}
            className="header__option"
          >
            <span className='header__optionLineOne'>Hello, {user ? user.email : 'Guest'}</span>
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
