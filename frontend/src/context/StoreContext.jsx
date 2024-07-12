import {createContext, useState} from "react";
import {food_list} from "../assets/assets"
export const StoreContext = createContext(null)

function StoreContextProvider(props){
const [cartItem,setCartItems]=useState({});
function addToCart(itemId){
    if(!cartItem[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
}
    const contextValue={
food_list
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider