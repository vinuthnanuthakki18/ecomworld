import React from 'react'
import './Checkout.css'
import Banner from './assets/adver1.jpg'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css';
import SubTotal from './SubTotal';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket}, dispatch]= useStateValue();
  console.log("basket in checkout",basket);
  return (
    <div className='checkout-page'>
      <div className="checkout-left">
        <img src={Banner} alt="Advertise banner" className="banner" />
        <h4 className='checkout-title'>Your Shopping Basket</h4>
        <div className="checkoutproducts">
          {basket.length>0 ? basket.map((item)=><CheckoutProduct key={item.id} id={item.id} name={item.name} desc={item.desc} price={item.price} imgurl={item.imgurl} rating={item.rating}/>) : <h4>The Basket is empty!! Keep Shopping</h4>}
        </div>
      </div>
      <div className="checkout-right">
        <SubTotal/>
      </div>
    </div>
  )
}

export default Checkout
