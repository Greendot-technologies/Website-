import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const DailyBestSells = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBestSells = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products/summary');
        const result = res.data.products || [];

        console.log("Fetched products:", result); // Debug log
        setProducts(result.slice(0, 8)); // Show top 8
      } catch (err) {
        console.error("Failed to fetch best sells:", err);
      }
    };

    fetchBestSells();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Daily Best Sells</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Product key={item.id} item={item} tag="best" />
        ))}
      </div>
    </div>
  );
};

export default DailyBestSells;
