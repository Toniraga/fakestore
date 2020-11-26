import React from 'react'

import Footer from '../../components/footer/footer';
import HeaderNav from '../../components/headerNav/headerNav';
import Slider from '../../components/carousel/carousel';
import Products from '../../components/products/products';

const Home = () => {
    return (
        <div>
            <HeaderNav />
            <Slider />
            <Products />
            <Footer />
        </div>
    )
}

export default Home
