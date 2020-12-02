import React from 'react'
import './Coin.css'
import { useStateValue } from './StateProvider';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Coin({ name, price, symbol, marketcap, volume, image, priceChange }) {

  const [, dispatch ] = useStateValue();
  
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: { name, image, price, symbol, priceChange }      
    })
  };
  console.log(priceChange)

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
          <button onClick={addToCart}>
            <AddShoppingCartIcon className='AddShoppingCartIcon'/>
            <span className='add_to_cart_text'>Add to Cart</span>
            
          </button>
        </section>

      </div>
    </div>              
  );
}

export default Coin;
