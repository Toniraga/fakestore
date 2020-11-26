import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, addItem, subtractItem } from '../../redux/cart/cart.action';

import './cartItem.css';

const CartItem = ({ image, price, title, quantity, id }) => {
    const dispatch = useDispatch()

    const remove = () => {
        dispatch(removeItem(id))
    }

    const addToCart = () => {
        dispatch(addItem({ title, id, image, price, quantity: 1 }));
    } 

    const subtract = () => {
        if (quantity < 2) {
            return
        }
        dispatch(subtractItem({ title, id, image, price, quantity: 1 }));
    }

    return (
        <div className='cart_item__container'>
            <div className='cart__item_img'> <img alt='' src={image} /> </div>
            <div className='cart__item'>  
                <div className='cart__item_title'> {title} </div>
                <div className='cart__item_price'> ₦ {price.toFixed(2)} </div>
                <div className='cart__item_edit'> <span onClick={addToCart}>+</span> <span onClick={subtract}>-</span> <span> {quantity} </span></div>
            </div>
            <div 
                className='cart__item_delete'
                onClick={remove}>x</div>
        </div>
    )
}

export default CartItem
