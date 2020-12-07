import React from 'react'
import { v4 as uuid } from 'uuid';
import './Coin.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';

function Coin({ name, price, symbol, marketcap, volume, image, priceChange }) {
  const dispatch = useDispatch();  
  const addToCartCoin = () => {    
    dispatch(addToCart({
      item: { name, image, price, symbol, priceChange, uuid:uuid() }      
    }))
  };

  return (
    <div className='coin'>
      <div className='coin__row'>

        <section className='coin__image'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin__symbol'>{symbol}</p>
        </section>

        <section className='coin__data'>
          <p className='coin__price'>${price}</p>
          <p className='coin__volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin__percent red'>{priceChange?.toFixed(2)}%</p>
          ) : (
            <p className='coin__percent green'>{priceChange?.toFixed(2)}%</p>
          )}

          <p className='coin__marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
          <button onClick={addToCartCoin}>
            <AddShoppingCartIcon className='AddShoppingCartIcon'/>
            <span className='add_to_cart_text'>Add to Cart</span>
            
          </button>
        </section>

      </div>
    </div>              
  );
}

export default Coin;
