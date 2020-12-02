import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ name, image, price, symbol, priceChange }) {

  const [{ cart }, dispatch] = useStateValue();
  
  const removeFromCart = () => {
    dispatch({
      type:'REMOVE_FROM_CART',
      id: name,
    });
  }

  return (
    <div className='checkoutProduct'>

      <img className='checkoutProduct__image' src={image} alt=""/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button 
          onClick={removeFromCart}
          className='checkoutProduct__button'
        >
          Remove from cart
        </button>
      </div>

    </div>
  )
}

export default CheckoutProduct
