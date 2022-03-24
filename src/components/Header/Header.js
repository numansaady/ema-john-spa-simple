import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-area'>
            <div className="container header">
                <img src={logo} alt="" />
                <div className="menu">
                    <a href="/order">Order</a>
                    <a href="/shop">Shop</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;