// /* eslint-disable react/prop-types */
// /* eslint-disable react/no-unknown-property */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState, useContext } from 'react';
// import './style.css';
// import Rating from '@mui/material/Rating';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import product1 from '../../assets/images/product-1-1.jpg'


// import { MyContext } from '../../App';


// const Product = (props) => {

//     const [productData, setProductData] = useState();

//     const context = useContext(MyContext);

//     useEffect(() => {
//         setProductData(props.item);
//     }, [props.item])

//     const setProductCat = () => {
//         sessionStorage.setItem('parentCat', productData.parentCatName);
//         sessionStorage.setItem('subCatName', productData.subCatName);
//     }


//     return (
//         <div className='productThumb'>
//             {
//                 props.tag !== null && props.tag !== undefined &&
//                 <span className={`badge ${props.tag}`}>{props.tag}</span>
//             }
//             <div className='flex'>
//                 <Link >
//                     <div className='imgWrapper'>
//                         <div className='p-4 wrapper mb-3'>
//                             <img src={product1} className='w-100' />
//                         </div>

//                         <div className='overlay transition'>
//                             <ul className='list list-inline mb-0'>
//                                 <li className='list-inline-item'>
//                                     <a className='cursor' tooltip="Add to Wishlist">
//                                         <FavoriteBorderOutlinedIcon />
//                                     </a>
//                                 </li>
//                                 <li className='list-inline-item'>
//                                     <a className='cursor' tooltip="Compare">
//                                         <CompareArrowsOutlinedIcon />
//                                     </a>
//                                 </li>
//                                 <li className='list-inline-item'>
//                                     <a className='cursor' tooltip="Quick View">
//                                         <RemoveRedEyeOutlinedIcon />
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </Link>

//                 <div className='info'>
//                     <span className='d-block catName'>Organic</span>
//                     <h4 className='title'><Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum?</Link></h4>
//                     <Rating name="half-rating-read"
//                         value={3.5} precision={0.5} readOnly />
//                     <span className='brand d-block text-g'>By <Link className='text-g'>Organic</Link></span>



//                 </div>
//             </div>
//             <div className='d-flex justify-content-between align-items-center mt-3'>
//                 <div className='d-flex align-items-center'>
//                 <span className='oldPrice '>Rs 250/-</span>
//                     <span className='price text-g font-weight-bold'>
//                         Rs 200/-</span> 
//                 </div>

//                 <Button className='ml-auto  transition '><ShoppingCartOutlinedIcon /> Add
//                 </Button>
//             </div>



//         </div>
//     )
// }

// export default Product;




// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState, useContext } from 'react';
// import Rating from '@mui/material/Rating';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import product1 from '../../assets/images/product-1-1.jpg';
// import { MyContext } from '../../App';

// const Product = (props) => {
//   const [productData, setProductData] = useState();
//   const context = useContext(MyContext);

//   useEffect(() => {
//     setProductData(props.item);
//   }, [props.item]);

//   const setProductCat = () => {
//     sessionStorage.setItem('parentCat', productData?.parentCatName);
//     sessionStorage.setItem('subCatName', productData?.subCatName);
//   };

//   return (
//     <div className="relative w-full border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
//       {props.tag && (
//         <span
//           className={`absolute top-0 left-0 z-10 text-white text-sm px-6 py-2 rounded-br-full rounded-tl-md capitalize ${
//             props.tag === 'hot' ? 'bg-[#f74b81]' :
//             props.tag === 'sale' ? 'bg-[#67bcee]' :
//             props.tag === 'new' ? 'bg-[#3bb77e]' :
//             props.tag === 'best' ? 'bg-[#f59758]' : 'bg-red-500'
//           }`}
//         >
//           {props.tag}
//         </span>
//       )}

//       <div className="flex flex-col">
//         <Link onClick={setProductCat}>
//           <div className="relative overflow-hidden">
//             <div className="h-[350px] overflow-hidden p-4 mb-3">
//               <img src={product1} alt="product" className="w-full transition-transform duration-300 hover:scale-110" />
//             </div>
//             <div className="absolute top-0 left-0 w-full h-full p-6 flex items-center justify-center bg-white bg-opacity-80 opacity-0 scale-90 hover:opacity-100 hover:scale-100 transition-all duration-300">
//               <ul className="flex border border-green-200 rounded-xl bg-white">
//                 <li>
//                   <button className="p-3 border-r border-green-200 text-green-600 hover:text-black">
//                     <FavoriteBorderOutlinedIcon />
//                   </button>
//                 </li>
//                 <li>
//                   <button className="p-3 border-r border-green-200 text-green-600 hover:text-black">
//                     <CompareArrowsOutlinedIcon />
//                   </button>
//                 </li>
//                 <li>
//                   <button className="p-3 text-green-600 hover:text-black">
//                     <RemoveRedEyeOutlinedIcon />
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </Link>

//         <div className="mt-2">
//           <span className="text-sm text-black opacity-80">Organic</span>
//           <h4 className="text-lg font-semibold my-2">
//             <Link className="text-black hover:underline">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum?
//             </Link>
//           </h4>
//           <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly />
//           <span className="text-gray-600 text-sm block mt-1">
//             By <Link className="text-green-600 hover:underline">Organic</Link>
//           </span>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center space-x-2">
//           <span className="line-through text-gray-400 text-base">Rs 250/-</span>
//           <span className="text-green-600 font-bold text-lg">Rs 200/-</span>
//         </div>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: '#def9ec',
//             color: '#3bb77e',
//             fontSize: '18px',
//             textTransform: 'capitalize',
//             '&:hover': {
//               backgroundColor: '#3bb77e',
//               color: '#fff',
//             },
//           }}
//         >
//           <ShoppingCartOutlinedIcon /> Add
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Product;




// import React from "react";
// import Rating from "@mui/material/Rating";
// import { Button } from "@mui/material";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
// import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

// // Sample product data
// const products = [
//   {
//     id: 1,
//     name: "Organic Fertilizer",
//     type: "Organic",
//     price: 200,
//     originalPrice: 250,
//     tag: "new",
//     image:
//       "https://mir-s3-cdn-cf.behance.net/projects/404/394e1c196405479.Y3JvcCwxOTcxLDE1NDEsMCwxNDE.jpg",
//     brand: "GreenGrow",
//     rating: 4.5,
//   },
// //   {
// //     id: 2,
// //     name: "Nitrogen-Based Fertilizer",
// //     type: "Nitrogen",
// //     price: 300,
// //     originalPrice: 350,
// //     tag: "sale",
// //     image:
// //       "https://images.unsplash.com/photo-1621609762276-62d47dcf9aa5?auto=format&fit=crop&w=600&q=80",
// //     brand: "NitroBoost",
// //     rating: 4,
// //   },
// //   {
// //     id: 3,
// //     name: "Phosphate Fertilizer",
// //     type: "Phosphate",
// //     price: 180,
// //     originalPrice: 220,
// //     tag: "hot",
// //     image:
// //       "https://images.unsplash.com/photo-1610211424243-0ad12874164c?auto=format&fit=crop&w=600&q=80",
// //     brand: "PhosPro",
// //     rating: 3.5,
// //   },
// ];

// const ProductCard = ({ product }) => {
//   const { name, type, price, originalPrice, tag, image, brand, rating } = product;

//   return (
//     <div className="w-full max-w-sm border border-black/10 rounded-xl p-4 bg-white shadow hover:shadow-lg transition-all relative overflow-hidden">
//       {/* Badge */}
//       {tag && (
//         <span
//           className={`absolute top-0 left-0 text-white text-sm px-3 py-1 rounded-br-xl z-10 capitalize ${
//             tag === "hot"
//               ? "bg-pink-500"
//               : tag === "sale"
//               ? "bg-blue-400"
//               : tag === "new"
//               ? "bg-green-600"
//               : "bg-orange-400"
//           }`}
//         >
//           {tag}
//         </span>
//       )}

//       {/* Image */}
//       <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//         {/* Hover Actions */}
//         <div className="absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 hover:opacity-100 transition-all duration-300">
//           <ul className="bg-white border rounded-lg flex gap-4 p-2">
//             <li>
//               <button className="text-green-600 hover:text-black">
//                 <FavoriteBorderOutlinedIcon />
//               </button>
//             </li>
//             <li>
//               <button className="text-green-600 hover:text-black">
//                 <CompareArrowsOutlinedIcon />
//               </button>
//             </li>
//             <li>
//               <button className="text-green-600 hover:text-black">
//                 <RemoveRedEyeOutlinedIcon />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Info */}
//       <span className="text-sm text-gray-600">{type}</span>
//       <h4 className="text-lg font-semibold my-1">{name}</h4>
//       <Rating name="read-only" value={rating} precision={0.5} readOnly />
//       <p className="text-sm text-gray-600">
//         By <span className="text-green-600 font-medium">{brand}</span>
//       </p>

//       {/* Price + Add to Cart */}
//       <div className="flex items-center justify-between mt-4">
//         <div>
//           <span className="line-through text-sm text-gray-400 mr-1">Rs {originalPrice}/-</span>
//           <span className="text-green-600 font-semibold text-lg">Rs {price}/-</span>
//         </div>
//         <Button
//           className="!text-green-600 !bg-green-100 hover:!bg-green-600 hover:!text-white !capitalize !text-sm !py-1 !px-4"
//           startIcon={<ShoppingCartOutlinedIcon />}
//         >
//           Add
//         </Button>
//       </div>
//     </div>
//   );
// };

// const Product = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-6 px-4 py-10 bg-gray-50 min-h-screen">
//       {products.map((item) => (
//         <ProductCard key={item.id} product={item} />
//       ))}
//     </div>
//   );
// };

// export default Product;



// import React from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';
// import { ShoppingCartIcon, HeartIcon, EyeIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

// // Card Component
// const Products = ({ tag, image, category, title, rating, brand, oldPrice, price }) => {
//   return (
//     <div className="relative bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 flex w-full max-w-2xl">
//       {/* Badge */}
//       {tag && (
//         <span
//         //   className={`absolute top-0 left-0 px-6 py-2 text-white text-sm font-medium rounded-br-[50px] rounded-tl-md capitalize
//         //   ${tag === 'sale' ? 'bg-blue-400' :
//         //     tag === 'hot' ? 'bg-pink-500' :
//         //       tag === 'new' ? 'bg-green-500' :
//         //         'bg-orange-400'}`}
//         >
//           {tag}
//         </span>
//       )}

//       {/* Image Section */}
//       <div className="relative group w-1/3 flex items-center justify-center">
//         <div className="w-full h-48 overflow-hidden flex items-center justify-center">
//           <img
//             src={image}
//             alt={title}
//             className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>

//         {/* Overlay Icons */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ul className="flex bg-white border border-green-100 rounded-lg p-2 space-x-2">
//             <li>
//               <button className="p-2 text-green-600 hover:text-black">
//                 <HeartIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-2 text-green-600 hover:text-black">
//                 <ArrowsRightLeftIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-2 text-green-600 hover:text-black">
//                 <EyeIcon className="h-5 w-5" />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="w-2/3 pl-4 flex flex-col justify-between">
//         <div>
//           <span className="text-sm text-gray-600">{category}</span>
//           <h4 className="text-lg font-semibold text-gray-900 mt-1 line-clamp-2">
//             <a href="#" className="hover:underline">{title}</a>
//           </h4>
//           <div className="flex items-center mt-1">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//               />
//             ))}
//           </div>
//           <span className="text-sm text-gray-600 mt-1 block">
//             By <a href="#" className="text-green-600 hover:underline">{brand}</a>
//           </span>
//         </div>

//         {/* Price and Add Button */}
//         <div className="flex justify-between items-center mt-4">
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-500 line-through text-lg">₹{oldPrice}/-</span>
//             <span className="text-green-600 font-bold text-lg">₹{price}/-</span>
//           </div>
//           <button className="flex items-center space-x-1 bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
//             <ShoppingCartIcon className="h-5 w-5" />
//             <span>Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Container to show multiple cards
// const Product = () => {
//   const products = [
//     {

//       image: 'https://mir-s3-cdn-cf.behance.net/projects/404/394e1c196405479.Y3JvcCwxOTcxLDE1NDEsMCwxNDE.jpg',
//       category: 'Fertilizer',
//       title: 'Organic NPK Fertilizer - Boosts overall plant growth with Nitrogen, Phosphorus, and Potassium.',
//       rating: 4,
//       brand: 'AgroLife',
//       oldPrice: 500,
//       price: 380,
//     },
//     // {
//     //   tag: 'hot',
//     //   image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/DR/DV/BZ/114357147/urea-fertilizer.jpg',
//     //   category: 'Fertilizer',
//     //   title: 'Urea Fertilizer - High Nitrogen content ideal for leafy vegetable growth.',
//     //   rating: 3,
//     //   brand: 'GrowMore',
//     //   oldPrice: 300,
//     //   price: 220,
//     // },
//     // {
//     //   tag: 'new',
//     //   image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/XF/SO/NG/13695192/zinc-sulphate-fertilizer.jpg',
//     //   category: 'Fertilizer',
//     //   title: 'Zinc Sulphate Fertilizer - Prevents zinc deficiency in soil and promotes productivity.',
//     //   rating: 5,
//     //   brand: 'GreenFarm',
//     //   oldPrice: 400,
//     //   price: 310,
//     // }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-8 px-4">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Agricultural Fertilizers</h2>
//       <div className="space-y-6">
//         {products.map((product, index) => (
//           <Products
//             key={index}
//             {...product}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;




// import React from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';
// import { ShoppingCartIcon, HeartIcon, EyeIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

// // Card Component
// const Products = ({ tag, image, category, title, rating, brand, oldPrice, price }) => {
//   return (
//     <div className="relative bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex w-full max-w-4xl">
//       {/* Badge */}
//       {tag && (
//         <span
//         //   className={`absolute top-0 left-0 px-8 py-3 text-white text-base font-semibold rounded-br-[60px] rounded-tl-lg capitalize
//         //   ${tag === 'sale' ? 'bg-blue-500' :
//         //     tag === 'hot' ? 'bg-pink-600' :
//         //     tag === 'new' ? 'bg-green-600' :
//         //     'bg-orange-500'}`}
//         >
//           {tag}
//         </span>
//       )}

//       {/* Image Section */}
//       <div className="relative group w-2/5 flex items-center justify-center">
//         <div className="w-full h-72 overflow-hidden flex items-center justify-center rounded-2xl bg-gray-50">
//           <img
//             src={image}
//             alt={title}
//             className="h-full object-contain transition-transform duration-300 group-hover:scale-115"
//           />
//         </div>

//         {/* Overlay Icons */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ul className="flex bg-white border border-green-200 rounded-xl p-3 space-x-3 shadow-md">
//             <li>
//               <button className="p-2 text-green-600 hover:text-green-800">
//                 <HeartIcon className="h-7 w-7" />
//               </button>
//             </li>
//             <li>
//               <button className="p-2 text-green-600 hover:text-green-800">
//                 <ArrowsRightLeftIcon className="h-7 w-7" />
//               </button>
//             </li>
//             <li>
//               <button className="p-2 text-green-600 hover:text-green-800">
//                 <EyeIcon className="h-7 w-7" />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="w-3/5 pl-6 flex flex-col justify-between">
//         <div>
//           <span className="text-base text-gray-600 font-medium">{category}</span>
//           <h4 className="text-2xl font-bold text-gray-900 mt-2 line-clamp-2 leading-tight">
//             <a href="#" className="hover:underline">{title}</a>
//           </h4>
//           <div className="flex items-center mt-2">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 className={`h-7 w-7 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//               />
//             ))}
//           </div>
//           <span className="text-base text-gray-600 mt-2 block">
//             By <a href="#" className="text-green-600 hover:underline font-medium">{brand}</a>
//           </span>
//         </div>

//         {/* Price and Add Button */}
//         <div className="flex justify-between items-center mt-6">
//           <div className="flex items-center space-x-3">
//             <span className="text-gray-500 line-through text-xl">₹{oldPrice}/-</span>
//             <span className="text-green-600 font-bold text-2xl">₹{price}/-</span>
//           </div>
//           <button className="flex items-center space-x-2 bg-green-100 text-green-600 px-6 py-3 rounded-xl hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-sm">
//             <ShoppingCartIcon className="h-6 w-6" />
//             <span className="text-lg font-semibold">Add to Cart</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Container to show multiple cards
// const Product = () => {
//   const products = [
//     {
     
//       image: 'https://mir-s3-cdn-cf.behance.net/projects/404/394e1c196405479.Y3JvcCwxOTcxLDE1NDEsMCwxNDE.jpg',
//       category: 'Fertilizer',
//       title: 'Organic NPK Fertilizer - Boosts overall plant growth with Nitrogen, Phosphorus, and Potassium.',
//       rating: 4,
//       brand: 'AgroLife',
//       oldPrice: 500,
//       price: 380,
//     },
//     // {
      
//     //   image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/DR/DV/BZ/114357147/urea-fertilizer.jpg',
//     //   category: 'Fertilizer',
//     //   title: 'Urea Fertilizer - High Nitrogen content ideal for leafy vegetable growth.',
//     //   rating: 3,
//     //   brand: 'GrowMore',
//     //   oldPrice: 300,
//     //   price: 220,
//     // },
//     // {
   
//     //   image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/XF/SO/NG/13695192/zinc-sulphate-fertilizer.jpg',
//     //   category: 'Fertilizer',
//     //   title: 'Zinc Sulphate Fertilizer - Prevents zinc deficiency in soil and promotes productivity.',
//     //   rating: 5,
//     //   brand: 'GreenFarm',
//     //   oldPrice: 400,
//     //   price: 310,
//     // },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4">
//       {/* <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Agricultural Fertilizers</h2> */}
//       <div className="space-y-8">
//         {products.map((product, index) => (
//           <Products
//             key={index}
//             {...product}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;



// import React from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';
// import { ShoppingCartIcon, HeartIcon, EyeIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

// // Compact Product Card Component
// const Products= ({ tag, image, category, title, rating, brand, oldPrice, price }) => {
//   return (
//     <div className="relative bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 w-64">
//       {/* Badge */}
//       {tag && (
//         <span
//           className={`absolute top-0 left-0 px-4 py-1 text-white text-xs font-medium rounded-br-[40px] rounded-tl-md capitalize
//           ${tag === 'hot' ? 'bg-pink-500' :
//             tag === 'sale' ? 'bg-blue-400' :
//             tag === 'new' ? 'bg-green-500' :
//             tag === 'best' ? 'bg-orange-400' : 'bg-red-500'}`}
//         >
//           {tag}
//         </span>
//       )}

//       <div className="flex flex-col">
//         {/* Image Section */}
//         <div className="relative group">
//           <div className="w-full h-48 overflow-hidden flex items-center justify-center">
//             <img
//               src={image || "https://gogarden.co.in/cdn/shop/files/71yg6hRnpTL._SL1200_fac2b8e7-208b-482d-9493-07d03daaff6f.jpg?v=1741858085/150"}
//               alt={title}
//               className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
//             />
//           </div>

//           {/* Overlay with Icons */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <ul className="flex bg-white border border-green-100 rounded-lg p-1 space-x-1">
//               <li>
//                 <button className="p-1 text-green-600 hover:text-black">
//                   <HeartIcon className="h-4 w-4" />
//                 </button>
//               </li>
//               <li>
//                 <button className="p-1 text-green-600 hover:text-black">
//                   <ArrowsRightLeftIcon className="h-4 w-4" />
//                 </button>
//               </li>
//               <li>
//                 <button className="p-1 text-green-600 hover:text-black">
//                   <EyeIcon className="h-4 w-4" />
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="mt-3">
//           <span className="text-xs text-gray-600">{category || 'Organic'}</span>
//           <h4 className="text-base font-semibold text-gray-900 mt-1 line-clamp-2">
//             <a href="#" className="hover:underline">
//               {title || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
//             </a>
//           </h4>
//           <div className="flex items-center mt-1">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 className={`h-4 w-4 ${i < (rating || 3.5) ? 'text-yellow-400' : 'text-gray-300'}`}
//               />
//             ))}
//           </div>
//           <span className="text-xs text-gray-600 mt-1 block">
//             By <a href="#" className="text-green-600 hover:underline">{brand || 'Organic'}</a>
//           </span>
//         </div>

//         {/* Price and Add Button */}
//         <div className="flex justify-between items-center mt-3">
//           <div className="flex items-center space-x-1">
//             <span className="text-gray-500 line-through text-sm">₹{oldPrice || 250}/-</span>
//             <span className="text-green-600 font-bold text-sm">₹{price || 200}/-</span>
//           </div>
//           <button className="flex items-center space-x-1 bg-green-100 text-green-600 px-3 py-1 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
//             <ShoppingCartIcon className="h-4 w-4" />
//             <span className="text-sm">Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Component to display multiple cards in a centered grid
// const Product = () => {
//   const products = [
//     {
//       tag: 'sale',
//       image: 'https://gogarden.co.in/cdn/shop/files/71yg6hRnpTL._SL1200_fac2b8e7-208b-482d-9493-07d03daaff6f.jpg?v=1741858085/150',
//       category: 'Organic',
//       title: 'Organic Moringa Powder',
//       rating: 3.5,
//       brand: 'Organic',
//       oldPrice: 250,
//       price: 200,
//     },
//     {
//       tag: 'hot',
//       image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/DR/DV/BZ/114357147/urea-fertilizer.jpg',
//       category: 'Fertilizer',
//       title: 'Urea Fertilizer',
//       rating: 4,
//       brand: 'GrowMore',
//       oldPrice: 300,
//       price: 220,
//     },
//     {
//       tag: 'new',
//       image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/XF/SO/NG/13695192/zinc-sulphate-fertilizer.jpg',
//       category: 'Fertilizer',
//       title: 'Zinc Sulphate Fertilizer',
//       rating: 5,
//       brand: 'GreenFarm',
//       oldPrice: 400,
//       price: 310,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
//       <div className="max-w-5xl w-full">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
//           {products.map((product, index) => (
//             <Product
//               key={index}
//               tag={product.tag}
//               image={product.image}
//               category={product.category}
//               title={product.title}
//               rating={product.rating}
//               brand={product.brand}
//               oldPrice={product.oldPrice}
//               price={product.price}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


// import React from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';
// import { ShoppingCartIcon, HeartIcon, EyeIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

// // Individual Product Card Component
// const ProductCard = ({ tag, image, category, title, rating, brand, oldPrice, price }) => {
//   return (
//     <div className="relative bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 w-64">
//       {/* Badge */}
//       {tag && (
//         <span
//           className={`absolute top-0 left-0 px-4 py-1 text-white text-xs font-medium rounded-br-[40px] rounded-tl-md capitalize
//           ${tag === 'hot' ? 'bg-pink-500' :
//             tag === 'sale' ? 'bg-blue-400' :
//             tag === 'new' ? 'bg-green-500' :
//             tag === 'best' ? 'bg-orange-400' : 'bg-red-500'}`}
//         >
//           {tag}
//         </span>
//       )}

//       <div className="flex flex-col">
//         {/* Image Section */}
//         <div className="relative group">
//           <div className="w-full h-48 overflow-hidden flex items-center justify-center">
//             <img
//               src={image || "https://via.placeholder.com/150"}
//               alt={title}
//               className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
//             />
//           </div>

//           {/* Overlay with Icons */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <ul className="flex bg-white border border-green-100 rounded-lg p-1 space-x-1">
//               <li>
//                 <button className="p-1 text-green-600 hover:text-black">
//                   <HeartIcon className="h-4 w-4" />
//                 </button>
//               </li>
//               <li>
//                 <button className="p-1 text-green-600 hover:text-black">
//                   <ArrowsRightLeftIcon className="h-4 w-4" />
//                 </button>
//               </li>
//               <li>
//                 <button className="p-1 text-green-600 hover:text-black">
//                   <EyeIcon className="h-4 w-4" />
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="mt-3">
//           <span className="text-xs text-gray-600">{category || 'Organic'}</span>
//           <h4 className="text-base font-semibold text-gray-900 mt-1 line-clamp-2">
//             <a href="#" className="hover:underline">
//               {title || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
//             </a>
//           </h4>
//           <div className="flex items-center mt-1">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 className={`h-4 w-4 ${i < Math.round(rating || 3.5) ? 'text-yellow-400' : 'text-gray-300'}`}
//               />
//             ))}
//           </div>
//           <span className="text-xs text-gray-600 mt-1 block">
//             By <a href="#" className="text-green-600 hover:underline">{brand || 'Organic'}</a>
//           </span>
//         </div>

//         {/* Price and Add Button */}
//         <div className="flex justify-between items-center mt-3">
//           <div className="flex items-center space-x-1">
//             <span className="text-gray-500 line-through text-sm">₹{oldPrice || 250}/-</span>
//             <span className="text-green-600 font-bold text-sm">₹{price || 200}/-</span>
//           </div>
//           <button className="flex items-center space-x-1 bg-green-100 text-green-600 px-3 py-1 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
//             <ShoppingCartIcon className="h-4 w-4" />
//             <span className="text-sm">Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Component to display multiple product cards
// const Product = () => {
//   const products = [
//     {
//       tag: 'sale',
//       image: 'https://gogarden.co.in/cdn/shop/files/71yg6hRnpTL._SL1200_fac2b8e7-208b-482d-9493-07d03daaff6f.jpg?v=1741858085/150',
//       category: 'Organic',
//       title: 'Organic Moringa Powder',
//       rating: 3.5,
//       brand: 'Organic',
//       oldPrice: 250,
//       price: 200,
//     },
//     // {
//     //   tag: 'hot',
//     //   image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/DR/DV/BZ/114357147/urea-fertilizer.jpg',
//     //   category: 'Fertilizer',
//     //   title: 'Urea Fertilizer',
//     //   rating: 4,
//     //   brand: 'GrowMore',
//     //   oldPrice: 300,
//     //   price: 220,
//     // },
//     // {
//     //   tag: 'new',
//     //   image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/XF/SO/NG/13695192/zinc-sulphate-fertilizer.jpg',
//     //   category: 'Fertilizer',
//     //   title: 'Zinc Sulphate Fertilizer',
//     //   rating: 5,
//     //   brand: 'GreenFarm',
//     //   oldPrice: 400,
//     //   price: 310,
//     // },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
//       <div className="max-w-5xl w-full">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
//           {products.map((product, index) => (
//             <ProductCard
//               key={index}
//               tag={product.tag}
//               image={product.image}
//               category={product.category}
//               title={product.title}
//               rating={product.rating}
//               brand={product.brand}
//               oldPrice={product.oldPrice}
//               price={product.price}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;




// import React from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';
// import { ShoppingCartIcon, HeartIcon, EyeIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

// // Card Component
// const Products = ({ tag, image, category, title, rating, brand, oldPrice, price }) => {
//   return (
//     <div className="relative bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 flex w-full max-w-2xl">
//       {/* Badge */}
//       {tag && (
//         <span
//         //   className={`absolute top-0 left-0 px-6 py-2 text-white text-sm font-medium rounded-br-[50px] rounded-tl-md capitalize
//         //   ${tag === 'sale' ? 'bg-blue-400' :
//         //     tag === 'hot' ? 'bg-pink-500' :
//         //       tag === 'new' ? 'bg-green-500' :
//         //         'bg-orange-400'}`}
//         >
//           {tag}
//         </span>
//       )}

//       {/* Image Section */}
//       <div className="relative group w-1/3 flex items-center justify-center">
//         <div className="w-full h-48 overflow-hidden flex items-center justify-center">
//           <img
//             src={image}
//             alt={title}
//             className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>

//         {/* Overlay Icons */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ul className="flex bg-white border border-green-100 rounded-lg p-2 space-x-2">
//             <li>
//               <button className="p-2 text-green-600 hover:text-black">
//                 <HeartIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-2 text-green-600 hover:text-black">
//                 <ArrowsRightLeftIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-2 text-green-600 hover:text-black">
//                 <EyeIcon className="h-5 w-5" />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="w-2/3 pl-4 flex flex-col justify-between">
//         <div>
//           <span className="text-sm text-gray-600">{category}</span>
//           <h4 className="text-lg font-semibold text-gray-900 mt-1 line-clamp-2">
//             <a href="#" className="hover:underline">{title}</a>
//           </h4>
//           <div className="flex items-center mt-1">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//               />
//             ))}
//           </div>
//           <span className="text-sm text-gray-600 mt-1 block">
//             By <a href="#" className="text-green-600 hover:underline">{brand}</a>
//           </span>
//         </div>

//         {/* Price and Add Button */}
//         <div className="flex justify-between items-center mt-4">
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-500 line-through text-lg">₹{oldPrice}/-</span>
//             <span className="text-green-600 font-bold text-lg">₹{price}/-</span>
//           </div>
//           <button className="flex items-center space-x-1 bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
//             <ShoppingCartIcon className="h-5 w-5" />
//             <span>Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Container to show multiple cards
// const Product = () => {
//   const products = [
//     {

//       image: 'https://mir-s3-cdn-cf.behance.net/projects/404/394e1c196405479.Y3JvcCwxOTcxLDE1NDEsMCwxNDE.jpg',
//       category: 'Fertilizer',
//       title: 'Organic NPK Fertilizer - Boosts overall plant growth with Nitrogen, Phosphorus, and Potassium.',
//       rating: 4,
//       brand: 'AgroLife',
//       oldPrice: 500,
//       price: 380,
//     },
//     // {
//     //   tag: 'hot',
//     //   image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/DR/DV/BZ/114357147/urea-fertilizer.jpg',
//     //   category: 'Fertilizer',
//     //   title: 'Urea Fertilizer - High Nitrogen content ideal for leafy vegetable growth.',
//     //   rating: 3,
//     //   brand: 'GrowMore',
//     //   oldPrice: 300,
//     //   price: 220,
//     // },
//     // {
//     //   tag: 'new',
//     //   image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/XF/SO/NG/13695192/zinc-sulphate-fertilizer.jpg',
//     //   category: 'Fertilizer',
//     //   title: 'Zinc Sulphate Fertilizer - Prevents zinc deficiency in soil and promotes productivity.',
//     //   rating: 5,
//     //   brand: 'GreenFarm',
//     //   oldPrice: 400,
//     //   price: 310,
//     // }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-8 px-4">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Agricultural Fertilizers</h2>
//       <div className="space-y-6">
//         {products.map((product, index) => (
//           <Products
//             key={index}
//             {...product}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;





// import React from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';
// import { ShoppingCartIcon, HeartIcon, EyeIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

// // Single Product Card
// const Products = ({ tag, image, category, title, rating, brand, oldPrice, price }) => {
//   return (
//     <div className="relative bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-xs mx-auto">
//       {/* Badge */}
//       {tag && (
//         <span className={`absolute top-0 left-0 px-6 py-2 text-white text-sm font-medium rounded-br-[50px] rounded-tl-md capitalize
//           ${tag === 'sale' ? 'bg-blue-400' :
//             tag === 'hot' ? 'bg-pink-500' :
//               tag === 'new' ? 'bg-green-500' :
//                 'bg-orange-400'}`}>
//           {tag}
//         </span>
//       )}

//       {/* Image Section */}
//       <div className="relative group w-full flex items-center justify-center mb-4">
//         <div className="w-full h-48 overflow-hidden flex items-center justify-center">
//           <img
//             src={image}
//             alt={title}
//             className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>

//         {/* Overlay Icons */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ul className="flex bg-white border border-green-100 rounded-lg p-2 space-x-2">
//             <li>
//               <button className="p-2 text-green-600 hover:text-black">
//                 <HeartIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-2 text-green-600 hover:text-black">
//                 <ArrowsRightLeftIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-2 text-green-600 hover:text-black">
//                 <EyeIcon className="h-5 w-5" />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col justify-between">
//         <div>
//           <span className="text-sm text-gray-600">{category}</span>
//           <h4 className="text-lg font-semibold text-gray-900 mt-1 line-clamp-2">
//             <a href="#" className="hover:underline">{title}</a>
//           </h4>
//           <div className="flex items-center mt-1">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//               />
//             ))}
//           </div>
//           <span className="text-sm text-gray-600 mt-1 block">
//             By <a href="#" className="text-green-600 hover:underline">{brand}</a>
//           </span>
//         </div>

//         {/* Price and Add Button */}
//         <div className="flex justify-between items-center mt-4">
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-500 line-through text-lg">₹{oldPrice}/-</span>
//             <span className="text-green-600 font-bold text-lg">₹{price}/-</span>
//           </div>
//           <button className="flex items-center space-x-1 bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
//             <ShoppingCartIcon className="h-5 w-5" />
//             <span>Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Product Section Container
// const Product = () => {
//   const products = [
//     {
//       image: 'https://mir-s3-cdn-cf.behance.net/projects/404/394e1c196405479.Y3JvcCwxOTcxLDE1NDEsMCwxNDE.jpg',
//       category: 'Fertilizer',
//       title: 'Organic NPK Fertilizer - Boosts overall plant growth with Nitrogen, Phosphorus, and Potassium.',
//       rating: 4,
//       brand: 'AgroLife',
//       oldPrice: 500,
//       price: 380,
//     },
//     // Add more products if needed
//   ];

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-7xl">
//         <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Top Agricultural Fertilizers</h2>
//         <div className="flex flex-col items-center gap-8">
//           {products.map((product, index) => (
//             <Products key={index} {...product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


// import React from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';
// import { ShoppingCartIcon, HeartIcon, EyeIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

// // Single Product Card
// const Products = ({ tag, image, category, title, rating, brand, oldPrice, price }) => {
//   return (
//     <div className="relative bg-white border border-gray-200 rounded-2xl p-2 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-xs mx-auto">
//       {/* Badge */}
//       {tag && (
//         <span className={`absolute top-0 left-0 px-4 py-1 text-white text-xs font-medium rounded-br-[50px] rounded-tl-md capitalize
//           ${tag === 'sale' ? 'bg-blue-400' :
//             tag === 'hot' ? 'bg-pink-500' :
//               tag === 'new' ? 'bg-green-500' :
//                 'bg-orange-400'}`}>
//           {tag}
//         </span>
//       )}

//       {/* Image Section */}
//       <div className="relative group w-full flex items-center justify-center mb-3">
//         <div className="w-full h-40 overflow-hidden flex items-center justify-center">
//           <img
//             src={image}
//             alt={title}
//             className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>

//         {/* Overlay Icons */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ul className="flex bg-white border border-green-100 rounded-lg p-1 space-x-1">
//             <li>
//               <button className="p-1 text-green-600 hover:text-black">
//                 <HeartIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-1 text-green-600 hover:text-black">
//                 <ArrowsRightLeftIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-1 text-green-600 hover:text-black">
//                 <EyeIcon className="h-5 w-5" />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col justify-between">
//         <div>
//           <span className="text-xs text-gray-600">{category}</span>
//           <h4 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
//             <a href="#" className="hover:underline">{title}</a>
//           </h4>
//           <div className="flex items-center mt-1">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//               />
//             ))}
//           </div>
//           <span className="text-xs text-gray-600 mt-1 block">
//             By <a href="#" className="text-green-600 hover:underline">{brand}</a>
//           </span>
//         </div>

//         {/* Price and Add Button */}
//         <div className="flex justify-between items-center mt-3">
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-500 line-through text-sm">₹{oldPrice}/-</span>
//             <span className="text-green-600 font-bold text-sm">₹{price}/-</span>
//           </div>
//           <button className="flex items-center space-x-1 bg-green-100 text-green-600 px-3 py-1 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300 text-sm">
//             <ShoppingCartIcon className="h-4 w-4" />
//             <span>Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Product Section Container
// const Product = () => {
//   const products = [
//     {
//       image: 'https://mir-s3-cdn-cf.behance.net/projects/404/394e1c196405479.Y3JvcCwxOTcxLDE1NDEsMCwxNDE.jpg',
//       category: 'Fertilizer',
//       title: 'Organic NPK Fertilizer - Boosts overall plant growth with Nitrogen, Phosphorus, and Potassium.',
//       rating: 4,
//       brand: 'AgroLife',
//       oldPrice: 500,
//       price: 380,
//     },
//     // Add more products here if needed
//   ];

//   return (
//     <div className="flex justify-center px-2 py-4">
//       <div className="w-full max-w-7xl">
//         <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">Top Agricultural Fertilizers</h2>
//         <div className="flex flex-col items-center gap-4">
//           {products.map((product, index) => (
//             <Products key={index} {...product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


// import React from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';
// import { ShoppingCartIcon, HeartIcon, EyeIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

// // Single Product Card
// const Products = ({ tag, image, category, title, rating, brand, oldPrice, price }) => {
//   return (
//     <div className="relative bg-white border border-gray-200 rounded-2xl p-2 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-xs mx-auto">
//       {/* Badge */}
//       {tag && (
//         <span className={`absolute top-0 left-0 px-4 py-1 text-white text-xs font-medium rounded-br-[50px] rounded-tl-md capitalize
//           ${tag === 'sale' ? 'bg-blue-400' :
//             tag === 'hot' ? 'bg-pink-500' :
//               tag === 'new' ? 'bg-green-500' :
//                 'bg-orange-400'}`}>
//           {tag}
//         </span>
//       )}

//       {/* Image Section */}
//       <div className="relative group w-full flex items-center justify-center mb-3">
//         <div className="w-full h-40 overflow-hidden flex items-center justify-center">
//           <img
//             src={image}
//             alt={title}
//             className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>

//         {/* Overlay Icons */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ul className="flex bg-white border border-green-100 rounded-lg p-1 space-x-1">
//             <li>
//               <button className="p-1 text-green-600 hover:text-black">
//                 <HeartIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-1 text-green-600 hover:text-black">
//                 <ArrowsRightLeftIcon className="h-5 w-5" />
//               </button>
//             </li>
//             <li>
//               <button className="p-1 text-green-600 hover:text-black">
//                 <EyeIcon className="h-5 w-5" />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col justify-between">
//         <div>
//           <span className="text-xs text-gray-600">{category}</span>
//           <h4 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
//             <a href="#" className="hover:underline">{title}</a>
//           </h4>
//           <div className="flex items-center mt-1">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//               />
//             ))}
//           </div>
//           <span className="text-xs text-gray-600 mt-1 block">
//             By <a href="#" className="text-green-600 hover:underline">{brand}</a>
//           </span>
//         </div>

//         {/* Price and Add Button */}
//         <div className="flex justify-between items-center mt-3">
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-500 line-through text-sm">₹{oldPrice}/-</span>
//             <span className="text-green-600 font-bold text-sm">₹{price}/-</span>
//           </div>
//           <button className="flex items-center space-x-1 bg-green-100 text-green-600 px-3 py-1 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300 text-sm">
//             <ShoppingCartIcon className="h-4 w-4" />
//             <span>Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Product Section Container
// const Product = () => {
//   const products = [
//     {
//       image: 'https://mir-s3-cdn-cf.behance.net/projects/404/394e1c196405479.Y3JvcCwxOTcxLDE1NDEsMCwxNDE.jpg',
//       category: 'Fertilizer',
//       title: 'Organic NPK Fertilizer - Boosts overall plant growth with Nitrogen, Phosphorus, and Potassium.',
//       rating: 4,
//       brand: 'AgroLife',
//       oldPrice: 500,
//       price: 380,
//     },
//     // Add more products here if needed
//   ];

//   return (
//     <div className="flex justify-center px-2 py-4">
//       <div className="w-full max-w-7xl">
//         <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">Top Agricultural Fertilizers</h2>
//         <div className="flex flex-col items-center">
//           {products.map((product, index) => (
//             <Products key={index} {...product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;





// import React, { useEffect, useState, useContext } from 'react';
// import Rating from '@mui/material/Rating';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import product1 from '../../assets/images/product1.webp';
// import { MyContext } from '../../App';

// const Product = (props) => {
//   const [productData, setProductData] = useState();
//   const context = useContext(MyContext);

//   useEffect(() => {
//     setProductData(props.item);
//   }, [props.item]);

//   const setProductCat = () => {
//     sessionStorage.setItem('parentCat', productData.parentCatName);
//     sessionStorage.setItem('subCatName', productData.subCatName);
//   };

//   return (
//     <div className="max-w-[360px] mx-auto border border-black/10 rounded-2xl p-5 transition-all relative overflow-hidden hover:shadow-lg bg-white">
//       {props.tag && (
//         <span
//           className={`absolute top-0 left-0 text-white px-4 py-1 text-sm capitalize z-10 rounded-br-full rounded-tl-md ${
//             props.tag === 'hot'
//               ? 'bg-[#f74b81]'
//               : props.tag === 'sale'
//               ? 'bg-[#67bcee]'
//               : props.tag === 'new'
//               ? 'bg-[#3bb77e]'
//               : props.tag === 'best'
//               ? 'bg-[#f59758]'
//               : 'bg-red-500'
//           }`}
//         >
//           {props.tag}
//         </span>
//       )}

//       <div className="flex flex-col items-center ">
//         <Link>
//           <div className="relative w-full overflow-hidden rounded-lg">
//             <div className="h-[200px] flex items-center justify-center mb-3">
//               <img
//                 src={product1}
//                 className="w-[300px] h-[250px] object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
//                 alt={productData?.title || 'Product'}
//               />
//             </div>

//             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 opacity-0 scale-75 transition-all duration-300 hover:opacity-100 hover:scale-100 rounded-lg">
//               <ul className="bg-white w-32 border border-[#bce3c9] rounded-lg flex">
//                 <li className="flex-1 border-r border-[#bce3c9]">
//                   <button className="p-2 text-[#3bb77e] hover:text-black hover:opacity-70">
//                     <FavoriteBorderOutlinedIcon fontSize="small" />
//                   </button>
//                 </li>
//                 <li className="flex-1 border-r border-[#bce3c9]">
//                   <button className="p-2 text-[#3bb77e] hover:text-black hover:opacity-70">
//                     <CompareArrowsOutlinedIcon fontSize="small" />
//                   </button>
//                 </li>
//                 <li className="flex-1">
//                   <button className="p-2 text-[#3bb77e] hover:text-black hover:opacity-70">
//                     <RemoveRedEyeOutlinedIcon fontSize="small" />
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </Link>

//         <div className="info mt-3 text-center">
//           <span className="block text-black/80 text-base mb-1">Organic</span>
//           <h4 className="text-xl font-semibold leading-6 truncate max-w-full">
//             <Link
//               className="text-black no-underline"
//               title={productData?.title}
//             >
//               {productData?.title || 'Sample Product Title Goes Here'}
//             </Link>
//           </h4>
//           <Rating
//             name="half-rating-read"
//             value={3.5}
//             precision={0.5}
//             readOnly
//             size="medium"
//           />
//           <span className="block text-black/60 text-sm mt-1">
//             By{' '}
//             <Link className="text-green-600 no-underline font-medium">
//               Organic
//             </Link>
//           </span>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-5">
//         <div className="flex items-center space-x-2">
//           <span className="line-through text-gray-500 text-lg">Rs 250/-</span>
//           <span className="text-green-600 font-extrabold text-xl">Rs 200/-</span>
//         </div>

//         <Button
//           className="!ml-auto !bg-[#def9ec] !text-[#3bb77e] !capitalize !text-base hover:!bg-[#3bb77e] hover:!text-white transition"
//           variant="contained"
//           size="medium"
//         >
//           <ShoppingCartOutlinedIcon fontSize="small" className="mr-1" />
//           Add
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Product;



import React, { useEffect, useState, useContext } from 'react';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import product1 from '../../assets/images/product1.webp';
import { MyContext } from '../../App';

const Product = (props) => {
  const [productData, setProductData] = useState();
  const context = useContext(MyContext);

  useEffect(() => {
    setProductData(props.item);
  }, [props.item]);

  const setProductCat = () => {
    sessionStorage.setItem('parentCat', productData.parentCatName);
    sessionStorage.setItem('subCatName', productData.subCatName);
  };

  return (
    <div className="max-w-[480px] w-full mx-auto border border-black/10 rounded-3xl p-6 transition-all relative overflow-hidden hover:shadow-2xl bg-white">
      {props.tag && (
        <span
          className={`absolute top-0 left-0 text-white px-6 py-2 text-lg capitalize z-10 rounded-br-full rounded-tl-md ${
            props.tag === 'hot'
              ? 'bg-[#f74b81]'
              : props.tag === 'sale'
              ? 'bg-[#67bcee]'
              : props.tag === 'new'
              ? 'bg-[#3bb77e]'
              : props.tag === 'best'
              ? 'bg-[#f59758]'
              : 'bg-red-500'
          }`}
        >
          {props.tag}
        </span>
      )}

      <div className="flex flex-col items-center">
        <Link>
          <div className="relative w-full overflow-hidden rounded-xl">
            <div className="h-[280px] flex items-center justify-center mb-4">
              <img
                src={product1}
                className="w-[380px] h-[270px] object-cover transition-transform duration-300 hover:scale-110 rounded-xl"
                alt={productData?.title || 'Product'}
              />
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 opacity-0 scale-75 transition-all duration-300 hover:opacity-100 hover:scale-100 rounded-lg">
              <ul className="bg-white w-36 border border-[#bce3c9] rounded-lg flex">
                <li className="flex-1 border-r border-[#bce3c9]">
                  <button className="p-3 text-[#3bb77e] hover:text-black hover:opacity-70">
                    <FavoriteBorderOutlinedIcon fontSize="medium" />
                  </button>
                </li>
                <li className="flex-1 border-r border-[#bce3c9]">
                  <button className="p-3 text-[#3bb77e] hover:text-black hover:opacity-70">
                    <CompareArrowsOutlinedIcon fontSize="medium" />
                  </button>
                </li>
                <li className="flex-1">
                  <button className="p-3 text-[#3bb77e] hover:text-black hover:opacity-70">
                    <RemoveRedEyeOutlinedIcon fontSize="medium" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Link>

        <div className="info mt-5 text-center">
          <span className="block text-black/80 text-lg mb-2">Organic</span>
          <h4 className="text-2xl font-semibold leading-7 truncate max-w-full">
            <Link
              className="text-black no-underline"
              title={productData?.title}
            >
              {productData?.title || 'Sample Product Title Goes Here'}
            </Link>
          </h4>
          <Rating
            name="half-rating-read"
            value={3.5}
            precision={0.5}
            readOnly
            size="large"
          />
          <span className="block text-black/60 text-base mt-2">
            By{' '}
            <Link className="text-green-600 no-underline font-medium">
              Organic
            </Link>
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center space-x-3">
          <span className="line-through text-gray-500 text-xl">Rs 250/-</span>
          <span className="text-green-600 font-extrabold text-2xl">Rs 200/-</span>
        </div>

        <Button
          className="!ml-auto !bg-[#def9ec] !text-[#3bb77e] !capitalize !text-lg hover:!bg-[#3bb77e] hover:!text-white transition"
          variant="contained"
          size="large"
        >
          <ShoppingCartOutlinedIcon fontSize="medium" className="mr-2" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default Product;
