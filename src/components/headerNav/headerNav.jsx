import React from 'react';
import { useSelector } from 'react-redux'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

import './headerNav.css';

const HeaderNav = () => {
    const cart = useSelector((state) => state.cartReducer.savedCart);

    return (
        <div className='header__nav'>
            <NavLink to='/'><div className='header__logo'>FAKE<span>STORE</span></div></NavLink>
            <div className='header__links'> 
                <NavLink to='/checkout'><div><AiOutlineShoppingCart size='25px' /> <span> {cart.length} </span> </div> </NavLink>
            </div>
        </div>
    )
}

export default HeaderNav
