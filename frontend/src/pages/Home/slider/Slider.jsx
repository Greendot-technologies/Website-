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







// import React, { useEffect, useState, useContext } from 'react';
// import Slider from "react-slick";
// import axios from "axios";
// import './index.css';

// import Newsletter from '../../../components/newsletter/Newsletter';
// import { MyContext } from '../../../App';

// // API endpoints
// const SLIDER_API = "http://localhost:5000/api/sliders";
// const IMAGE_BASE_URL = "http://localhost:5000/uploads/";

// const HomeSlider = () => {
//   const context = useContext(MyContext);
//   const [sliders, setSliders] = useState([]);

//   useEffect(() => {
//     const fetchSliders = async () => {
//       try {
//         const res = await axios.get(SLIDER_API);
//         const updatedSliders = res.data.map((slide) => ({
//           ...slide,
//           imageUrl: slide.image?.startsWith("http")
//             ? slide.image
//             : `${IMAGE_BASE_URL}${slide.image}`,
//         }));
//         setSliders(updatedSliders);
//       } catch (error) {
//         console.error("Failed to load sliders:", error);
//       }
//     };
//     fetchSliders();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     arrows: true,
//     autoplay: true,
//   };

//   return (
//     <section className="homeSlider">
//       <div className="container-fluid position-relative">
//         <Slider {...settings} className="home_slider_Main">
//           {sliders.map((slide, index) => (
//             <div key={index} className="item relative">
//               <img
//                 src={slide.imageUrl}
//                 alt={slide.title}
//                className='w-100 h-[700px] blur-[0.6px]'
//               />
//               <div className="info absolute top-0 left-0 w-full h-full flex items-center text-white px-10 lg:px-20">
//                 <div className="max-w-xl text-left">
//                   <h2 className="text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h2>
//                   <p className="text-lg lg:text-xl">{slide.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         {context.windowWidth > 992 ? <Newsletter /> : null}
//       </div>
//     </section>
//   );
// };

// export default HomeSlider;
