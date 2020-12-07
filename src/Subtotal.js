import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import { cartRedux } from './features/cartSlice';
import { useSelector } from 'react-redux';

function Subtotal() {
  const cart = useSelector(cartRedux)
  
  return (
    <div className='subtotal'>

      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox"/>This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
