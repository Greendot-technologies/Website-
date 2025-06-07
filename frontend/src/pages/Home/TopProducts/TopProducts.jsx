// import React from 'react';
// import './style.css';

// import img1 from '../../../assets/images/thumbnail-1.jpg';
// import img2 from '../../../assets/images/thumbnail-1.jpg';
// import img3 from '../../../assets/images/thumbnail-1.jpg';
// import { Link } from 'react-router-dom';
// import Rating from '@mui/material/Rating';

// const TopProducts = (props) => {
//     return (
//         <>
//             <div className='topSelling_box'>
//                 <h3>{props.title}</h3>

//                 <div className='items d-flex align-items-center'>

//                     <div className='img'>
//                         <Link to="">
//                             <img src={img1} className='w-100' />
//                         </Link>
//                     </div>


//                     <div className='info px-3'>
//                         <Link to=""><h4>Lorem ipsum dolor sit amet consectetur.</h4></Link>
//                         <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
//                         <div className='d-flex align-items-center'>
//                             <span className='price text-g font-weight-bold'>$28.85</span> <span className='oldPrice'>$32.8</span>
//                         </div>
//                     </div>
//                 </div>


//                 <div className='items d-flex align-items-center'>

//                     <div className='img'>
//                         <Link to="">
//                             <img src={img1} className='w-100' />
//                         </Link>
//                     </div>


//                     <div className='info px-3'>
//                         <Link to=""><h4>Lorem ipsum dolor sit amet consectetur.</h4></Link>
//                         <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
//                         <div className='d-flex align-items-center'>
//                             <span className='price text-g font-weight-bold'>$28.85</span> <span className='oldPrice'>$32.8</span>
//                         </div>
//                     </div>
//                 </div>


//                 <div className='items d-flex align-items-center'>

//                     <div className='img'>
//                         <Link to="">
//                             <img src={img1} className='w-100' />
//                         </Link>
//                     </div>


//                     <div className='info px-3'>
//                         <Link to=""><h4>Lorem ipsum dolor sit amet consectetur.</h4></Link>
//                         <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
//                         <div className='d-flex align-items-center'>
//                             <span className='price text-g font-weight-bold'>$28.85</span> <span className='oldPrice'>$32.8</span>
//                         </div>
//                     </div>
//                 </div>




//             </div>
//         </>
//     )
// }

// export default TopProducts;



import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

import img1 from '../../../assets/images/pd1.webp';
import img2 from '../../../assets/images/pd2.jpeg';
import img3 from '../../../assets/images/pd3.jpeg';

const TopProducts = ({ title = "Top Selling Products" }) => {
    const products = [
        {
            id: 1,
            name: "Organic Nitrogen Fertilizer",
            image: img1,
            price: 18.75,
            oldPrice: 22.99,
            rating: 4.5
        },
        {
            id: 2,
            name: "Herbal Pesticide - Neem Based",
            image: img2,
            price: 12.50,
            oldPrice: 15.00,
            rating: 4.0
        },
        {
            id: 3,
            name: "Potassium Rich Plant Food",
            image: img3,
            price: 24.20,
            oldPrice: 29.99,
            rating: 3.5
        },
    ];

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold pb-4 mb-6 relative border-b-2 border-gray-200">
                {title}
                <span className="absolute bottom-0 left-0 w-1/5 h-1 bg-green-300 z-10"></span>
            </h3>

            {products.map((product) => (
                <div key={product.id} className="flex items-center py-4 border-b last:border-b-0 hover:-translate-y-1 transition duration-300">
                    <div className="w-1/3 bg-gray-200 rounded overflow-hidden">
                        <Link to="">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </Link>
                    </div>

                    <div className="w-2/3 pl-4">
                        <Link to="" className="text-black no-underline">
                            <h4 className="text-lg font-semibold opacity-80">{product.name}</h4>
                        </Link>
                        <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
                        <div className="flex items-center mt-2">
                            <span className="text-green-600 font-bold text-lg">${product.price}</span>
                            <span className="text-gray-400 line-through ml-3">${product.oldPrice}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopProducts;
