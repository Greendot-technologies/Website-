
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
