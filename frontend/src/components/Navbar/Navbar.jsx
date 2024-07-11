import React from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets.js';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import {useState,useEffect} from 'react'

console.log('Navbar Assets:', assets);
function Navbar() {
    return (
        <div className='py-5 flex justify-between items-center  '  style={{ marginTop: '-100px', marginLeft: '-200px'}}>
            <img src={assets.logo} alt="Logo" className='logo'/>
            <div style={{ marginTop: '-100px'}}>
            <ul className="flex list-none gap-20" style={{ fontSize: '20px' }}>
                <li>home</li>
                <li>menu</li>
                <li>app</li>
                <li>contact us</li>
            </ul>
            </div>
            <div className="flex item-center gap-10"  style={{ marginTop: '-100px'}}>
                   <CiSearch  className="text-4xl" style={{ position: 'relative' }}/>
                    <CiShoppingCart className="text-4xl" />

                <button className="bg-transparent border border-solid border-orange-500 p-[10px_30px] rounded-[50px] cursor-pointer hover:bg-orange-500 hover:text-white" style={{ fontSize: '16px' }}>sign in</button>
            </div>
        </div>

    );
}

export default Navbar;
