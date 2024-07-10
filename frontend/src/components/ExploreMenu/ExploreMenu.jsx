import React, {Component} from 'react';
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

class ExploreMenu extends Component {
    render() {
        return (
            <div className="explore-menu" id='explore-menu'>
                <h1>Explore our menu</h1>
                <p className='explore-menu-text'>Discover a diverse menu at Cuisine Corner, featuring fresh, locally
                    sourced ingredients. Enjoy exquisite appetizers, savory entrees, and delectable desserts crafted to
                    perfection. There's something for every palate!</p>
                <div className="explore-menu-list">
                    {menu_list.map((item, index) => {
                        return (
                            <div className='explore-menu-list-item' key={index}>
                                <img src={item.menu_image} alt=""/>
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ExploreMenu;