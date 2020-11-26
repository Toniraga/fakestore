import React from "react";

import { Carousel } from "react-responsive-carousel";
import './carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Slider = () => {
    
    return (
        <React.Fragment>
            <div className='carousel__container'>
                <Carousel autoPlay showArrows={true} showThumbs={false}>
                    <div>
                        <div className='legend'> 
                            <div className='legend__top'> Men </div>
                            <div className='legend__body'> 52% Discount For This Season </div>
                        </div>
                        <img alt="" src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                    </div>
                    <div>
                        <div className='legend'> 
                            <div className='legend__top'>Fake<span>Shop</span> </div>
                            <div className='legend__body'> With Working Cart and Paypal</div>
                        </div>
                        <img alt="" src='https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />

                    </div>
                </Carousel>
            </div>
        </React.Fragment>
    )
};

export default Slider
