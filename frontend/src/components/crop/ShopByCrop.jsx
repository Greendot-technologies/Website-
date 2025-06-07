import React, { useRef, useState, useEffect } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { FaLeaf, FaAppleAlt, FaPepperHot, FaCarrot, FaSeedling, FaPagelines } from 'react-icons/fa';

const ShopByCrop = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cropData = [
    { name: 'Wheat', icon: <FaPagelines />, products: 25 },
    { name: 'Rice', icon: <FaSeedling />, products: 30 },
    { name: 'Corn', icon: <FaLeaf />, products: 18 },
    { name: 'Tomato', icon: <FaPepperHot />, products: 20 },
    { name: 'Carrot', icon: <FaCarrot />, products: 14 },
    { name: 'Apple', icon: <FaAppleAlt />, products: 16 },
    { name: 'Leafy Greens', icon: <FaLeaf />, products: 22 },
    { name: 'Others', icon: <FaSeedling />, products: 10 },
  ];

  const colorfulBgs = [
    '#ecfdf5', '#fff7ed', '#fef2f2', '#eef2ff', '#fdf4ff',
  ];

  const CARD_WIDTH = 160 + 24;

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
    <div className="w-full py-10 relative bg-white">
      <div className="container mx-auto px-11 relative">
        <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Shop by Crop</h2>

        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll Left"
          disabled={!canScrollLeft}
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-green-500 hover:text-white transition-colors duration-300 focus:outline-none ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
          style={{ width: 40, height: 40, marginLeft: '-20px' }}
        >
          <MdArrowBackIos size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll Right"
          disabled={!canScrollRight}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-green-500 hover:text-white transition-colors duration-300 focus:outline-none ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
          style={{ width: 40, height: 40, marginRight: '-20px' }}
        >
          <MdArrowForwardIos size={20} />
        </button>

        {/* Slider */}
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
          {cropData.map((crop, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colorfulBgs[index % colorfulBgs.length],
                flexShrink: 0,
                width: '150px',
                minHeight: '150px',
                scrollSnapAlign: 'start',
                marginRight: index === cropData.length - 1 ? '0' : '24px',
                borderRadius: '50%',
              }}
              className="flex flex-col items-center justify-center text-center p-11 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:h-36 h-40"
            >
              <div className="text-4xl mb-2 text-gray-800">{crop.icon}</div>
              <h5 className="font-semibold text-gray-900">{crop.name}</h5>
              <p className="text-sm text-gray-700 opacity-90">{crop.products} products</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ShopByCrop;
