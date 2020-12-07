import React from 'react';
import './CheckoutProduct.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './features/cartSlice';

function CheckoutProduct({ name, uuid, image, price, symbol, priceChange }) {

  const dispatch = useDispatch();
  
  const removeFromCartCheckout = () => {    
    dispatch(removeFromCart({
      id: uuid
    }))
  }

  return (
    <div className='checkoutProduct'>

      <img className='checkoutProduct__image' src={image} alt=""/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price.toLocaleString()}</strong>
        </p>
        {priceChange < 0 ? (
            <p className='coin__percent red'>{priceChange?.toFixed(2)}%</p>
          ) : (
            <p className='coin__percent green'>{priceChange?.toFixed(2)}%</p>
        )}

        <button 
          onClick={removeFromCartCheckout}
          className='checkoutProduct__button'
        >
          Remove from Cart
        </button>
      </div>

    </div>
  )
}

export default CheckoutProduct
