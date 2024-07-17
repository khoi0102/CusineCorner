import React, {useContext, useState} from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets.js';
import {CiSearch, CiShoppingCart} from "react-icons/ci";
import {Link} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";

console.log('Navbar Assets:', assets);

function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState('home')
    const {getTotalCartAmount}=useContext(StoreContext)
    return (
        <div className='navbar' style={{marginTop: '-100px', marginLeft: '-200px'}}>
           <Link to="/"> <img src={assets.logo} alt="Logo" className='logo'/></Link>
            <div style={{marginTop: '-100px'}}>
                <ul className="navbar-menu" style={{fontSize: '20px'}}>
                    <Link to="/" onClick={() => setMenu('home')} className={menu === "home" ? "active" : ""}>home</Link>
                    <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === "menu" ? "active" : ""}>menu</a>
                    <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === "mobile-app" ? "active" : ""}>app</a>
                    <a href="footer" onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>contact
                        us
                    </a>
                </ul>
            </div>
            <div className="navbar-right" style={{marginTop: '-100px'}}>
                <CiSearch className="search-icon" style={{position: 'relative'}}/>
                <div className="navbar-search-icon">
                    <Link to='/cart'><CiShoppingCart className="basket-icon"/></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>

    );
}

export default Navbar;
