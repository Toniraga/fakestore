import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

import ReactStars from "react-rating-stars-component";

import './productItems.css'

const ProductItem = ({ title, id, price, image }) => {
    const dispatch = useDispatch()
    const [ showAdded, setShowAdded ] = useState(false)

    const addItemToCart = () => {
        dispatch(addItem({ title, id, image, price, quantity: 1, oldprice: price }))
        setShowAdded(true)
        setTimeout(() => {
            setShowAdded(false);
        }, 3000);
    }

    return (
        <div className='product__item'>
            <div className='product__head'> <img alt='product' src={image} /> </div>
            <div className='product__body'> 
                <div> {title} </div>
                <div> ₦ {price} </div>
                <div>
                    <ReactStars
                        count={5}
                        size={20}
                        activeColor='#9e2905c0'
                        value={3}
                        color='grey'
                        classNames='react_star'
                        edit={false}
                    />
                </div>
                <div>
                    <button onClick={addItemToCart}> Add to Cart </button> 
                    {showAdded && <div className='add_to_cart'> Added </div>} 
                </div>
            </div>
        </div>
    )
}

export default ProductItem
