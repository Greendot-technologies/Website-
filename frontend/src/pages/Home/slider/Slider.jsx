/* eslint-disable no-unused-vars */
import React, { useEffect, useContext} from 'react';
import Slider from "react-slick";
import './index.css';

import Slide1 from '../../../assets/images/slider-agri.jpg';
import Slide2 from '../../../assets/images/slider-agri1.webp';
import Button from '@mui/material/Button';

import Newsletter from '../../../components/newsletter/Newsletter';

import { MyContext } from '../../../App';

const HomeSlider = () => {

    const context = useContext(MyContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        // arrows: context.windowWidth>992 ? true : false,
        autoplay:true
    };



    return (
        <section className='homeSlider'>
            <div className='container-fluid position-relative'>
                <Slider {...settings} className='home_slider_Main'>
                    <div className="item">
                        <img src={Slide1} className='w-100 h-[700px] blur-[0.6px]' />
                        <div className='info '>
                            <h2 className="mb-4 text-black-900">
                                Don’t miss amazing<br />
                                deals
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide2} className='w-100  h-[700px] blur-[0.6px]' />
                        <div className='info '>
                            <h2 className="mb-3 text-white">
                               <br />
                                Big discount
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                </Slider>

                {
                    context.windowWidth>992  ? <Newsletter/>  : ""
                }
                
                
                

            </div>
        </section>
    )
}

export default HomeSlider;