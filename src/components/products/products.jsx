import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { populateCart } from '../../redux/cart/cart.action'

import ProductItem from '../productItems/productItem'

import './products.css'

const Products = () => {
	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.cartReducer.cartItems)

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then(json => dispatch(populateCart(json)));
	}, [dispatch])

    return (
        <div className='products__container'>
            <div className='products__head'> Featured Products </div>
            <div className='products__body'>
                { cartItems && cartItems?.map(({id, title, price, image}) => (
                    <ProductItem key={id} title={title} price={price} id={id} image={image} />
                ))               
                }
            </div>
        </div>
    )
}

export default Products
