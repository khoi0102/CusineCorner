import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="header-contents">
                    <h2>Order your food here</h2>
                    <p>Experience the taste of culinary excellence at Cuisine Corner. Where fresh ingredients,
                        innovative
                        recipes, and exceptional service come together to create a dining experience you'll savor and
                        remember. Bon appétit!
                    </p>
                    <button>View Menu</button>
                </div>
            </div>
        );
    }
}

export default Header;

