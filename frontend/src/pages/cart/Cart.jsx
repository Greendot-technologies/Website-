// /* eslint-disable no-unused-vars */
// import React, { useContext, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import Rating from '@mui/material/Rating';
// import { Button } from '@mui/material';
// import QuantityBox from '../../components/quantityBox/QuantityBox';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import { MyContext } from '../../App';
// import axios from 'axios';

// import { useNavigate } from 'react-router-dom';

// // import { loadStripe } from '@stripe/stripe-js';

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([])
//     const context = useContext(MyContext);
//     // const history = useNavigate();

//     // useEffect(() => {
//     //     if (context.isLogin === "true") {
//     //         getCartData("http://localhost:5000/cartItems");
//     //     } else {
//     //         history('/');
//     //     }

//     //     window.scrollTo(0, 0);

//     // }, [])

//     // const getCartData = async (url) => {
//     //     try {
//     //         await axios.get(url).then((response) => {
//     //             setCartItems(response.data);
//     //         })

//     //     } catch (error) {
//     //         console.log(error.message);
//     //     }
//     // }


//     // const deleteItem = async (id) => {
//     //     const response = await axios.delete(`http://localhost:5000/cartItems/${id}`);
//     //     if (response !== null) {
//     //         getCartData("http://localhost:5000/cartItems");
//     //         context.removeItemsFromCart(id);
//     //     }
//     // }



//     // const emptyCart = () => {
//     //     let response = null;
//     //     cartItems.length !== 0 &&
//     //         cartItems.map((item) => {
//     //             response = axios.delete(`http://localhost:5000/cartItems/${parseInt(item.id)}`);
//     //         })
//     //     if (response !== null) {
//     //         getCartData("http://localhost:5000/cartItems");
//     //     }

//     //     context.emptyCart();
//     // }


//     // const updateCart = (items) => {
//     //     setCartItems(items)
//     // }


//     // const makePayment = async () => {
//     //     const stripe = await loadStripe('pk_test_51OSafaSEi0nlwkT6fE5zbDHnNLjJoQ6INy7jZmoAycZjR0uPPxQ7Fv7eCKLfBELmCJ3vJK1pVWmMLC9c8X7xJTYK00l4lDuWMG');

//     //     const body = {
//     //         products: cartItems
//     //     }

//     //     const headers = {
//     //         "Content-Type": "application/json"
//     //     }

//     //     const response = await fetch("http://localhost:7000/api/create-checkout-session", {
//     //         method: 'POST',
//     //         headers: headers,
//     //         body: JSON.stringify(body)
//     //     })

//     //     const session = await response.json();

//     //     const result = stripe.redirectToCheckout({
//     //         sessionId: session.id
//     //     })

//     //     if (result.error) {
//     //         console.log(result.error)
//     //     }
//     // }


//     return (
//         <>
//             {
//                 context.windowWidth > 992 && <div className="breadcrumbWrapper mb-4">
//                     <div className="container-fluid">
//                         <ul className="breadcrumb breadcrumb2 mb-0">
//                             <li>
//                                 <Link to={'/'}>Home</Link>
//                             </li>
//                             <li>
//                                 Shop
//                             </li>
//                             <li>
//                                 Cart
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//             }

//             <section className='cartSection mb-5'>
//                 <div className='container-fluid'>
//                     <div className='row'>
//                         <div className='col-md-8'>
//                             <div className='d-flex align-items-center w-100'>
//                                 <div className='left'>
//                                     <h1 className='hd mb-0'>Your Cart</h1>
//                                     <p>There are <span className='text-g'>3</span> products in your cart</p>
//                                 </div>

//                                 <span className='ml-auto clearCart d-flex align-items-center cursor '
//                                 ><DeleteOutlineOutlinedIcon /> Clear Cart</span>

//                             </div>



//                             <div className='cartWrapper mt-4'>
//                                 <div className='table-responsive'>
//                                     <table className='table'>
//                                         <thead>
//                                             <tr>
//                                                 <th>Product</th>
//                                                 <th>Unit Price</th>
//                                                 <th>Quantity</th>
//                                                 <th>Subtotal</th>
//                                                 <th>Remove</th>
//                                             </tr>
//                                         </thead>

//                                         <tbody>
//                                             {
//                                                 cartItems.length !== 0 &&
//                                                 cartItems.map((item, index) => {
//                                                     return (
//                                                         <tr key={item.id}>
//                                                             <td width={"50%"}>
//                                                                 <div className='d-flex align-items-center'>

//                                                                     <div className='img'>
//                                                                         <Link to={`/product/${item.id}`}>
//                                                                             <img src={item.catImg + '?im=Resize=(100,100)'} className='w-100' />
//                                                                         </Link>
//                                                                     </div>


//                                                                     <div className='info pl-4'>
//                                                                         <Link to={`/product/${item.id}`}><h4>{item.productName}</h4></Link>
//                                                                         <Rating name="half-rating-read"
//                                                                             value={parseFloat(item.rating)} precision={0.5} readOnly /> <span className='text-light'>({parseFloat(item.rating)})</span>
//                                                                     </div>

//                                                                 </div>
//                                                             </td>

//                                                             <td width="20%"><span>Rs:  {parseInt(item.price.split(",").join(""))}</span></td>

//                                                             <td>
//                                                                 <QuantityBox />
//                                                             </td>

//                                                             <td>
//                                                                 <span className='text-g'>Rs. {parseInt(item.price.split(",").join("")) * parseInt(item.quantity)}</span>
//                                                             </td>

//                                                             <td align='center'>
//                                                                 <span className='cursor'
//                                                                 ><DeleteOutlineOutlinedIcon /></span>
//                                                             </td>

//                                                         </tr>
//                                                     )
//                                                 })
//                                             }


//                                         </tbody>

//                                     </table>
//                                 </div>
//                             </div>

//                             <br />


//                             <div className='d-flex align-items-center'>
//                                 <Link to="/">
//                                     <Button className='btn-g'>
//                                         <KeyboardBackspaceIcon /> Continue Shopping</Button>

//                                 </Link>
//                                 {/* <Button className='btn-g ml-auto' onClick={updateCartData}>
//                     <RefreshIcon /> Update Cart</Button> */}


//                             </div>


//                         </div>

//                         <div className='col-md-4 cartRightBox'>
//                             <div className='card p-4 '>
//                                 <div className='d-flex align-items-center mb-4'>
//                                     <h5 className='mb-0 text-light'>Subtotal</h5>
//                                     <h3 className='ml-auto mb-0 font-weight-bold'><span className='text-g'>
//                                         {
//                                             cartItems.length !== 0 &&
//                                             cartItems.map(item => parseInt(item.price.split(",").join("")) * item.quantity).reduce((total, value) => total + value, 0)
//                                         }
//                                     </span></h3>
//                                 </div>

//                                 <div className='d-flex align-items-center mb-4'>
//                                     <h5 className='mb-0 text-light'>Shipping</h5>
//                                     <h3 className='ml-auto mb-0 font-weight-bold'><span >Free</span></h3>
//                                 </div>


//                                 <div className='d-flex align-items-center mb-4'>
//                                     <h5 className='mb-0 text-light'>Estimate for</h5>
//                                     <h3 className='ml-auto mb-0 font-weight-bold'>India</h3>
//                                 </div>


//                                 <div className='d-flex align-items-center mb-4'>
//                                     <h5 className='mb-0 text-light'>Total</h5>
//                                     <h3 className='ml-auto mb-0 font-weight-bold'><span className='text-g'>
//                                         {
//                                             cartItems.length !== 0 &&
//                                             cartItems.map(item => parseInt(item.price.split(",").join("")) * item.quantity).reduce((total, value) => total + value, 0)
//                                         }
//                                     </span></h3>
//                                 </div>


//                                 <br />

//                                 <Link to={'/checkout'}>
//                                     <Button className='btn-g btn-lg'
//                                         onClick={() => {
//                                             context.setCartTotalAmount(cartItems.length !== 0 &&
//                                                 cartItems.map(item => parseInt(item.price.split(",").join("")) * item.quantity).reduce((total, value) => total + value, 0))
//                                         }}
//                                     >Proceed To CheckOut</Button>
//                                 </Link>



//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>


//         </>
//     )
// }

// export default Cart;



// import React, { useContext, useState, useEffect } from 'react';
// import { Trash2, ArrowLeft, Star } from 'lucide-react';

// // Mock context - replace with your actual context
// const MyContext = React.createContext({
//   windowWidth: 1200,
//   isLogin: "true",
//   removeItemsFromCart: () => {},
//   emptyCart: () => {},
//   setCartTotalAmount: () => {}
// });

// // Mock QuantityBox component
// const QuantityBox = ({ quantity = 1, onUpdate }) => {
//   const [qty, setQty] = useState(quantity);
  
//   const handleDecrease = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//       onUpdate && onUpdate(qty - 1);
//     }
//   };
  
//   const handleIncrease = () => {
//     setQty(qty + 1);
//     onUpdate && onUpdate(qty + 1);
//   };
  
//   return (
//     <div className="flex items-center border border-gray-300 rounded-lg">
//       <button 
//         onClick={handleDecrease}
//         className="px-3 py-1 hover:bg-gray-100 transition-colors"
//         disabled={qty <= 1}
//       >
//         -
//       </button>
//       <span className="px-4 py-1 border-l border-r border-gray-300">{qty}</span>
//       <button 
//         onClick={handleIncrease}
//         className="px-3 py-1 hover:bg-gray-100 transition-colors"
//       >
//         +
//       </button>
//     </div>
//   );
// };

// // Star Rating component
// const StarRating = ({ rating = 0 }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center gap-1">
//       {[...Array(fullStars)].map((_, i) => (
//         <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//       ))}
//       {hasHalfStar && (
//         <div className="relative">
//           <Star className="w-4 h-4 text-gray-300" />
//           <div className="absolute inset-0 overflow-hidden w-1/2">
//             <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//           </div>
//         </div>
//       )}
//       {[...Array(emptyStars)].map((_, i) => (
//         <Star key={i} className="w-4 h-4 text-gray-300" />
//       ))}
//       <span className="text-sm text-gray-500 ml-1">({rating})</span>
//     </div>
//   );
// };

// const Cart = () => {
//   // Mock cart items - replace with your actual data
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       productName: "Premium Wireless Headphones",
//       price: "2,499",
//       quantity: 2,
//       rating: 4.5,
//       catImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
//     },
//     {
//       id: 2,
//       productName: "Smart Fitness Watch",
//       price: "15,999",
//       quantity: 1,
//       rating: 4.8,
//       catImg: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"
//     },
//     {
//       id: 3,
//       productName: "Bluetooth Speaker",
//       price: "3,299",
//       quantity: 1,
//       rating: 4.2,
//       catImg: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop"
//     }
//   ]);

//   const context = useContext(MyContext);
//   const navigate = () => {}; // Mock navigate function

//   const deleteItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const updateQuantity = (id, newQuantity) => {
//     setCartItems(cartItems.map(item => 
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       const price = parseInt(item.price.split(",").join(""));
//       return total + (price * item.quantity);
//     }, 0);
//   };

//   const formatPrice = (price) => {
//     return parseInt(price.split(",").join(""));
//   };

//   return (
//     <>
//       {/* Breadcrumb */}
//       {context.windowWidth > 992 && (
//         <div className="bg-gray-50 py-4 mb-6">
//           <div className="container mx-auto px-4">
//             <nav className="flex space-x-2 text-sm">
//               <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
//               <span className="text-gray-500">/</span>
//               <span className="text-gray-500">Shop</span>
//               <span className="text-gray-500">/</span>
//               <span className="text-gray-900 font-medium">Cart</span>
//             </nav>
//           </div>
//         </div>
//       )}

//       {/* Cart Section */}
//       <section className="py-8 mb-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Cart Items */}
//             <div className="lg:col-span-2">
//               {/* Header */}
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
//                   <p className="text-gray-600">
//                     There are <span className="text-green-600 font-semibold">{cartItems.length}</span> products in your cart
//                   </p>
//                 </div>
//                 <button 
//                   onClick={clearCart}
//                   className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold text-lg cursor-pointer transition-colors"
//                 >
//                   <Trash2 className="w-6 h-6" />
//                   Clear Cart
//                 </button>
//               </div>

//               {/* Cart Table */}
//               <div className="bg-white rounded-lg overflow-hidden shadow-sm">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="text-left py-4 px-6 font-semibold text-gray-700">Product</th>
//                         <th className="text-left py-4 px-6 font-semibold text-gray-700">Unit Price</th>
//                         <th className="text-left py-4 px-6 font-semibold text-gray-700">Quantity</th>
//                         <th className="text-left py-4 px-6 font-semibold text-gray-700">Subtotal</th>
//                         <th className="text-center py-4 px-6 font-semibold text-gray-700">Remove</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cartItems.length > 0 ? cartItems.map((item) => (
//                         <tr key={item.id} className="border-t border-gray-200">
//                           <td className="py-6 px-6">
//                             <div className="flex items-center">
//                               <div className="w-24 h-24 flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden">
//                                 <a href={`/product/${item.id}`}>
//                                   <img 
//                                     src={item.catImg} 
//                                     alt={item.productName}
//                                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
//                                   />
//                                 </a>
//                               </div>
//                               <div className="ml-4 flex-1">
//                                 <a 
//                                   href={`/product/${item.id}`}
//                                   className="text-gray-800 hover:text-blue-600 transition-colors"
//                                 >
//                                   <h4 className="font-medium text-lg mb-2">{item.productName}</h4>
//                                 </a>
//                                 <StarRating rating={item.rating} />
//                               </div>
//                             </div>
//                           </td>
//                           <td className="py-6 px-6">
//                             <span className="font-semibold text-lg">Rs. {formatPrice(item.price)}</span>
//                           </td>
//                           <td className="py-6 px-6">
//                             <QuantityBox 
//                               quantity={item.quantity}
//                               onUpdate={(newQty) => updateQuantity(item.id, newQty)}
//                             />
//                           </td>
//                           <td className="py-6 px-6">
//                             <span className="text-green-600 font-bold text-lg">
//                               Rs. {formatPrice(item.price) * item.quantity}
//                             </span>
//                           </td>
//                           <td className="py-6 px-6 text-center">
//                             <button 
//                               onClick={() => deleteItem(item.id)}
//                               className="text-red-600 hover:text-red-800 cursor-pointer transition-colors"
//                             >
//                               <Trash2 className="w-5 h-5" />
//                             </button>
//                           </td>
//                         </tr>
//                       )) : (
//                         <tr>
//                           <td colSpan="5" className="py-12 text-center text-gray-500">
//                             Your cart is empty
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Continue Shopping Button */}
//               <div className="mt-8">
//                 <a href="/">
//                   <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
//                     <ArrowLeft className="w-5 h-5" />
//                     Continue Shopping
//                   </button>
//                 </a>
//               </div>
//             </div>

//             {/* Cart Summary */}
//             <div className="lg:pl-12">
//               <div className="bg-white p-6 rounded-lg shadow-sm sticky top-36">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <h5 className="text-gray-600 font-medium">Subtotal</h5>
//                     <h3 className="text-xl font-bold">
//                       <span className="text-green-600">Rs. {calculateTotal()}</span>
//                     </h3>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <h5 className="text-gray-600 font-medium">Shipping</h5>
//                     <h3 className="text-xl font-bold">Free</h3>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <h5 className="text-gray-600 font-medium">Estimate for</h5>
//                     <h3 className="text-xl font-bold">India</h3>
//                   </div>

//                   <hr className="my-4" />

//                   <div className="flex items-center justify-between">
//                     <h5 className="text-gray-600 font-medium">Total</h5>
//                     <h3 className="text-2xl font-bold">
//                       <span className="text-green-600">Rs. {calculateTotal()}</span>
//                     </h3>
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <a href="/checkout">
//                     <button 
//                       className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors"
//                       onClick={() => {
//                         // context.setCartTotalAmount(calculateTotal());
//                       }}
//                     >
//                       Proceed To CheckOut
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cart;




// import React, { useContext, useState } from 'react';
// import { Trash2, ArrowLeft, Star } from 'lucide-react';

// // Mock context - replace with your actual context
// const MyContext = React.createContext({
//   windowWidth: 1200,
//   isLogin: "true",
//   removeItemsFromCart: () => {},
//   emptyCart: () => {},
//   setCartTotalAmount: () => {}
// });

// // Mock QuantityBox component
// const QuantityBox = ({ quantity = 1, onUpdate }) => {
//   const [qty, setQty] = useState(quantity);

//   const handleDecrease = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//       onUpdate && onUpdate(qty - 1);
//     }
//   };

//   const handleIncrease = () => {
//     setQty(qty + 1);
//     onUpdate && onUpdate(qty + 1);
//   };

//   return (
//     <div className="flex items-center border border-gray-300 rounded-lg">
//       <button 
//         onClick={handleDecrease}
//         className="px-3 py-1 hover:bg-gray-100"
//         disabled={qty <= 1}
//       >
//         -
//       </button>
//       <span className="px-4 py-1 border-l border-r border-gray-300">{qty}</span>
//       <button 
//         onClick={handleIncrease}
//         className="px-3 py-1 hover:bg-gray-100"
//       >
//         +
//       </button>
//     </div>
//   );
// };

// // Star rating
// const StarRating = ({ rating = 0 }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center gap-1">
//       {[...Array(fullStars)].map((_, i) => (
//         <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//       ))}
//       {hasHalfStar && (
//         <div className="relative">
//           <Star className="w-4 h-4 text-gray-300" />
//           <div className="absolute inset-0 overflow-hidden w-1/2">
//             <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//           </div>
//         </div>
//       )}
//       {[...Array(emptyStars)].map((_, i) => (
//         <Star key={i} className="w-4 h-4 text-gray-300" />
//       ))}
//       <span className="text-sm text-gray-500 ml-1">({rating})</span>
//     </div>
//   );
// };

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       productName: "Premium Wireless Headphones",
//       price: "2,499",
//       quantity: 2,
//       rating: 4.5,
//       catImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
//     },
//     {
//       id: 2,
//       productName: "Smart Fitness Watch",
//       price: "15,999",
//       quantity: 1,
//       rating: 4.8,
//       catImg: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"
//     }
//   ]);

//   const context = useContext(MyContext);

//   const deleteItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const updateQuantity = (id, newQuantity) => {
//     setCartItems(cartItems.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       const price = parseInt(item.price.replace(/,/g, ''));
//       return total + price * item.quantity;
//     }, 0);
//   };

//   return (
//     <>
//       {/* Breadcrumb */}
//       {context.windowWidth > 992 && (
//         <div className="bg-gray-50 py-4 mb-6">
//           <div className="container mx-auto px-4">
//             <nav className="flex space-x-2 text-sm">
//               <a href="/" className="text-blue-600 hover:underline">Home</a>
//               <span className="text-gray-500">/</span>
//               <span className="text-gray-500">Cart</span>
//             </nav>
//           </div>
//         </div>
//       )}


//  <section className="py-10">
//   <div className="container mx-auto px-4">
//     <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
      
//       {/* Left: Cart Items */}
//       <div className="w-full lg:w-[65%] min-h-[600px] bg-white shadow-lg rounded-2xl p-6">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-3xl font-bold mb-1">Shopping Cart</h2>
//             <p className="text-gray-600">
//               You have <span className="font-semibold text-green-600">{cartItems.length}</span> item(s)
//             </p>
//           </div>
//           <button 
//             onClick={clearCart}
//             className="flex items-center gap-2 text-red-600 hover:text-red-800"
//           >
//             <Trash2 className="w-5 h-5" />
//             Clear Cart
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[700px]">
//             <thead className="bg-gray-100 text-left text-gray-700">
//               <tr>
//                 <th className="py-4 px-6">Product</th>
//                 <th className="py-4 px-6">Unit Price</th>
//                 <th className="py-4 px-6">Qty</th>
//                 <th className="py-4 px-6">Subtotal</th>
//                 <th className="py-4 px-6 text-center">Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr key={item.id} className="border-t border-gray-200">
//                   <td className="py-5 px-6">
//                     <div className="flex items-center gap-4">
//                       <img src={item.catImg} alt={item.productName} className="w-20 h-20 object-cover rounded-lg border" />
//                       <div>
//                         <h4 className="font-medium text-gray-800">{item.productName}</h4>
//                         <StarRating rating={item.rating} />
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-5 px-6 text-lg font-semibold">Rs. {item.price}</td>
//                   <td className="py-5 px-6">
//                     <QuantityBox
//                       quantity={item.quantity}
//                       onUpdate={(qty) => updateQuantity(item.id, qty)}
//                     />
//                   </td>
//                   <td className="py-5 px-6 text-green-600 font-bold text-lg">
//                     Rs. {parseInt(item.price.replace(/,/g, '')) * item.quantity}
//                   </td>
//                   <td className="py-5 px-6 text-center">
//                     <button onClick={() => deleteItem(item.id)} className="text-red-600 hover:text-red-800">
//                       <Trash2 className="w-5 h-5" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="mt-8">
//           <a href="/" className="inline-flex items-center text-green-600 hover:underline">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Continue Shopping
//           </a>
//         </div>
//       </div>

//       {/* Right: Summary Box */}
//       <div className="w-full lg:w-[35%] min-h-[600px]">
//         <div className="sticky top-32 bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col justify-between">
//           <div>
//             <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
//             <div className="space-y-4 text-lg">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span className="font-semibold">Rs. {calculateTotal()}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span className="font-semibold text-green-600">Free</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Estimate For</span>
//                 <span className="font-semibold">India</span>
//               </div>
//               <hr />
//               <div className="flex justify-between text-xl font-bold">
//                 <span>Total</span>
//                 <span className="text-green-600">Rs. {calculateTotal()}</span>
//               </div>
//             </div>
//           </div>
//           <a href="/checkout" className="block mt-6">
//             <button
//               className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl text-lg font-semibold transition-colors"
//             >
//               Proceed To Checkout
//             </button>
//           </a>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>

//     </>
//   );
// };

// export default Cart;


import React, { useEffect, useState, useContext } from 'react';
import { Trash2, ArrowLeft, Star } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Replace with actual context if needed
const MyContext = React.createContext({
  windowWidth: 1200,
  isLogin: true,
});

const QuantityBox = ({ quantity = 1, onUpdate }) => {
  const [qty, setQty] = useState(quantity);

  const handleDecrease = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      onUpdate && onUpdate(newQty);
    }
  };

  const handleIncrease = () => {
    const newQty = qty + 1;
    setQty(newQty);
    onUpdate && onUpdate(newQty);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button onClick={handleDecrease} className="px-3 py-1 hover:bg-gray-100" disabled={qty <= 1}>-</button>
      <span className="px-4 py-1 border-l border-r border-gray-300">{qty}</span>
      <button onClick={handleIncrease} className="px-3 py-1 hover:bg-gray-100">+</button>
    </div>
  );
};

const StarRating = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gray-300" />
      ))}
      <span className="text-sm text-gray-500 ml-1">({rating})</span>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const context = useContext(MyContext);
  const userId = 1; // Replace with actual user ID or context-based user ID
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
        setCartItems(res.data);
      } catch (err) {
        console.error("Failed to fetch cart items", err);
      }
    };
    fetchCartItems();
  }, [userId]);

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`);
      setCartItems(cartItems.filter(item => item.id !== id));
    } catch (err) {
      console.error("Failed to remove item", err);
    }
  };

  const clearCart = async () => {
    for (let item of cartItems) {
      await deleteItem(item.id);
    }
  };

  const updateQuantity = async (id, newQuantity) => {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;
    try {
      await axios.post('http://localhost:5000/api/cart/add', {
        user_id: item.user_id,
        product_id: item.product_id,
        quantity: newQuantity - item.quantity
      });
      setCartItems(cartItems.map(i => i.id === id ? { ...i, quantity: newQuantity } : i));
    } catch (err) {
      console.error("Failed to update quantity", err);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  };

  return (
    <>
      {context.windowWidth > 992 && (
        <div className="bg-gray-50 py-4 mb-6">
          <div className="container mx-auto px-4">
            <nav className="flex space-x-2 text-sm">
              <a href="/" className="text-blue-600 hover:underline">Home</a>
              <span className="text-gray-500">/</span>
              <span className="text-gray-500">Cart</span>
            </nav>
          </div>
        </div>
      )}

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
            <div className="w-full lg:w-[65%] min-h-[600px] bg-white shadow-lg rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-1">Shopping Cart</h2>
                  <p className="text-gray-600">
                    You have <span className="font-semibold text-green-600">{cartItems.length}</span> item(s)
                  </p>
                </div>
                <button onClick={clearCart} className="flex items-center gap-2 text-red-600 hover:text-red-800">
                  <Trash2 className="w-5 h-5" />
                  Clear Cart
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="bg-gray-100 text-left text-gray-700">
                    <tr>
                      <th className="py-4 px-6">Product</th>
                      <th className="py-4 px-6">Unit Price</th>
                      <th className="py-4 px-6">Qty</th>
                      <th className="py-4 px-6">Subtotal</th>
                      <th className="py-4 px-6 text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-t border-gray-200">
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-4">
                            <img src={item.image_url} alt={item.name} className="w-20 h-20 object-cover rounded-lg border" />
                            <div>
                              <h4 className="font-medium text-gray-800">{item.name}</h4>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-lg font-semibold">Rs. {item.price}</td>
                        <td className="py-5 px-6">
                          <QuantityBox
                            quantity={item.quantity}
                            onUpdate={(qty) => updateQuantity(item.id, qty)}
                          />
                        </td>
                        <td className="py-5 px-6 text-green-600 font-bold text-lg">
                          Rs. {parseFloat(item.price) * item.quantity}
                        </td>
                        <td className="py-5 px-6 text-center">
                          <button onClick={() => deleteItem(item.id)} className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <a href="/" className="inline-flex items-center text-green-600 hover:underline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </a>
              </div>
            </div>

            <div className="w-full lg:w-[35%] min-h-[600px]">
              <div className="sticky top-32 bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
                  <div className="space-y-4 text-lg">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold">Rs. {calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimate For</span>
                      <span className="font-semibold">India</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-green-600">Rs. {calculateTotal()}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/CheckoutPage')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl text-lg font-semibold mt-6"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
