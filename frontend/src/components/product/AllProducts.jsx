/* eslint-disable react/no-unknown-property */
import React from 'react';
import Product from './Product';
import product1 from '../../assets/images/product1.webp';

const AllProducts = () => {
  const dummyProducts = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    image: product1,
    title: `Product ${index + 1}`,
    tag: index % 3 === 0 ? 'sale' : 'best',
  }));

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyProducts.map((item, index) => (
          <Product key={index} item={item} tag={item.tag} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
