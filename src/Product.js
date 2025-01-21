import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,name,desc,price,rating,imgurl}) {

  const [state, dispatch] = useStateValue();

  const addonbasket = ()=>{
    const index = state.basket?.findIndex((item)=>item.id===id);
    if(index>=0){
      alert("Item already in cart");
    }else{
    dispatch({
      type : "ADD_TO_BASKET",
      item:{
        id : id,
        name : name,
        desc : desc,
        price : price,
        rating : rating,
        imgurl : imgurl
      },
    });
  }
  };
  console.log("rating",rating);
  console.log("basket",state.basket);
  
  return (
    <div className='product'>
      <div className="product-info">
        <p><strong>{desc}</strong></p>
        <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product-rating">
            {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
        </div>
      </div>
      <img src={imgurl} alt={name} className='product-img'/>
      <button onClick={addonbasket} className='product-button'>Add to basket</button>
    </div>
  )
}

export default Product
