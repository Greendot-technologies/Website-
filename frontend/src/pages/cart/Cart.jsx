// import React, { useEffect, useState, useContext } from 'react';
// import { Trash2, ArrowLeft, Star } from 'lucide-react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// // Replace with actual context if needed
// const MyContext = React.createContext({
//   windowWidth: 1200,
//   isLogin: true,
// });

// const QuantityBox = ({ quantity = 1, onUpdate }) => {
//   const [qty, setQty] = useState(quantity);

//   const handleDecrease = () => {
//     if (qty > 1) {
//       const newQty = qty - 1;
//       setQty(newQty);
//       onUpdate && onUpdate(newQty);
//     }
//   };

//   const handleIncrease = () => {
//     const newQty = qty + 1;
//     setQty(newQty);
//     onUpdate && onUpdate(newQty);
//   };

//   return (
//     <div className="flex items-center border border-gray-300 rounded-lg">
//       <button onClick={handleDecrease} className="px-3 py-1 hover:bg-gray-100" disabled={qty <= 1}>-</button>
//       <span className="px-4 py-1 border-l border-r border-gray-300">{qty}</span>
//       <button onClick={handleIncrease} className="px-3 py-1 hover:bg-gray-100">+</button>
//     </div>
//   );
// };

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
//   const [cartItems, setCartItems] = useState([]);
//   const context = useContext(MyContext);
//   const userId = 1; // Replace with actual user ID or context-based user ID
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
//         setCartItems(res.data);
//       } catch (err) {
//         console.error("Failed to fetch cart items", err);
//       }
//     };
//     fetchCartItems();
//   }, [userId]);

//   const deleteItem = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/cart/${id}`);
//       setCartItems(cartItems.filter(item => item.id !== id));
//     } catch (err) {
//       console.error("Failed to remove item", err);
//     }
//   };

//   const clearCart = async () => {
//     for (let item of cartItems) {
//       await deleteItem(item.id);
//     }
//   };

//   const updateQuantity = async (id, newQuantity) => {
//     const item = cartItems.find(i => i.id === id);
//     if (!item) return;
//     try {
//       await axios.post('http://localhost:5000/api/cart/add', {
//         user_id: item.user_id,
//         product_id: item.product_id,
//         quantity: newQuantity - item.quantity
//       });
//       setCartItems(cartItems.map(i => i.id === id ? { ...i, quantity: newQuantity } : i));
//     } catch (err) {
//       console.error("Failed to update quantity", err);
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
//   };

//   return (
//     <>
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

//       <section className="py-10">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
//             <div className="w-full lg:w-[65%] min-h-[600px] bg-white shadow-lg rounded-2xl p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <h2 className="text-3xl font-bold mb-1">Shopping Cart</h2>
//                   <p className="text-gray-600">
//                     You have <span className="font-semibold text-green-600">{cartItems.length}</span> item(s)
//                   </p>
//                 </div>
//                 <button onClick={clearCart} className="flex items-center gap-2 text-red-600 hover:text-red-800">
//                   <Trash2 className="w-5 h-5" />
//                   Clear Cart
//                 </button>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-[700px]">
//                   <thead className="bg-gray-100 text-left text-gray-700">
//                     <tr>
//                       <th className="py-4 px-6">Product</th>
//                       <th className="py-4 px-6">Unit Price</th>
//                       <th className="py-4 px-6">Qty</th>
//                       <th className="py-4 px-6">Subtotal</th>
//                       <th className="py-4 px-6 text-center">Remove</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartItems.map((item) => (
//                       <tr key={item.id} className="border-t border-gray-200">
//                         <td className="py-5 px-6">
//                           <div className="flex items-center gap-4">
//                             <img src={item.image_url} alt={item.name} className="w-20 h-20 object-cover rounded-lg border" />
//                             <div>
//                               <h4 className="font-medium text-gray-800">{item.name}</h4>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="py-5 px-6 text-lg font-semibold">Rs. {item.price}</td>
//                         <td className="py-5 px-6">
//                           <QuantityBox
//                             quantity={item.quantity}
//                             onUpdate={(qty) => updateQuantity(item.id, qty)}
//                           />
//                         </td>
//                         <td className="py-5 px-6 text-green-600 font-bold text-lg">
//                           Rs. {parseFloat(item.price) * item.quantity}
//                         </td>
//                         <td className="py-5 px-6 text-center">
//                           <button onClick={() => deleteItem(item.id)} className="text-red-600 hover:text-red-800">
//                             <Trash2 className="w-5 h-5" />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="mt-8">
//                 <a href="/" className="inline-flex items-center text-green-600 hover:underline">
//                   <ArrowLeft className="w-4 h-4 mr-2" />
//                   Continue Shopping
//                 </a>
//               </div>
//             </div>

//             <div className="w-full lg:w-[35%] min-h-[600px]">
//               <div className="sticky top-32 bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
//                   <div className="space-y-4 text-lg">
//                     <div className="flex justify-between">
//                       <span>Subtotal</span>
//                       <span className="font-semibold">Rs. {calculateTotal()}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Shipping</span>
//                       <span className="font-semibold text-green-600">Free</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Estimate For</span>
//                       <span className="font-semibold">India</span>
//                     </div>
//                     <hr />
//                     <div className="flex justify-between text-xl font-bold">
//                       <span>Total</span>
//                       <span className="text-green-600">Rs. {calculateTotal()}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => navigate('/CheckoutPage')}
//                   className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl text-lg font-semibold mt-6"
//                 >
//                   Proceed To Checkout
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
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
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name} (x{item.quantity})</span>
                        <span className="font-semibold">Rs. {parseFloat(item.price) * item.quantity}</span>
                      </div>
                    ))}
                    <hr />
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