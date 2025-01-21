
export const initialState = {
    basket : [],
};
export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount,item)=>item.price+amount,0))
}

const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_BASKET" :
            return {
                ...state,
            basket : [...state.basket, action.item],
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketitem)=> basketitem.id === action.item.id
            );
            console.log("id",index);
            let newbasket = [];
            if(index>=0){
                newbasket = state.basket.filter((items)=>items.id!==action.item.id)
            }else{
                console.warn("Can't find the product in the cart");
            }
            return {
                ...state,
                basket : newbasket
            }
        default:
            return state;
    }
}

export default reducer;