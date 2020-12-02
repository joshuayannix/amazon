import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkout__left">

        <img 
          className='checkout__ad' 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
          alt="checkout ad"
        />

        {cart?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty</h2>
            <p>
              You have no items in you cart. To buy one or more items, click "Add to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>Shopping Cart</h2>
            {cart.map(item => (
              <CheckoutProduct 
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                symbol={item.symbol}
                priceChange={item.priceChange}
              />
            ))}          
          </div>
        )}        
    </div>
    {cart.length > 0 && (
      <div className='checkout__right'>
        <Subtotal />
      </div>
    )}
  </div>
  )
}

export default Checkout
