

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product'; // Your existing Product component
import product1 from '../../assets/images/product1.webp'; // Example product image

const ProductList = () => {
  const dummyProducts = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: product1,
    title: `Product ${i + 1}`,
    tag: i % 2 === 0 ? 'new' : 'hot',
  }));

  const scrollContainerRef = useRef(null);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6 right-[600px]">
        {/* <h2 className="text-2xl font-bold">Popular Products</h2> */}
        <Link
          to="/AllProducts"
          className="text-green-600 hover:text-green-800 font-semibold whitespace-nowrap right-[600px]"
        >
          Show All
        </Link>
      </div>

      <div className="flex justify-center lg:grid-cols-4 ">
        {/* Horizontal scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[380px] snap-center"
            >
              <Product item={product} tag={product.tag} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
