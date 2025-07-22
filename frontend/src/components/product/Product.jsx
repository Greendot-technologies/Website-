

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
//     <div className="max-w-[480px] w-full mx-auto border border-black/10 rounded-3xl p-6 transition-all relative overflow-hidden hover:shadow-2xl bg-white">
//       {props.tag && (
//         <span
//           className={`absolute top-0 left-0 text-white px-6 py-2 text-lg capitalize z-10 rounded-br-full rounded-tl-md ${
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

//       <div className="flex flex-col items-center">
//         <Link>
//           <div className="relative w-full overflow-hidden rounded-xl">
//             <div className="h-[280px] flex items-center justify-center mb-4">
//               <img
//                 src={product1}
//                 className="w-[380px] h-[270px] object-cover transition-transform duration-300 hover:scale-110 rounded-xl"
//                 alt={productData?.title || 'Product'}
//               />
//             </div>

//             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 opacity-0 scale-75 transition-all duration-300 hover:opacity-100 hover:scale-100 rounded-lg">
//               <ul className="bg-white w-36 border border-[#bce3c9] rounded-lg flex">
//                 <li className="flex-1 border-r border-[#bce3c9]">
//                   <button className="p-3 text-[#3bb77e] hover:text-black hover:opacity-70">
//                     <FavoriteBorderOutlinedIcon fontSize="medium" />
//                   </button>
//                 </li>
//                 <li className="flex-1 border-r border-[#bce3c9]">
//                   <button className="p-3 text-[#3bb77e] hover:text-black hover:opacity-70">
//                     <CompareArrowsOutlinedIcon fontSize="medium" />
//                   </button>
//                 </li>
//                 <li className="flex-1">
//                   <button className="p-3 text-[#3bb77e] hover:text-black hover:opacity-70">
//                     <RemoveRedEyeOutlinedIcon fontSize="medium" />
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </Link>

//         <div className="info mt-5 text-center">
//           <span className="block text-black/80 text-lg mb-2">Organic</span>
//           <h4 className="text-2xl font-semibold leading-7 truncate max-w-full">
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
//             size="large"
//           />
//           <span className="block text-black/60 text-base mt-2">
//             By{' '}
//             <Link className="text-green-600 no-underline font-medium">
//               Organic
//             </Link>
//           </span>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-6">
//         <div className="flex items-center space-x-3">
//           <span className="line-through text-gray-500 text-xl">Rs 250/-</span>
//           <span className="text-green-600 font-extrabold text-2xl">Rs 200/-</span>
//         </div>

//         <Button
//           className="!ml-auto !bg-[#def9ec] !text-[#3bb77e] !capitalize !text-lg hover:!bg-[#3bb77e] hover:!text-white transition"
//           variant="contained"
//           size="large"
//         >
//           <ShoppingCartOutlinedIcon fontSize="medium" className="mr-2" />
//           Add
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Product;




// import React from 'react';
// import Rating from '@mui/material/Rating';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// const Product = ({ item, tag }) => {
//   const imageUrl =
//     item?.images?.find(img => img.is_primary)?.image_url ||
//     item?.images?.[0]?.image_url ||
//     'https://via.placeholder.com/300x30';

//   const finalImage = imageUrl.startsWith('/uploads')
//     ? `http://localhost:5000${imageUrl}`
//     : imageUrl;

//   return (
//     <div className="max-w-[480px] w-full mx-auto border border-black/10 rounded-3xl p-6 transition-all relative overflow-hidden hover:shadow-2xl bg-white">
//       {tag && (
//         <span className={`absolute top-0 left-0 text-white px-6 py-2 text-lg capitalize z-10 rounded-br-full rounded-tl-md ${
//           tag === 'hot' ? 'bg-[#f74b81]' :
//           tag === 'sale' ? 'bg-[#67bcee]' :
//           tag === 'new' ? 'bg-[#3bb77e]' :
//           tag === 'best' ? 'bg-[#f59758]' : 'bg-red-500'
//         }`}>
//           {tag}
//         </span>
//       )}

//       <div className="flex flex-col items-center">
//         <div className="relative w-full overflow-hidden rounded-xl">
//           <div className="h-[280px] flex items-center justify-center mb-4">
//             <img
//               src={finalImage}
//               className="w-[380px] h-[270px] object-cover transition-transform duration-300 hover:scale-110 rounded-xl"
//               alt={item?.name || 'Product'}
//             />
//           </div>
//         </div>

//         <div className="info mt-5 text-center">
//           <span className="block text-black/80 text-lg mb-2">{item?.brand || 'Brand'}</span>
//           <h4 className="text-2xl font-semibold leading-7 truncate max-w-full">
//             <Link className="text-black no-underline">{item?.name || 'Product Name'}</Link>
//           </h4>
//           <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly size="large" />
//           <span className="block text-black/60 text-base mt-2">
//             {item?.discount_percentage ? `${item.discount_percentage}% OFF` : 'No Discount'}
//           </span>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-6">
//         <div className="flex items-center space-x-3">
//           <span className="line-through text-gray-500 text-xl">Rs {item?.price}</span>
//           <span className="text-green-600 font-extrabold text-2xl">Rs {item?.discounted_price}</span>
//         </div>

//         <Button
//           className="!ml-auto !bg-[#def9ec] !text-[#3bb77e] hover:!bg-[#3bb77e] hover:!text-white transition"
//           variant="contained"
//           size="large"
//         >
//           <ShoppingCartOutlinedIcon fontSize="medium" className="mr-2" />
//           Add
//         </Button>

//       </div>
//     </div>
//   );
// };

// export default Product;


// import React from 'react';
// import Rating from '@mui/material/Rating';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// const Product = ({ item, tag }) => {
//   const imageUrl =
//     item?.images?.find(img => img?.is_primary)?.image_url ||
//     item?.images?.[0]?.image_url;

//   const finalImage = imageUrl
//     ? (imageUrl.startsWith('/uploads') ? `http://localhost:5000${imageUrl}` : imageUrl)
//     : '/fallback.jpg'; // fallback if missing

//   return (
//     <div className="max-w-[480px] w-full mx-auto border border-black/10 rounded-3xl p-6 transition-all relative overflow-hidden hover:shadow-2xl bg-white">
//       {tag && (
//         <span className={`absolute top-0 left-0 text-white px-6 py-2 text-lg capitalize z-10 rounded-br-full rounded-tl-md ${
//           tag === 'hot' ? 'bg-[#f74b81]' :
//           tag === 'sale' ? 'bg-[#67bcee]' :
//           tag === 'new' ? 'bg-[#3bb77e]' :
//           tag === 'best' ? 'bg-[#f59758]' : 'bg-red-500'
//         }`}>{tag}</span>
//       )}

//       <div className="flex flex-col items-center">
//         <div className="relative w-full overflow-hidden rounded-xl">
//           <div className="h-[280px] flex items-center justify-center mb-4">
//             <img
//               src={finalImage}
//               className="w-[380px] h-[270px] object-cover transition-transform duration-300 hover:scale-110 rounded-xl"
//               alt={item?.name || 'Product'}
//               onError={(e) => {
//                 e.target.src = '/fallback.jpg';
//               }}
//             />
//           </div>
//         </div>

//         <div className="info mt-5 text-center">
//           <span className="block text-black/80 text-lg mb-2">{item?.brand || 'Brand'}</span>
//           <h4 className="text-2xl font-semibold leading-7 truncate max-w-full">
//             <Link className="text-black no-underline">{item?.name || 'Product Name'}</Link>
//           </h4>
//           <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly size="large" />
//           <span className="block text-black/60 text-base mt-2">
//             {item?.discount_percentage ? `${item.discount_percentage}% OFF` : 'No Discount'}
//           </span>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-6">
//         <div className="flex items-center space-x-3">
//           <span className="line-through text-gray-500 text-xl">
//             Rs {item?.price || '0'}
//           </span>
//           <span className="text-green-600 font-extrabold text-2xl">
//             Rs {item?.discounted_price || '0'}
//           </span>
//         </div>

//         <Button
//           className="!ml-auto !bg-[#def9ec] !text-[#3bb77e] hover:!bg-[#3bb77e] hover:!text-white transition"
//           variant="contained"
//           size="large"
//         >
//           <ShoppingCartOutlinedIcon fontSize="medium" className="mr-2" />
//           Add
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Product;



import React from 'react';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = ({ item, tag }) => {
  const navigate = useNavigate();

  const imageUrl =
    item?.images?.find(img => img?.is_primary)?.image_url ||
    item?.images?.[0]?.image_url;

  const finalImage = imageUrl
    ? (imageUrl.startsWith('/uploads') ? `http://localhost:5000${imageUrl}` : imageUrl)
    : '/fallback.jpg';

  const handleAddClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="max-w-[480px] w-full mx-auto border border-black/10 rounded-3xl p-6 transition-all relative overflow-hidden hover:shadow-2xl bg-white">
      {tag && (
        <span className={`absolute top-0 left-0 text-white px-6 py-2 text-lg capitalize z-10 rounded-br-full rounded-tl-md ${
          tag === 'hot' ? 'bg-[#f74b81]' :
          tag === 'sale' ? 'bg-[#67bcee]' :
          tag === 'new' ? 'bg-[#3bb77e]' :
          tag === 'best' ? 'bg-[#f59758]' : 'bg-red-500'
        }`}>{tag}</span>
      )}

      <div className="flex flex-col items-center">
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="h-[280px] flex items-center justify-center mb-4">
            <img
              src={finalImage}
              className="w-[380px] h-[270px] object-cover transition-transform duration-300 hover:scale-110 rounded-xl"
              alt={item?.name || 'Product'}
              onError={(e) => {
                e.target.src = '/fallback.jpg';
              }}
            />
          </div>
        </div>

        <div className="info mt-5 text-center">
          <span className="block text-black/80 text-lg mb-2">{item?.brand || 'Brand'}</span>
          <h4 className="text-2xl font-semibold leading-7 truncate max-w-full">
            <span className="text-black no-underline">{item?.name || 'Product Name'}</span>
          </h4>
          <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly size="large" />
          <span className="block text-black/60 text-base mt-2">
            {item?.discount_percentage ? `${item.discount_percentage}% OFF` : 'No Discount'}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center space-x-3">
          <span className="line-through text-gray-500 text-xl">
            Rs {item?.price || '0'}
          </span>
          <span className="text-green-600 font-extrabold text-2xl">
            Rs {item?.discounted_price || '0'}
          </span>
        </div>

        <Button
          onClick={handleAddClick}
          className="!ml-auto !bg-[#def9ec] !text-[#3bb77e] hover:!bg-[#3bb77e] hover:!text-white transition"
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

