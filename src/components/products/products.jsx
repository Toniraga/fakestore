import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { populateCart } from '../../redux/cart/cart.action'

import ProductItem from '../productItems/productItem'

import './products.css'

const data = [
	{
		id: 1,
		title: "Come takes",
		price: "#46",
		category: "jewelry",
		description: "Get you some",
		image: "...",
	},
	{
		id: 2,
		title: "YO WE HERE",
		price: "#50",
		category: "handbag",
		description: "two handbags",
		image: "...",
	},
	{
		id: 3,
		title: "YO WE HERE",
		price: "#50",
		category: "handbag",
		description: "two handbags",
		image: "...",
	},
];

const Products = () => {
	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.cartReducer.cartItems)
	console.log(cartItems, 'cartItems')

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
