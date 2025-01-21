import React from 'react'
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
function SubTotal() {
  const [{basket}] = useStateValue();
  return (
    <div className='subtotal'>
      <p className='subtotal-title'>SubTotal({basket.length} items): $<span className='subtotal-price'><strong>{getBasketTotal(basket)}</strong></span></p>
      <label htmlFor="giftCheckbox" className='subtotal-check-label'>
        <input type='checkbox' id="giftCheckbox" className='subtotal-check' />
        This order contains a gift
      </label>
      <button className='subtotal-btn'>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal
