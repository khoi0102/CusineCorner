import {createContext, useEffect, useState} from "react";
import {food_list} from "../assets/assets"

export const StoreContext = createContext(null)

function StoreContextProvider(props) {
    const [cartItems, setCartItems] = useState({});

    /*The if statement check if the item is in the cart yet, if not, add that item in and the quantity increase to one, and if the item already in the cart, +1 the item*/
    function addToCart(itemId) {
        /*Create new entry*/
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]: 1}))
        }
        /*Add the previous items*/
        else {
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
        }
    }

    function removeFromCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
useEffect(()=>{
    console.log(cartItems);
},[cartItems])
    const contextValue = {
        food_list,cartItems,setCartItems,addToCart,removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider