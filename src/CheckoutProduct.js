import React from 'react'
import './checkoutproduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, imgurl, name, desc, price, rating }) {
    const [{basket},dispatch] = useStateValue();
    console.log("checkprod",rating);
    const removeproduct = ()=>{
        if(basket.length>1){
        dispatch({
          type : "REMOVE_FROM_BASKET",
          item:{
            id : id,
            name : name,
            desc : desc,
            price : price,
            rating : rating,
            imgurl : imgurl
          },
        });
    }else{
        const userResponse = window.confirm("Are you sure you want to clear cart?");
        if (userResponse) {
            dispatch({
                    type : "REMOVE_FROM_BASKET",
                    item:{
                      id : id,
                      name : name,
                      desc : desc,
                      price : price,
                      rating : rating,
                      imgurl : imgurl
                    },
                  });
            } else {
              console.log("User clicked No");
            }
        }
      };
  return (
    <div className='checkout-product' id={id}>
        <div className='checkout-product-left'>
            <img src={imgurl} alt={name} className="checkproimg" />
        </div>
        <div className="checkout-info">
            <p className='checkout-prod-desc'><strong>{desc}</strong></p>
            <p className="product-price">
                <small>$</small>
                <strong className='checkout-price'>{price}</strong>
            </p>
            <div className="checkout-product-rating">
                {Array(rating).fill().map((_,i)=>(<p key={i}>⭐</p>))}
            </div>
            <button onClick={removeproduct} className='remove-product-button'>Remove from basket</button> 
        </div>
    </div>
  )
}

export default CheckoutProduct
