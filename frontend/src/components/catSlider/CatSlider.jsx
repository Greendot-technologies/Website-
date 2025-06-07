


// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useState, useContext } from 'react';
// import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
// import featuredCategory1 from '../../assets/images/featuredCategory1.png';
// import { MyContext } from '../../App';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CatSlider = (props) => {
//   const [allData, setAllData] = useState(props.data);
//   const context = useContext(MyContext);

//   const [itemBg, setItemBg] = useState([
//     '#fffceb', '#ecffec', '#feefea', '#fff3eb', '#fff3ff', '#f2fce4',
//     '#feefea', '#fffceb', '#feefea', '#ecffec', '#feefea', '#fff3eb',
//     '#fff3ff', '#f2fce4', '#feefea', '#fffceb', '#feefea', '#ecffec'
//   ]);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 9,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//   };

//   return (
//     <div className="w-full py-8">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
//         <Slider {...settings} className="cat_slider_Main">
//           {itemBg.length !== 0 &&
//             itemBg.map((bg, index) => (
//               <div className="px-2" key={index}>
//                 <div
//                   className="flex flex-col items-center justify-center p-4 rounded transition-all duration-300 transform hover:scale-110 shadow hover:shadow-md"
//                   style={{ background: bg }}
//                 >
//                   <img src={featuredCategory1} alt="Category" className="w-16 h-16 object-contain mb-2" />
//                   <h5 className="font-semibold text-black mb-1">Categories</h5>
//                   <p className="text-sm text-black opacity-80 m-0">26 items</p>
//                 </div>
//               </div>
//             ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default CatSlider;




// import React, { useContext, useRef, useState, useEffect } from 'react';
// import { FaSeedling, FaFlask, FaBug } from 'react-icons/fa';
// import { MyContext } from '../../App';
// import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

// const CatSlider = () => {
//   const context = useContext(MyContext);
//   const scrollRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const categoryData = [
//     { title: 'Pesticides', icon: <FaBug />, items: 20 },
//     { title: 'Seeds', icon: <FaSeedling />, items: 34 },
//     { title: 'Fertilizers', icon: <FaFlask />, items: 18 },
//     { title: 'Herbicides', icon: <FaBug />, items: 12 },
//     { title: 'Equipments', icon: <FaBug />, items: 15 },
//     { title: 'Insecticides', icon: <FaBug />, items: 15 },
//     { title: 'Other', icon: <FaFlask />, items: 10 },
//     { title: 'Organic Manure', icon: <FaFlask />, items: 14 },
//     { title: 'Grains', icon: <FaSeedling />, items: 28 },
//   ];

//   const colorfulBgs = [
//     '#fffceb', '#ecffec', '#feefea', '#fff3eb', '#fff3ff',
//   ];

//   const CARD_WIDTH = 160 + 24; // card width + margin-right (space-x-6 = 24px)
//   const VISIBLE_CARDS = 8; // roughly slidesToShow

//   // Check if arrows should be enabled or disabled based on scroll position
//   const checkArrows = () => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//     setCanScrollLeft(scrollLeft > 0);
//     setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
//   };

//   // Scroll by one card width
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === 'left' ? -CARD_WIDTH : CARD_WIDTH;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   // Autoplay: scroll right every 3 seconds if possible
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         if (scrollLeft + clientWidth >= scrollWidth) {
//           // If reached right end, scroll back to start (optional) or stop
//           // For non-infinite, just stop autoplay
//           return;
//         }
//         scroll('right');
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     checkArrows();
//     const refCurrent = scrollRef.current;
//     if (refCurrent) {
//       refCurrent.addEventListener('scroll', checkArrows);
//     }
//     return () => {
//       if (refCurrent) {
//         refCurrent.removeEventListener('scroll', checkArrows);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full py-8 relative">
//       <div className="container mx-auto px-4 relative">
//         <h2 className="text-2xl text-center font-bold mb-6">Featured Categories</h2>
 
//         {/* Left Arrow */}
//         <button
//           onClick={() => scroll('left')}
//           aria-label="Scroll Left"
//           disabled={!canScrollLeft}
//           className={`
//             absolute top-1/2 left-0 
//             transform -translate-y-1/2 z-20 
//             bg-white rounded-full shadow p-2 
//             hover:bg-blue-500 hover:text-white 
//             transition-colors duration-300
//             focus:outline-none
//             ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}
//           `}
//           style={{ width: 40, height: 40, marginLeft: '-20px' }}
//         >
//           <MdArrowBackIos size={20} />
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scroll('right')}
//           aria-label="Scroll Right"
//           disabled={!canScrollRight}
//           className={` 
//             absolute top-1/2 right-0
//             transform -translate-y-1/2 z-20 
//             bg-white rounded-full shadow p-2 
//             hover:bg-blue-500 hover:text-white 
//             transition-colors duration-300
//             focus:outline-none
//             ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}
//           `}
//           style={{ width: 40, height: 40, marginRight: '-20px' }}
//         >
//           <MdArrowForwardIos size={20} />
//         </button>

//         {/* Scrollable container with scroll snap */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto no-scrollbar"
//           style={{
//             scrollSnapType: 'x mandatory',
//             scrollBehavior: 'smooth',
//             padding: '0 2rem',
//             scrollPaddingLeft: '2rem',
//             scrollPaddingRight: '2rem',
//           }}
//         >
//           {categoryData.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: colorfulBgs[index % colorfulBgs.length],
//                 flexShrink: 0,
//                 width: '160px',
//                 minHeight: '160px',
//                 scrollSnapAlign: 'start',
//                 marginRight: index === categoryData.length - 1 ? '0' : '24px',
//               }}
//               className={`
//                 flex flex-col items-center justify-center text-center p-4 rounded-lg
//                 cursor-pointer transition-all duration-300 transform
//                 hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:h-36 h-40
//               `}
//             >
//               <div className="text-4xl mb-2 text-gray-800">{item.icon}</div>
//               <h5 className="font-semibold text-gray-900">{item.title}</h5>
//               <p className="text-sm opacity-90 text-gray-700">{item.items} items</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom CSS for hiding scrollbar */}
//       <style jsx>{`
//         .no-scrollbar {
//           -ms-overflow-style: none; /* IE and Edge */
//           scrollbar-width: none; /* Firefox */
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none; /* Chrome, Safari and Opera */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CatSlider;


// import React, { useContext, useRef, useState, useEffect } from 'react';
// import { FaSeedling, FaFlask, FaBug } from 'react-icons/fa';
// import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
// import { MyContext } from '../../App';
// import axios from 'axios';

// const iconMap = {
//   Pesticides: <FaBug />,
//   Seeds: <FaSeedling />,
//   Fertilizers: <FaFlask />,
//   Herbicides: <FaBug />,
//   Equipments: <FaBug />,
//   Insecticides: <FaBug />,
//   Other: <FaFlask />,
//   'Organic Manure': <FaFlask />,
//   Grains: <FaSeedling />,
// };

// const CatSlider = () => {
//   const context = useContext(MyContext);
//   const scrollRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const [categories, setCategories] = useState([]);

//   const colorfulBgs = ['#fffceb', '#ecffec', '#feefea', '#fff3eb', '#fff3ff'];
//   const CARD_WIDTH = 160 + 24; // 160px card + 24px margin
//   const API_URL = 'http://localhost:5000/api/category/categories';

//   useEffect(() => {
//     // Fetch category data from backend
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         const data = response.data.categories.map((cat) => ({
//           ...cat,
//           icon: iconMap[cat.name_en] || <FaSeedling />,
//           items: Math.floor(Math.random() * 20) + 10, // Mock item count
//         }));
//         setCategories(data);
//       } catch (error) {
//         console.error('Failed to fetch categories:', error.message);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const checkArrows = () => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//     setCanScrollLeft(scrollLeft > 0);
//     setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
//   };

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === 'left' ? -CARD_WIDTH : CARD_WIDTH;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         if (scrollLeft + clientWidth >= scrollWidth) return;
//         scroll('right');
//       }
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     checkArrows();
//     const refCurrent = scrollRef.current;
//     if (refCurrent) {
//       refCurrent.addEventListener('scroll', checkArrows);
//     }
//     return () => {
//       if (refCurrent) {
//         refCurrent.removeEventListener('scroll', checkArrows);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full py-8 relative">
//       <div className="container mx-auto px-4 relative">
//         <h2 className="text-2xl text-center font-bold mb-6">Featured Categories</h2>

//         {/* Left Arrow */}
//         <button
//           onClick={() => scroll('left')}
//           disabled={!canScrollLeft}
//           className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 focus:outline-none ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
//           style={{ width: 40, height: 40, marginLeft: '-20px' }}
//         >
//           <MdArrowBackIos size={20} />
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scroll('right')}
//           disabled={!canScrollRight}
//           className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 focus:outline-none ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
//           style={{ width: 40, height: 40, marginRight: '-20px' }}
//         >
//           <MdArrowForwardIos size={20} />
//         </button>

//         {/* Scrollable Container */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto no-scrollbar"
//           style={{
//             scrollSnapType: 'x mandatory',
//             scrollBehavior: 'smooth',
//             padding: '0 2rem',
//             scrollPaddingLeft: '2rem',
//             scrollPaddingRight: '2rem',
//           }}
//         >
//           {categories.map((item, index) => (
//             <div
//               key={item.id}
//               style={{
//                 backgroundColor: colorfulBgs[index % colorfulBgs.length],
//                 flexShrink: 0,
//                 width: '160px',
//                 minHeight: '160px',
//                 scrollSnapAlign: 'start',
//                 marginRight: index === categories.length - 1 ? '0' : '24px',
//               }}
//               className="flex flex-col items-center justify-center text-center p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:h-36 h-40"
//             >
//               <div className="text-4xl mb-2 text-gray-800">{item.icon}</div>
//               <h5 className="font-semibold text-gray-900">{item.name_en}</h5>
//               <p className="text-sm opacity-90 text-gray-700">{item.items} items</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CatSlider;


import React, { useContext, useRef, useState, useEffect } from 'react';
import { FaSeedling, FaFlask, FaBug } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { MyContext } from '../../App';
import axios from 'axios';

const iconMap = {
  Pesticides: <FaBug />,
  Seeds: <FaSeedling />,
  Fertilizers: <FaFlask />,
  Herbicides: <FaBug />,
  Equipments: <FaBug />,
  Insecticides: <FaBug />,
  Other: <FaFlask />,
  'Organic Manure': <FaFlask />,
  Grains: <FaSeedling />,
};

const CatSlider = () => {
  const context = useContext(MyContext);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [categories, setCategories] = useState([]);

  const colorfulBgs = ['#fffceb', '#ecffec', '#feefea', '#fff3eb', '#fff3ff'];
  const CARD_WIDTH = 160 + 24; // 160px card + 24px margin
  const API_URL = 'http://localhost:5000/api/category/categories';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URL);
        const resData = response.data?.categories;
        if (Array.isArray(resData)) {
          const data = resData.map((cat) => ({
            ...cat,
            icon: iconMap[cat.name_en] || <FaSeedling />,
            items: Math.floor(Math.random() * 20) + 10,
          }));
          setCategories(data);
        } else {
          console.error('API did not return expected array:', resData);
          setCategories([]);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error.message);
      }
    };

    fetchCategories();
  }, []);

  const checkArrows = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -CARD_WIDTH : CARD_WIDTH;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) return;
        scroll('right');
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    checkArrows();
    const refCurrent = scrollRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('scroll', checkArrows);
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', checkArrows);
      }
    };
  }, []);

  return (
    <div className="w-full py-8 relative">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl text-center font-bold mb-6">Featured Categories</h2>

        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 focus:outline-none ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
          style={{ width: 40, height: 40, marginLeft: '-20px' }}
        >
          <MdArrowBackIos size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 focus:outline-none ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
          style={{ width: 40, height: 40, marginRight: '-20px' }}
        >
          <MdArrowForwardIos size={20} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            padding: '0 2rem',
            scrollPaddingLeft: '2rem',
            scrollPaddingRight: '2rem',
          }}
        >
          {categories.map((item, index) => (
            <div
              key={item.id}
              style={{
                backgroundColor: colorfulBgs[index % colorfulBgs.length],
                flexShrink: 0,
                width: '160px',
                minHeight: '160px',
                scrollSnapAlign: 'start',
                marginRight: index === categories.length - 1 ? '0' : '24px',
              }}
              className="flex flex-col items-center justify-center text-center p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:h-36 h-40"
            >
              <div className="text-4xl mb-2 text-gray-800">{item.icon}</div>
              <h5 className="font-semibold text-gray-900">{item.name_en}</h5>
              <p className="text-sm opacity-90 text-gray-700">{item.items} items</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatSlider;
