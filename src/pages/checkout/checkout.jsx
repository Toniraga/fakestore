import React, { useEffect, useState } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.action'
import { getSubTotal } from '../../redux/cart/cart.utils';

import Footer from "../../components/footer/footer";
import HeaderNav from "../../components/headerNav/headerNav";
import CartItem from '../../components/cartItem/cartItem'

import './checkout.css';

const Checkout = () => { 
    const [ subTotal, setSubTotal ] = useState(null); 
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartReducer.savedCart)

    useEffect(() => {
        const subTotal = getSubTotal(cart)
        setSubTotal(subTotal.toFixed(2))
    }, [cart])

    const clear = () => {
        dispatch(clearCart())
    }

    const client = {
        sandbox: "YOUR-SANDBOX-APP-ID",
        production: "YOUR-PRODUCTION-APP-ID",
    };

    return (
        <div>
            <HeaderNav />
            <div className='checkout__container'>
                <div className='checkout__head'> 
                    <div className='checkout__caption'>GO <span>CART</span></div>
                    <div className='checkout__caption_body'> Your Cart </div>
                </div>
                <div className='checkout__body'>
                    {cart && cart.map(({ id, image, price, title, quantity }) => (
                        <CartItem key={id} image={image} price={price} title={title} quantity={quantity} id={id} />
                    ))}
                </div>
                <div className='clear__cart' onClick={clear}> Clear Cart </div>
                <div className='checkout__footer'>
                    <div className='checkout__footer_caption'> SUMMARY </div>
                    <div className='checkout__footer_body'>  
                        <div> 
                            <p> Total Products </p>
                            <p> ₦ {subTotal} </p> 
                        </div>
                        <div> 
                            <p> Shipping </p>
                            <p> ₦ 10 </p> 
                        </div>
                        <div className='checkout__total'> 
                            <p> Total </p>
                            <p> ₦ {+subTotal+10 } </p> 
                        </div>
                    </div>
                </div>
                <PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
                <div className='checkout__btn'><button> Proceed To Paypal </button></div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout
