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
function getTotalCartAmount(){
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
}
    const contextValue = {
        food_list,cartItems,setCartItems,addToCart,removeFromCart,getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider