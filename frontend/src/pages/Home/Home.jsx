// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef, useContext } from 'react';

// import SliderBanner from './slider/Slider';
// import CatSlider from '../../components/catSlider/CatSlider';

// import Banners from '../../components/banners/Banners';

// import './style.css';
// import Product from '../../components/product/Product';
// import banner5 from '../../assets/images/banner5.png';

// import Slider from "react-slick";
// import TopProducts from './TopProducts/TopProducts';
// import axios from 'axios';
// import { MyContext } from '../../App';

// const Home = (props) => {

//     const [prodData, setprodData] = useState(props.data)
//     const [catArray, setcatArray] = useState([])
//     const [activeTab, setactiveTab] = useState();
//     const [activeTabIndex, setactiveTabIndex] = useState(0);
//     const [activeTabData, setActiveTabData] = useState([]);

//     const [bestSells, setBestSells] = useState([]);
//     const [isLoadingProducts, setIsLoadingProducts] = useState(false);

//     const productRow = useRef();
//     const context = useContext(MyContext);




//     var settings = {
//         dots: true,
//         infinite: context.windowWidth < 992 ? false : true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         fade: false,
//         autoPlay: true,
//         arrows: context.windowWidth < 992 ? false : true,
//     };
//     var settings1 = {
//         dots: true,
//         infinite: context.windowWidth < 992 ? false : true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         fade: false,
//         autoPlay: true,
//         arrows: context.windowWidth < 992 ? false : true,
//     };

//     const catArr = [];

//     useEffect(() => {

//         prodData.length !== 0 &&
//             prodData.map((item) => {
//                 item.items.length !== 0 &&
//                     item.items.map((item_) => {
//                         catArr.push(item_.cat_name);
//                     })
//             })

//         const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
//         setcatArray(list2)

//         setactiveTab(list2[0])

//         window.scrollTo(0, 0);

//     }, [])





//     // useEffect(() => {
//     //     const arr = [];
//     //     setActiveTabData(arr);
//     //     prodData.length !== 0 &&
//     //         prodData.map((item, index) => {
//     //             item.items.map((item_, index_) => {
//     //                 if (item_.cat_name === activeTab) {
//     //                     {
//     //                         item_.products.length !== 0 &&
//     //                             item_.products.map((product) => {
//     //                                 arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
//     //                             })

//     //                         setActiveTabData(arr)
//     //                         setTimeout(()=>{
//     //                             setIsLoadingProducts(false);
//     //                         },[1000]);
//     //                     }
//     //                 }
//     //             })

//     //         })

//     // }, [activeTab, activeTabData])





//     const bestSellsArr = [];

//     useEffect(() => {
//         prodData.length !== 0 &&
//             prodData.map((item) => {
//                 if (item.cat_name === "Electronics") {
//                     item.items.length !== 0 &&
//                         item.items.map((item_) => {
//                             item_.products.length !== 0 &&
//                                 item_.products.map((product, index) => {
//                                     bestSellsArr.push(product);
//                                 })
//                         })
//                 }

//             });


//         setBestSells(bestSellsArr);

//     }, [])




//     return (
//         <div style={{ display: 'block' }}>
//             <SliderBanner />
//             <CatSlider data={prodData} />

//             <Banners />

//             {/* popular products  with tabs*/}
//             {/* <section className='homeProducts homeProductWrapper'>
//                 <div className='container-fluid'>
//                     <div className='d-flex align-items-center homeProductsTitleWrap'>
//                         <h2 className='hd mb-0 mt-0 res-full'>Popular Products</h2>
//                         <ul className='list list-inline ml-auto filterTab mb-0 res-full'>

//                             {
//                                 catArray.length !== 0 &&
//                                 catArray.map((cat, index) => {
//                                     return (
//                                         <li key={cat.id} className="list list-inline-item">
//                                             <a className={`cursor text-capitalize 
//                                                 ${activeTabIndex === index ? 'act' : ''}`}
//                                                 onClick={() => {
//                                                     setactiveTab(cat)
//                                                     setactiveTabIndex(index);
//                                                     productRow.current.scrollLeft=0;
//                                                     setIsLoadingProducts(true);
//                                                 }}
//                                             >
//                                                 {cat}
//                                             </a>
//                                         </li>
//                                     )
//                                 })
//                             }

//                         </ul>
//                     </div>


//                     <div className={`productRow ${isLoadingProducts===true && 'loading'}`} ref={productRow}>

//                         {
//                             activeTabData.length !== 0 &&
//                             activeTabData.map((item, index) => {
//                                 return (
//                                     <div className='item' key={index}>

//                                         <Product tag={item.type} item={item} />
//                                     </div>
//                                 )
//                             })
//                         }

//                     </div>

//                 </div>
//             </section> */}

//             {/* popular products without tabs  */}
//             <section className='homeProducts homeProductWrapper'>
//                 <div className='container-fluid'>
//                     <div className='d-flex align-items-center homeProductsTitleWrap'>
//                         <h2 className='hd mb-0 mt-0 res-full'>Popular Products</h2>
//                     </div>

//                     <div className="productRow" ref={productRow}>

//                         {/* <Slider {...settings}> */}


//                         <div className='item' >
//                             <Product tag='sale' />
//                         </div>
//                         <div className='item' >
//                             <Product tag='hot' />
//                         </div>
//                         <div className='item' >
//                             <Product tag='new' />
//                         </div>
//                         {/* <div className='item' >
//                                                  <Product tag='best' />
//                                             </div>

//                                             <div className='item' >
//                                                 <Product tag='sale' />
//                                             </div> */}

//                         {/* </Slider> */}
//                         {/* <Slider {...settings1}>
//                                     <div className='item'>
//                                         <Product  tag='sale'/>
//                                     </div>
//                                     <div className='item'>

//                                         <Product tag="hot" />
//                                     </div>
//                                     <div className='item'>

//                                         <Product tag="new"/>
//                                     </div>
                              
//                                     </Slider> */}
//                     </div>
//                 </div>

//             </section>


//             {/* daily products */}
//             <section className='homeProducts homeProductsRow2 pt-0'>
//                 <div className='container-fluid'>
//                     <div className='d-flex align-items-center'>
//                         <h2 className='hd mb-0 mt-0'>Daily Best Sells</h2>
//                         <ul className='list list-inline-item ml-auto filterTab mb-0'>
//                             <li className='list-inline-item'>
//                                 <a className='cursor'>Featured</a>
//                             </li>
//                             <li className='list-inline-item'>
//                                 <a className='cursor'>Popular</a>
//                             </li>
//                             <li className='list-inline-item'>
//                                 <a className='cursor'>New Added</a>
//                             </li>
//                         </ul>

//                     </div>

//                     <br className='res-hide' /><br className='res-hide' />
//                     <div className='row'>
//                         <div className='col-md-3 pr-5 res-hide'>
//                             <img src={banner5} className='w-100' />
//                         </div>

//                         <div className='col-md-9'>
//                             <Slider {...settings} className='prodSlider'>


//                                 <div className='item' >
//                                     <Product tag='sale' />
//                                 </div>
//                                 <div className='item' >
//                                     <Product tag='best' />
//                                 </div>
//                                 <div className='item' >
//                                     <Product tag='hot' />
//                                 </div>
//                                 <div className='item' >
//                                     <Product tag='new' />
//                                 </div>
//                                 <div className='item' >
//                                     <Product tag='sale' />
//                                 </div>
//                                 <div className='item' >
//                                     <Product tag='sale' />
//                                 </div>

//                             </Slider>
//                         </div>
//                     </div>


//                 </div>
//             </section>

//             {/* top products */}
//             <section className='topProductsSection'>
//                 <div className='container-fluid'>
//                     <div className='row'>
//                         <div className='col'>
//                             <TopProducts title="Top Selling" />
//                         </div>

//                         <div className='col'>
//                             <TopProducts title="Trending Products" />
//                         </div>

//                         <div className='col'>
//                             <TopProducts title="Recently added" />
//                         </div>

//                         <div className='col'>
//                             <TopProducts title="Top Rated" />
//                         </div>

//                     </div>
//                 </div>
//             </section>


//         </div>
//     )
// }

// export default Home;





/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from 'react';

import SliderBanner from './slider/Slider';
import CatSlider from '../../components/catSlider/CatSlider';
import ShopByCrop from '../../components/crop/ShopByCrop';
import Banners from '../../components/banners/Banners';

import './style.css';
import Product from '../../components/product/Product';
import banner5 from '../../assets/images/banner.jpeg';

import Slider from "react-slick";
import TopProducts from './TopProducts/TopProducts';
import axios from 'axios';
import { MyContext } from '../../App';
import ProductList from '../../components/product/ProductList';

const Home = (props) => {

    const [prodData, setprodData] = useState(props.data)
    const [catArray, setcatArray] = useState([])
    const [activeTab, setactiveTab] = useState();
    const [activeTabIndex, setactiveTabIndex] = useState(0);
    const [activeTabData, setActiveTabData] = useState([]);

    const [bestSells, setBestSells] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    const productRow = useRef();
    const context = useContext(MyContext);




    var settings = {
        dots: true,
        infinite: context.windowWidth < 992 ? false : true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        autoPlay: true,
        arrows: context.windowWidth < 992 ? false : true,
    };
    var settings1 = {
        dots: true,
        infinite: context.windowWidth < 992 ? false : true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        autoPlay: true,
        arrows: context.windowWidth < 992 ? false : true,
    };

    const catArr = [];

    useEffect(() => {

        prodData.length !== 0 &&
            prodData.map((item) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        catArr.push(item_.cat_name);
                    })
            })

        const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
        setcatArray(list2)

        setactiveTab(list2[0])

        window.scrollTo(0, 0);

    }, [])





    // useEffect(() => {
    //     const arr = [];
    //     setActiveTabData(arr);
    //     prodData.length !== 0 &&
    //         prodData.map((item, index) => {
    //             item.items.map((item_, index_) => {
    //                 if (item_.cat_name === activeTab) {
    //                     {
    //                         item_.products.length !== 0 &&
    //                             item_.products.map((product) => {
    //                                 arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
    //                             })

    //                         setActiveTabData(arr)
    //                         setTimeout(()=>{
    //                             setIsLoadingProducts(false);
    //                         },[1000]);
    //                     }
    //                 }
    //             })

    //         })

    // }, [activeTab, activeTabData])





    const bestSellsArr = [];

    useEffect(() => {
        prodData.length !== 0 &&
            prodData.map((item) => {
                if (item.cat_name === "Electronics") {
                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.length !== 0 &&
                                item_.products.map((product, index) => {
                                    bestSellsArr.push(product);
                                })
                        })
                }

            });


        setBestSells(bestSellsArr);

    }, [])




    return (
        <div style={{ display: 'block' }}>
            <SliderBanner />
            <CatSlider data={prodData} />

            {/* <Banners /> */}

          
{/* popular products without tabs  */}
<section className='homeProducts homeProductWrapper'>
  <div className='container-fluid d-flex flex-column align-items-center'>
    <div className='d-flex align-items-center homeProductsTitleWrap w-100 justify-content-between'>
      <h2 className='hd mb-0 mt-0 res-full'>Popular Products</h2>
      {/* If you want "Show All" button here, you can add it */}
    </div>

    <div className="productRow d-flex justify-content-center w-100" ref={productRow}>
      <ProductList />
    </div>
  </div>
</section>

<section>
    <ShopByCrop />
</section>

            {/* daily products */}
            <section className='homeProducts homeProductsRow2 pt-0'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'>Daily Best Sells</h2>
                        <ul className='list list-inline-item ml-auto filterTab mb-0'>
                            <li className='list-inline-item'>
                                <a className='cursor'>Featured</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Popular</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>New Added</a>
                            </li>
                        </ul>

                    </div>

                    <br className='res-hide' /><br className='res-hide' />
                    <div className='row'>
                        <div className='col-md-3 pr-5 res-hide '>
                            <img src={banner5} className='w-100 h-[600px]' />
                        </div>

                        <div className='col-md-9'>
                            <Slider {...settings} className='prodSlider'>


                                <div className='item' >
                                    <Product tag='sale' />
                                </div>
                                <div className='item' >
                                    <Product tag='best' />
                                </div>
                                <div className='item' >
                                    <Product tag='hot' />
                                </div>
                                <div className='item' >
                                    <Product tag='new' />
                                </div>
                                <div className='item' >
                                    <Product tag='sale' />
                                </div>
                                <div className='item' >
                                    <Product tag='sale' />
                                </div>

                            </Slider>
                        </div>
                    </div>


                </div>
            </section>

            {/* top products */}
            <section className='topProductsSection'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <TopProducts title="Top Selling" />
                        </div>

                        <div className='col'>
                            <TopProducts title="Trending Products" />
                        </div>

                        <div className='col'>
                            <TopProducts title="Recently added" />
                        </div>

                        <div className='col'>
                            <TopProducts title="Top Rated" />
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home;







