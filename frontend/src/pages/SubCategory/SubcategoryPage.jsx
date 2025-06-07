import React from 'react';
import { useParams } from 'react-router-dom';

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();

  const dummyProducts = [
    {
      id: 1,
      name: 'NOMINEE GOLD',
      company: 'Pi Industries Ltd.',
      image: '/images/nominee-gold.png',
    },
    {
      id: 2,
      name: 'FERIO',
      company: 'SWAL Corporation Ltd.',
      image: '/images/ferio.png',
    },
    {
      id: 3,
      name: 'TARGA SUPER',
      company: 'Dhanuka Agritech Ltd.',
      image: '/images/targa-super.png',
    },
    {
      id: 4,
      name: 'Roundup',
      company: 'Bayer',
      image: '/images/roundup.png',
    },
  ];

  return (
    <div className="p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 mb-6 shadow-md">
        <h1 className="text-3xl font-bold text-green-700 capitalize flex items-center gap-2">
          <span>🧪</span> {subcategory.replace(/-/g, ' ')}
        </h1>
        <p className="mt-2 text-gray-700">
          Organic or chemical products that kill or inhibit the growth of agricultural weeds and invasive species.
        </p>
      </div>

      {/* Top Row Info */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-600">
          Products <span className="font-medium">{dummyProducts.length}</span> items found
        </p>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
          <option value="popular">Popular</option>
          <option value="latest">Latest</option>
          <option value="a-z">A-Z</option>
        </select>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyProducts.map((product) => (
          <div key={product.id} className="border rounded-xl shadow-sm p-4 hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-1">by {product.company}</p>
            <p className="text-sm text-gray-500">0 Nearby agrishops</p>
            <button className="text-blue-600 mt-2 hover:underline text-sm">Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryPage;
