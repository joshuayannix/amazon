import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {

  const [{ cart }, dispatch] = useStateValue();
  
  const removeFromCart = () => {
    dispatch({
      type:'REMOVE_FROM_CART',
      id: id,
    });
  }

  return (
    <div className='checkoutProduct'>

      <img className='checkoutProduct__image' src={image} alt=""/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

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
