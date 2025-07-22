// /* eslint-disable react/no-unknown-property */
// import React from 'react';
// import Product from './Product';
// import product1 from '../../assets/images/product1.webp';

// const AllProducts = () => {
//   const dummyProducts = Array.from({ length: 12 }, (_, index) => ({
//     id: index + 1,
//     image: product1,
//     title: `Product ${index + 1}`,
//     tag: index % 3 === 0 ? 'sale' : 'best',
//   }));

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-6">All Products</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {dummyProducts.map((item, index) => (
//           <Product key={index} item={item} tag={item.tag} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products/summary');
        setProducts(res.data.products || []);
      } catch (error) {
        console.error('Failed to fetch all products:', error);
      }
    };
    fetchAll();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <Product key={index} item={item} tag="sale" />
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {products.map((item) => (
    <Product key={item.id} item={item} />
  ))}
</div>

    </div>
  );
};

export default AllProducts;

