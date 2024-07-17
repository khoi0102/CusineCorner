import React, {useState} from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets.js';
import {CiSearch, CiShoppingCart} from "react-icons/ci";

console.log('Navbar Assets:', assets);

function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState('home')
    return (
        <div className='navbar' style={{marginTop: '-100px', marginLeft: '-200px'}}>
            <img src={assets.logo} alt="Logo" className='logo'/>
            <div style={{marginTop: '-100px'}}>
                <ul className="navbar-menu" style={{fontSize: '20px'}}>
                    <li onClick={() => setMenu('home')} className={menu === "home" ? "active" : ""}>home</li>
                    <li onClick={() => setMenu('menu')} className={menu === "menu" ? "active" : ""}>menu</li>
                    <li onClick={() => setMenu('mobile-app')} className={menu === "mobile-app" ? "active" : ""}>app</li>
                    <li onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>contact
                        us
                    </li>
                </ul>
            </div>
            <div className="navbar-right" style={{marginTop: '-100px'}}>
                <CiSearch className="search-icon" style={{position: 'relative'}}/>
                <div className="navbar-search-icon">
                    <CiShoppingCart className="basket-icon"/>
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>

    );
}

export default Navbar;
