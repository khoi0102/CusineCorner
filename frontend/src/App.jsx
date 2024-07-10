import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";

function App(){
    return(
        <>
            <div className = 'w-4/5 mx-auto'>
            <Navbar/>
                <Routes>
                    <Route path ='/' element={<Home/>}/>
                    <Route path ='/cart' element={<Cart/>}/>
                    <Route path ='/order' element={<PlaceOrder/>}/>
                </Routes>
            </div>
        </>
    )
}
export default App;