import React, { useContext, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import banner5 from '../assets/images/banner5.png';
import './Home/style.css'
import 'react-alice-carousel/lib/alice-carousel.css';

import { MyContext } from '../App';
import Product from '../components/product/Product';
import Slider from 'react-slick';




const NewSlider = () => {

    

    const [bestSells, setBestSells] = useState([]);

    const context = useContext(MyContext);
    const settings = {
        dots: false,
        infinite: context.windowWidth<992 ? false : true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: true,
        arrows: context.windowWidth<992 ? true : false,
    };



  return <>
              {/* <section className='homeProducts homeProductsRow2 pt-0'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'>Daily Best Sells</h2>
                    </div>

                    <br className='res-hide' /><br  className='res-hide'/>
                    <div className='row'>
                        <div className='col-md-3 pr-5 res-hide'>
                            <img src={banner5} className='w-100' />
                        </div>

                        <div className='col-md-9'>
                            <Slider {...settings} className='prodSlider'>

                                {
                                    bestSells.length !== 0 &&
                                  bestSells &&  bestSells.map((item, index) => {
                                        return (
                                            <div className='item' key={index}>
                                                <Product tag={item.type} item={item} />
                                            </div>
                                        )
                                    })
                                }

                            </Slider>
                        </div>
                    </div>


                </div>
            </section> */}

            {/* <section className='homeProducts homeProductsRow2 pt-0'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'>Daily Best Sells</h2>

                    </div>

                    <br className='res-hide' /><br  className='res-hide'/>
                    <div className='row'>
                        <div className='col-md-3 pr-5 res-hide'>
                            <img src={banner5} className='w-100' />
                        </div>

                        <div className='col-md-9'>
                            <Slider {...settings} className='prodSlider'>

                                {
                                    bestSells.length !== 0 &&
                                    bestSells.map((item, index) => {
                                        return (
                                            <div className='item' key={index}>
                                                <Product tag={item.type} item={item} />
                                            </div>
                                        )
                                    })
                                }

                            </Slider>
                        </div>
                    </div>


                </div>
            </section> */}
            <section className='homeProducts homeProductsRow2 pt-0'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'>Daily Best Sells</h2>

                    </div>

                    <br className='res-hide' /><br  className='res-hide'/>
                    <div className='row'>
                        <div className='col-md-3 pr-5 res-hide'>
                            <img src={banner5} className='w-100' />
                        </div>

                        <div className='col-md-9'>
                            {/* <Slider {...settings} className='prodSlider'>

                                {
                                    bestSells.length !== 0 &&
                                    bestSells.map((item, index) => {
                                        return (
                                            <div className='item' key={index}>
                                                <Product tag={item.type} item={item} />
                                            </div>
                                        )
                                    })
                                }

                            </Slider> */}
                                <AliceCarousel 
                                // {...settings}
                                autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={3000}
        animationType="fadeout"
        
        infinite
            touchTracking={false}
        disableDotsControls
        disableButtonsControls
        // items={items}>

                                >                                {
                                    bestSells.length !== 0 &&
                                    bestSells.map((item, index) => {
                                        return (
                                            <div className='item' key={index}>
                                                <Product tag={item.type} item={item} />
                                            </div>
                                        )
                                    })
                                }

        
        </AliceCarousel>
                        </div>
                    </div>


                </div>
            </section>
  </>
}

export default NewSlider