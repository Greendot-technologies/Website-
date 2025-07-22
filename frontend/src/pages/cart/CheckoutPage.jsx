// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     const storedProduct = localStorage.getItem('checkout_product');
//     if (!storedProduct) return navigate('/');
//     const parsedProduct = JSON.parse(storedProduct);
//     setProduct(parsedProduct);
//     setQuantity(parsedProduct.quantity || 1);
//   }, [navigate]);

//   const handlePlaceOrder = () => {
//     alert('Order placed successfully!');
//     localStorage.removeItem('checkout_product');
//     navigate('/');
//   };

//   if (!product) return null;

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-10 border rounded-lg shadow-lg bg-white">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Summary */}
//         <div className="space-y-4">
//           <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
//           <h2 className="text-xl font-semibold">{product.title}</h2>
//           <p className="text-gray-700">{product.description}</p>
//           <p className="text-lg font-medium">Price: ₹{product.price}</p>
//           <p className="text-lg font-medium">Quantity: {quantity}</p>
//           <p className="text-xl font-bold">Total: ₹{product.price * quantity}</p>
//         </div>

//         {/* User Details */}
//         <div className="space-y-4">
//           <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>
//           <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
//           <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
//           <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded" />
//           <textarea placeholder="Delivery Address" className="w-full p-3 border rounded h-32"></textarea>

//           <button
//             className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
//             onClick={handlePlaceOrder}
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


// import React, { useEffect, useState } from 'react';
// import { ChevronRight, MapPin, CreditCard, Truck, Shield, Plus, Edit2, Check, X } from 'lucide-react';

// const CheckoutPage = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
  
//   // Form states
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       phone: "9876543210",
//       address: "123 Main Street, Sector 15",
//       city: "Mumbai",
//       state: "Maharashtra",
//       pincode: "400001",
//       type: "Home",
//       isDefault: true
//     }
//   ]);
  
//   const [selectedAddress, setSelectedAddress] = useState(1);
//   const [showAddressForm, setShowAddressForm] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [orderSummary, setOrderSummary] = useState({});
  
//   const [newAddress, setNewAddress] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//     type: 'Home'
//   });

//   useEffect(() => {
//     // Mock product data since localStorage isn't available
//     const mockProduct = {
//       id: 1,
//       title: "Samsung Galaxy S24 Ultra",
//       description: "Latest flagship smartphone with S Pen and 200MP camera",
//       price: 124999,
//       originalPrice: 149999,
//       image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop",
//       rating: 4.5,
//       reviews: 1234,
//       seller: "Samsung Official Store",
//       quantity: 1
//     };
//     setProduct(mockProduct);
//     setQuantity(mockProduct.quantity || 1);
    
//     // Calculate order summary
//     const subtotal = mockProduct.price * quantity;
//     const discount = (mockProduct.originalPrice - mockProduct.price) * quantity;
//     const deliveryFee = subtotal > 500 ? 0 : 40;
//     const total = subtotal + deliveryFee;
    
//     setOrderSummary({
//       subtotal,
//       discount,
//       deliveryFee,
//       total
//     });
//   }, [quantity]);

//   const steps = [
//     { id: 1, title: "LOGIN", desc: "Sign in to your account" },
//     { id: 2, title: "DELIVERY ADDRESS", desc: "Select delivery address" },
//     { id: 3, title: "ORDER SUMMARY", desc: "Review your order" },
//     { id: 4, title: "PAYMENT", desc: "Choose payment method" }
//   ];

//   const handleAddAddress = () => {
//     if (!newAddress.name || !newAddress.phone || !newAddress.address || !newAddress.city || !newAddress.state || !newAddress.pincode) {
//       alert('Please fill all required fields');
//       return;
//     }
//     const newId = addresses.length + 1;
//     setAddresses([...addresses, { ...newAddress, id: newId, isDefault: false }]);
//     setNewAddress({ name: '', phone: '', address: '', city: '', state: '', pincode: '', type: 'Home' });
//     setShowAddressForm(false);
//     setSelectedAddress(newId);
//   };

//   const handlePlaceOrder = () => {
//     if (!paymentMethod) {
//       alert('Please select a payment method');
//       return;
//     }
//     alert('Order placed successfully! 🎉');
//     // In real app: localStorage.removeItem('checkout_product');
//     // navigate('/');
//   };

//   const renderStepIndicator = () => (
//     <div className="bg-white shadow-sm border-b sticky top-0 z-10">
//       <div className="max-w-6xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {steps.map((step, index) => (
//             <div key={step.id} className="flex items-center">
//               <div className="flex flex-col items-center">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
//                   currentStep >= step.id 
//                     ? 'bg-blue-600 text-white' 
//                     : currentStep === step.id 
//                     ? 'bg-blue-100 text-blue-600 border-2 border-blue-600'
//                     : 'bg-gray-200 text-gray-500'
//                 }`}>
//                   {currentStep > step.id ? <Check size={16} /> : step.id}
//                 </div>
//                 <div className="text-center mt-2">
//                   <div className={`text-xs font-semibold ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'}`}>
//                     {step.title}
//                   </div>
//                   <div className="text-xs text-gray-500 hidden sm:block">{step.desc}</div>
//                 </div>
//               </div>
//               {index < steps.length - 1 && (
//                 <div className={`w-16 h-0.5 mx-4 ${currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'}`} />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderLoginStep = () => (
//     <div className="bg-white rounded-lg p-6 shadow-sm">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold">Login or Signup</h2>
//         <div className="text-green-600 flex items-center">
//           <Check size={16} className="mr-1" />
//           <span className="text-sm">john.doe@email.com</span>
//         </div>
//       </div>
//       <p className="text-gray-600 text-sm mb-4">You are logged in successfully</p>
//       <button 
//         onClick={() => setCurrentStep(2)}
//         className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600"
//       >
//         CONTINUE CHECKOUT
//       </button>
//     </div>
//   );

//   const renderAddressStep = () => (
//     <div className="bg-white rounded-lg shadow-sm">
//       <div className="p-6 border-b">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold flex items-center">
//             <MapPin className="mr-2 text-blue-600" size={20} />
//             Delivery Address
//           </h2>
//           <button 
//             onClick={() => setShowAddressForm(true)}
//             className="text-blue-600 text-sm flex items-center hover:underline"
//           >
//             <Plus size={16} className="mr-1" />
//             ADD NEW ADDRESS
//           </button>
//         </div>
//       </div>
      
//       <div className="p-6">
//         {addresses.map((addr) => (
//           <div key={addr.id} className={`border rounded-lg p-4 mb-4 cursor-pointer transition ${
//             selectedAddress === addr.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
//           }`} onClick={() => setSelectedAddress(addr.id)}>
//             <div className="flex items-start justify-between">
//               <div className="flex-1">
//                 <div className="flex items-center mb-2">
//                   <input 
//                     type="radio" 
//                     checked={selectedAddress === addr.id}
//                     onChange={() => setSelectedAddress(addr.id)}
//                     className="mr-3"
//                   />
//                   <span className="font-semibold">{addr.name}</span>
//                   <span className="ml-2 px-2 py-1 bg-gray-100 text-xs rounded">{addr.type}</span>
//                   {addr.isDefault && <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded">DEFAULT</span>}
//                 </div>
//                 <p className="text-gray-700 ml-6">{addr.address}</p>
//                 <p className="text-gray-700 ml-6">{addr.city}, {addr.state} - {addr.pincode}</p>
//                 <p className="text-gray-700 ml-6">Mobile: {addr.phone}</p>
//               </div>
//               <button className="text-blue-600 p-2">
//                 <Edit2 size={16} />
//               </button>
//             </div>
//           </div>
//         ))}
        
//         {showAddressForm && (
//           <div className="border-t pt-6 mt-6">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-semibold">Add New Address</h3>
//               <button onClick={() => setShowAddressForm(false)}>
//                 <X size={20} />
//               </button>
//             </div>
//             <form onSubmit={handleAddAddress} className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={newAddress.name}
//                 onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
//                 className="p-3 border rounded-lg"
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={newAddress.phone}
//                 onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
//                 className="p-3 border rounded-lg"
//                 required
//               />
//               <textarea
//                 placeholder="Address"
//                 value={newAddress.address}
//                 onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
//                 className="col-span-2 p-3 border rounded-lg h-24"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="City"
//                 value={newAddress.city}
//                 onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
//                 className="p-3 border rounded-lg"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="State"
//                 value={newAddress.state}
//                 onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
//                 className="p-3 border rounded-lg"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Pincode"
//                 value={newAddress.pincode}
//                 onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
//                 className="p-3 border rounded-lg"
//                 required
//               />
//               <select
//                 value={newAddress.type}
//                 onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
//                 className="p-3 border rounded-lg"
//               >
//                 <option value="Home">Home</option>
//                 <option value="Work">Work</option>
//                 <option value="Other">Other</option>
//               </select>
//               <div className="col-span-2 flex gap-3">
//                 <button onClick={handleAddAddress} className="bg-orange-500 text-white px-6 py-2 rounded">
//                   SAVE ADDRESS
//                 </button>
//                 <button onClick={() => setShowAddressForm(false)} className="border border-gray-300 px-6 py-2 rounded">
//                   CANCEL
//                 </button>
//               </div>
//            </form>
//           </div>
//         )}
        
//         <div className="flex justify-between items-center mt-6 pt-4 border-t">
//           <button 
//             onClick={() => setCurrentStep(1)}
//             className="text-blue-600 flex items-center"
//           >
//             ← Back
//           </button>
//           <button 
//             onClick={() => setCurrentStep(3)}
//             className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600"
//             disabled={!selectedAddress}
//           >
//             DELIVER HERE
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderOrderSummaryStep = () => (
//     <div className="bg-white rounded-lg shadow-sm">
//       <div className="p-6 border-b">
//         <h2 className="text-lg font-semibold flex items-center">
//           <Truck className="mr-2 text-blue-600" size={20} />
//           Order Summary
//         </h2>
//       </div>
      
//       <div className="p-6">
//         <div className="flex gap-6 mb-6">
//           <img src={product?.image} alt={product?.title} className="w-24 h-24 object-cover rounded-lg" />
//           <div className="flex-1">
//             <h3 className="font-semibold mb-2">{product?.title}</h3>
//             <p className="text-gray-600 text-sm mb-2">{product?.description}</p>
//             <div className="flex items-center gap-4 text-sm">
//               <span>Seller: {product?.seller}</span>
//               <div className="flex items-center">
//                 <span className="bg-green-600 text-white px-2 py-1 rounded text-xs mr-2">
//                   {product?.rating} ★
//                 </span>
//                 <span className="text-gray-500">({product?.reviews} reviews)</span>
//               </div>
//             </div>
//           </div>
//           <div className="text-right">
//             <div className="flex items-center gap-2 mb-2">
//               <span className="text-gray-400 line-through">₹{product?.originalPrice?.toLocaleString()}</span>
//               <span className="font-semibold text-lg">₹{product?.price?.toLocaleString()}</span>
//             </div>
//             <p className="text-green-600 text-sm">You saved ₹{(product?.originalPrice - product?.price)?.toLocaleString()}</p>
//           </div>
//         </div>
        
//         <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
//           <div className="flex items-center text-green-800">
//             <Shield size={20} className="mr-2" />
//             <span className="font-semibold">Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
//           </div>
//         </div>
        
//         <div className="flex justify-between items-center pt-4 border-t">
//           <button 
//             onClick={() => setCurrentStep(2)}
//             className="text-blue-600 flex items-center"
//           >
//             ← Back
//           </button>
//           <button 
//             onClick={() => setCurrentStep(4)}
//             className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600"
//           >
//             CONTINUE
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderPaymentStep = () => (
//     <div className="bg-white rounded-lg shadow-sm">
//       <div className="p-6 border-b">
//         <h2 className="text-lg font-semibold flex items-center">
//           <CreditCard className="mr-2 text-blue-600" size={20} />
//           Payment Options
//         </h2>
//       </div>
      
//       <div className="p-6">
//         <div className="space-y-4 mb-6">
//           {[
//             { id: 'upi', name: 'UPI', desc: 'Pay using any UPI app', popular: true },
//             { id: 'card', name: 'Credit/Debit Card', desc: 'Visa, Mastercard, RuPay' },
//             { id: 'netbanking', name: 'Net Banking', desc: 'All major banks supported' },
//             { id: 'wallet', name: 'Wallets', desc: 'Paytm, PhonePe, Amazon Pay' },
//             { id: 'emi', name: 'EMI', desc: 'Easy monthly installments' },
//             { id: 'cod', name: 'Cash on Delivery', desc: 'Pay when you receive' }
//           ].map((method) => (
//             <div key={method.id} className={`border rounded-lg p-4 cursor-pointer transition ${
//               paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
//             }`} onClick={() => setPaymentMethod(method.id)}>
//               <div className="flex items-center">
//                 <input 
//                   type="radio" 
//                   checked={paymentMethod === method.id}
//                   onChange={() => setPaymentMethod(method.id)}
//                   className="mr-3"
//                 />
//                 <div className="flex-1">
//                   <div className="flex items-center">
//                     <span className="font-semibold">{method.name}</span>
//                     {method.popular && <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded">POPULAR</span>}
//                   </div>
//                   <p className="text-gray-600 text-sm">{method.desc}</p>
//                 </div>
//                 <ChevronRight className="text-gray-400" size={16} />
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="flex justify-between items-center pt-4 border-t">
//           <button 
//             onClick={() => setCurrentStep(3)}
//             className="text-blue-600 flex items-center"
//           >
//             ← Back
//           </button>
//           <button 
//             onClick={handlePlaceOrder}
//             className="bg-orange-500 text-white px-8 py-3 rounded font-semibold hover:bg-orange-600 disabled:bg-gray-400"
//             disabled={!paymentMethod}
//           >
//             PLACE ORDER
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderOrderSummaryCard = () => (
//     <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-24">
//       <h3 className="font-semibold mb-4 text-gray-800">Price Details</h3>
//       <div className="space-y-3 text-sm">
//         <div className="flex justify-between">
//           <span>Price ({quantity} item)</span>
//           <span>₹{orderSummary.subtotal?.toLocaleString()}</span>
//         </div>
//         <div className="flex justify-between text-green-600">
//           <span>Discount</span>
//           <span>−₹{orderSummary.discount?.toLocaleString()}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Delivery Charges</span>
//           <span className={orderSummary.deliveryFee === 0 ? 'text-green-600' : ''}>
//             {orderSummary.deliveryFee === 0 ? 'FREE' : `₹${orderSummary.deliveryFee}`}
//           </span>
//         </div>
//         <hr />
//         <div className="flex justify-between font-semibold text-lg">
//           <span>Total Amount</span>
//           <span>₹{orderSummary.total?.toLocaleString()}</span>
//         </div>
//         {orderSummary.discount > 0 && (
//           <p className="text-green-600 text-sm">
//             You will save ₹{orderSummary.discount?.toLocaleString()} on this order
//           </p>
//         )}
//       </div>
//     </div>
//   );

//   if (!product) return <div className="flex justify-center items-center h-screen">Loading...</div>;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {renderStepIndicator()}
      
//       <div className="max-w-6xl mx-auto p-4">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//           <div className="lg:col-span-2 space-y-6">
//             {currentStep === 1 && renderLoginStep()}
//             {currentStep === 2 && renderAddressStep()}
//             {currentStep === 3 && renderOrderSummaryStep()}
//             {currentStep === 4 && renderPaymentStep()}
//           </div>
          
//           <div className="lg:col-span-1">
//             {renderOrderSummaryCard()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

// import React, { useEffect, useState } from 'react';
// import { ChevronRight, MapPin, CreditCard, Truck, Shield, Plus, Edit2, Check, X } from 'lucide-react';

// const CheckoutPage = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
  
//   // Form states
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       phone: "9876543210",
//       address: "123 Main Street, Sector 15",
//       city: "Mumbai",
//       state: "Maharashtra",
//       pincode: "400001",
//       type: "Home",
//       isDefault: true
//     }
//   ]);
  
//   const [selectedAddress, setSelectedAddress] = useState(1);
//   const [showAddressForm, setShowAddressForm] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [orderSummary, setOrderSummary] = useState({});
  
//   const [newAddress, setNewAddress] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//     type: 'Home'
//   });

//   useEffect(() => {
//     // Mock product data since localStorage isn't available
//     const mockProduct = {
//       id: 1,
//       title: "Samsung Galaxy S24 Ultra",
//       description: "Latest flagship smartphone with S Pen and 200MP camera",
//       price: 124999,
//       originalPrice: 149999,
//       image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop",
//       rating: 4.5,
//       reviews: 1234,
//       seller: "Samsung Official Store",
//       quantity: 1
//     };
//     setProduct(mockProduct);
//     setQuantity(mockProduct.quantity || 1);
    
//     // Calculate order summary
//     const subtotal = mockProduct.price * quantity;
//     const discount = (mockProduct.originalPrice - mockProduct.price) * quantity;
//     const deliveryFee = subtotal > 500 ? 0 : 40;
//     const total = subtotal + deliveryFee;
    
//     setOrderSummary({
//       subtotal,
//       discount,
//       deliveryFee,
//       total
//     });
//   }, [quantity]);

//   const steps = [
//     { id: 1, title: "LOGIN", desc: "Sign in to your account" },
//     { id: 2, title: "DELIVERY ADDRESS", desc: "Select delivery address" },
//     { id: 3, title: "ORDER SUMMARY", desc: "Review your order" },
//     { id: 4, title: "PAYMENT", desc: "Choose payment method" }
//   ];

//   const handleAddAddress = () => {
//     if (!newAddress.name || !newAddress.phone || !newAddress.address || !newAddress.city || !newAddress.state || !newAddress.pincode) {
//       alert('Please fill all required fields');
//       return;
//     }
//     const newId = addresses.length + 1;
//     setAddresses([...addresses, { ...newAddress, id: newId, isDefault: false }]);
//     setNewAddress({ name: '', phone: '', address: '', city: '', state: '', pincode: '', type: 'Home' });
//     setShowAddressForm(false);
//     setSelectedAddress(newId);
//   };

//   const handlePlaceOrder = () => {
//     if (!paymentMethod) {
//       alert('Please select a payment method');
//       return;
//     }
//     alert('Order placed successfully! 🎉');
//   };

//   const renderStepIndicator = () => (
//     <div className="bg-white shadow-lg border-b sticky top-0 z-10">
//       <div className="max-w-7xl mx-auto px-8 py-8">
//         <div className="flex items-center justify-between">
//           {steps.map((step, index) => (
//             <div key={step.id} className="flex items-center">
//               <div className="flex flex-col items-center">
//                 <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold ${
//                   currentStep >= step.id 
//                     ? 'bg-blue-600 text-white' 
//                     : currentStep === step.id 
//                     ? 'bg-blue-100 text-blue-600 border-3 border-blue-600'
//                     : 'bg-gray-200 text-gray-500'
//                 }`}>
//                   {currentStep > step.id ? <Check size={24} /> : step.id}
//                 </div>
//                 <div className="text-center mt-4">
//                   <div className={`text-sm font-bold ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'}`}>
//                     {step.title}
//                   </div>
//                   <div className="text-sm text-gray-500 hidden sm:block mt-1">{step.desc}</div>
//                 </div>
//               </div>
//               {index < steps.length - 1 && (
//                 <div className={`w-24 h-1 mx-8 ${currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'}`} />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderLoginStep = () => (
//     <div className="bg-white rounded-xl p-10 shadow-lg">
//       <div className="flex items-center justify-between mb-8">
//         <h2 className="text-2xl font-bold">Login or Signup</h2>
//         <div className="text-green-600 flex items-center">
//           <Check size={24} className="mr-2" />
//           <span className="text-lg">john.doe@email.com</span>
//         </div>
//       </div>
//       <p className="text-gray-600 text-lg mb-8">You are logged in successfully</p>
//       <button 
//         onClick={() => setCurrentStep(2)}
//         className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition duration-200"
//       >
//         CONTINUE CHECKOUT
//       </button>
//     </div>
//   );

//   const renderAddressStep = () => (
//     <div className="bg-white rounded-xl shadow-lg">
//       <div className="p-10 border-b">
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl font-bold flex items-center">
//             <MapPin className="mr-3 text-blue-600" size={28} />
//             Delivery Address
//           </h2>
//           <button 
//             onClick={() => setShowAddressForm(true)}
//             className="text-blue-600 text-lg flex items-center hover:underline font-semibold"
//           >
//             <Plus size={20} className="mr-2" />
//             ADD NEW ADDRESS
//           </button>
//         </div>
//       </div>
      
//       <div className="p-10">
//         {addresses.map((addr) => (
//           <div key={addr.id} className={`border-2 rounded-xl p-6 mb-6 cursor-pointer transition ${
//             selectedAddress === addr.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
//           }`} onClick={() => setSelectedAddress(addr.id)}>
//             <div className="flex items-start justify-between">
//               <div className="flex-1">
//                 <div className="flex items-center mb-4">
//                   <input 
//                     type="radio" 
//                     checked={selectedAddress === addr.id}
//                     onChange={() => setSelectedAddress(addr.id)}
//                     className="mr-4 w-5 h-5"
//                   />
//                   <span className="font-bold text-xl">{addr.name}</span>
//                   <span className="ml-4 px-4 py-2 bg-gray-100 text-base rounded-lg">{addr.type}</span>
//                   {addr.isDefault && <span className="ml-4 px-4 py-2 bg-green-100 text-green-700 text-base rounded-lg">DEFAULT</span>}
//                 </div>
//                 <p className="text-gray-700 ml-9 text-lg mb-2">{addr.address}</p>
//                 <p className="text-gray-700 ml-9 text-lg mb-2">{addr.city}, {addr.state} - {addr.pincode}</p>
//                 <p className="text-gray-700 ml-9 text-lg">Mobile: {addr.phone}</p>
//               </div>
//               <button className="text-blue-600 p-3">
//                 <Edit2 size={20} />
//               </button>
//             </div>
//           </div>
//         ))}
        
//         {showAddressForm && (
//           <div className="border-t-2 pt-8 mt-8">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="font-bold text-xl">Add New Address</h3>
//               <button onClick={() => setShowAddressForm(false)}>
//                 <X size={28} />
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-6">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={newAddress.name}
//                 onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
//                 className="p-4 border-2 rounded-lg text-lg"
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={newAddress.phone}
//                 onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
//                 className="p-4 border-2 rounded-lg text-lg"
//                 required
//               />
//               <textarea
//                 placeholder="Address"
//                 value={newAddress.address}
//                 onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
//                 className="col-span-2 p-4 border-2 rounded-lg h-32 text-lg"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="City"
//                 value={newAddress.city}
//                 onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
//                 className="p-4 border-2 rounded-lg text-lg"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="State"
//                 value={newAddress.state}
//                 onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
//                 className="p-4 border-2 rounded-lg text-lg"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Pincode"
//                 value={newAddress.pincode}
//                 onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
//                 className="p-4 border-2 rounded-lg text-lg"
//                 required
//               />
//               <select
//                 value={newAddress.type}
//                 onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
//                 className="p-4 border-2 rounded-lg text-lg"
//               >
//                 <option value="Home">Home</option>
//                 <option value="Work">Work</option>
//                 <option value="Other">Other</option>
//               </select>
//               <div className="col-span-2 flex gap-4 mt-4">
//                 <button onClick={handleAddAddress} className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-orange-600">
//                   SAVE ADDRESS
//                 </button>
//                 <button onClick={() => setShowAddressForm(false)} className="border-2 border-gray-300 px-10 py-4 rounded-lg text-lg font-semibold">
//                   CANCEL
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
        
//         <div className="flex justify-between items-center mt-8 pt-6 border-t-2">
//           <button 
//             onClick={() => setCurrentStep(1)}
//             className="text-blue-600 flex items-center text-lg font-semibold"
//           >
//             ← Back
//           </button>
//           <button 
//             onClick={() => setCurrentStep(3)}
//             className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-orange-600"
//             disabled={!selectedAddress}
//           >
//             DELIVER HERE
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderOrderSummaryStep = () => (
//     <div className="bg-white rounded-xl shadow-lg">
//       <div className="p-10 border-b">
//         <h2 className="text-2xl font-bold flex items-center">
//           <Truck className="mr-3 text-blue-600" size={28} />
//           Order Summary
//         </h2>
//       </div>
      
//       <div className="p-10">
//         <div className="flex gap-8 mb-10">
//           <img src={product?.image} alt={product?.title} className="w-32 h-32 object-cover rounded-xl" />
//           <div className="flex-1">
//             <h3 className="font-bold text-xl mb-4">{product?.title}</h3>
//             <p className="text-gray-600 text-lg mb-4">{product?.description}</p>
//             <div className="flex items-center gap-6 text-lg">
//               <span>Seller: {product?.seller}</span>
//               <div className="flex items-center">
//                 <span className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm mr-3 font-semibold">
//                   {product?.rating} ★
//                 </span>
//                 <span className="text-gray-500">({product?.reviews} reviews)</span>
//               </div>
//             </div>
//           </div>
//           <div className="text-right">
//             <div className="flex items-center gap-3 mb-3">
//               <span className="text-gray-400 line-through text-lg">₹{product?.originalPrice?.toLocaleString()}</span>
//               <span className="font-bold text-2xl">₹{product?.price?.toLocaleString()}</span>
//             </div>
//             <p className="text-green-600 text-lg">You saved ₹{(product?.originalPrice - product?.price)?.toLocaleString()}</p>
//           </div>
//         </div>
        
//         <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-10">
//           <div className="flex items-center text-green-800">
//             <Shield size={24} className="mr-3" />
//             <span className="font-bold text-lg">Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
//           </div>
//         </div>
        
//         <div className="flex justify-between items-center pt-6 border-t-2">
//           <button 
//             onClick={() => setCurrentStep(2)}
//             className="text-blue-600 flex items-center text-lg font-semibold"
//           >
//             ← Back
//           </button>
//           <button 
//             onClick={() => setCurrentStep(4)}
//             className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-orange-600"
//           >
//             CONTINUE
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderPaymentStep = () => (
//     <div className="bg-white rounded-xl shadow-lg">
//       <div className="p-10 border-b">
//         <h2 className="text-2xl font-bold flex items-center">
//           <CreditCard className="mr-3 text-blue-600" size={28} />
//           Payment Options
//         </h2>
//       </div>
      
//       <div className="p-10">
//         <div className="space-y-6 mb-10">
//           {[
//             { id: 'upi', name: 'UPI', desc: 'Pay using any UPI app', popular: true },
//             { id: 'card', name: 'Credit/Debit Card', desc: 'Visa, Mastercard, RuPay' },
//             { id: 'netbanking', name: 'Net Banking', desc: 'All major banks supported' },
//             { id: 'wallet', name: 'Wallets', desc: 'Paytm, PhonePe, Amazon Pay' },
//             { id: 'emi', name: 'EMI', desc: 'Easy monthly installments' },
//             { id: 'cod', name: 'Cash on Delivery', desc: 'Pay when you receive' }
//           ].map((method) => (
//             <div key={method.id} className={`border-2 rounded-xl p-6 cursor-pointer transition ${
//               paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
//             }`} onClick={() => setPaymentMethod(method.id)}>
//               <div className="flex items-center">
//                 <input 
//                   type="radio" 
//                   checked={paymentMethod === method.id}
//                   onChange={() => setPaymentMethod(method.id)}
//                   className="mr-4 w-5 h-5"
//                 />
//                 <div className="flex-1">
//                   <div className="flex items-center">
//                     <span className="font-bold text-xl">{method.name}</span>
//                     {method.popular && <span className="ml-4 px-4 py-2 bg-orange-100 text-orange-600 text-sm rounded-lg font-semibold">POPULAR</span>}
//                   </div>
//                   <p className="text-gray-600 text-lg mt-2">{method.desc}</p>
//                 </div>
//                 <ChevronRight className="text-gray-400" size={20} />
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="flex justify-between items-center pt-6 border-t-2">
//           <button 
//             onClick={() => setCurrentStep(3)}
//             className="text-blue-600 flex items-center text-lg font-semibold"
//           >
//             ← Back
//           </button>
//           <button 
//             onClick={handlePlaceOrder}
//             className="bg-orange-500 text-white px-12 py-5 rounded-lg text-lg font-bold hover:bg-orange-600 disabled:bg-gray-400"
//             disabled={!paymentMethod}
//           >
//             PLACE ORDER
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderOrderSummaryCard = () => (
//     <div className="bg-white rounded-xl shadow-lg p-8 h-fit sticky top-28">
//       <h3 className="font-bold mb-6 text-gray-800 text-xl">Price Details</h3>
//       <div className="space-y-5 text-lg">
//         <div className="flex justify-between">
//           <span>Price ({quantity} item)</span>
//           <span>₹{orderSummary.subtotal?.toLocaleString()}</span>
//         </div>
//         <div className="flex justify-between text-green-600">
//           <span>Discount</span>
//           <span>−₹{orderSummary.discount?.toLocaleString()}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Delivery Charges</span>
//           <span className={orderSummary.deliveryFee === 0 ? 'text-green-600' : ''}>
//             {orderSummary.deliveryFee === 0 ? 'FREE' : `₹${orderSummary.deliveryFee}`}
//           </span>
//         </div>
//         <hr className="border-t-2" />
//         <div className="flex justify-between font-bold text-2xl">
//           <span>Total Amount</span>
//           <span>₹{orderSummary.total?.toLocaleString()}</span>
//         </div>
//         {orderSummary.discount > 0 && (
//           <p className="text-green-600 text-lg font-semibold">
//             You will save ₹{orderSummary.discount?.toLocaleString()} on this order
//           </p>
//         )}
//       </div>
//     </div>
//   );

//   if (!product) return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {renderStepIndicator()}
      
//       <div className="max-w-7xl mx-auto p-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
//           <div className="lg:col-span-2 space-y-8">
//             {currentStep === 1 && renderLoginStep()}
//             {currentStep === 2 && renderAddressStep()}
//             {currentStep === 3 && renderOrderSummaryStep()}
//             {currentStep === 4 && renderPaymentStep()}
//           </div>
          
//           <div className="lg:col-span-1">
//             {renderOrderSummaryCard()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage
      



import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ChevronRight, MapPin, CreditCard, Truck, Shield, Plus, Edit2, Check, X, User, Lock, Mail, Eye, EyeOff } from 'lucide-react';

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  
  // Authentication states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // true for login, false for signup
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [signupForm, setSignupForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState('');
  
  // Form states
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "9876543210",
      address: "123 Main Street, Sector 15",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      type: "Home",
      isDefault: true
    }
  ]);
  
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderSummary, setOrderSummary] = useState({});
  
  const [newAddress, setNewAddress] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    type: 'Home'
  });

  // API Base URL - Update this to your actual API URL
  const API_BASE_URL = 'http://localhost:5000/api/auth';

  useEffect(() => {
    // Check if user is already logged in (check for stored token)
    const storedToken = localStorage?.getItem('authToken');
    const storedUser = localStorage?.getItem('user');
    
    if (storedToken && storedUser) {
      setAuthToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }

    // Mock product data
const mockProduct = {
  id: 1,
  title: "Organic Neem Fertilizer - 5kg",
  description: "Natural neem-based fertilizer for improving soil health and pest resistance in crops.",
  price: 499,
  originalPrice: 699,
  image: "https://i5.walmartimages.com/seo/The-Andersons-Professional-16-4-8-Fertilizer-with-14-Humic-DG-5-000-sq-ft_9c0aac0c-d1d4-43dd-a3d9-19101866e42d.1242a390cec6e066f4e3494706b2a55b.png",
  rating: 4.7,
  reviews: 856,
  seller: "AgroGrow Organic Supplies",
  quantity: 1
};

    setProduct(mockProduct);
    setQuantity(mockProduct.quantity || 1);
    
    // Calculate order summary
    const subtotal = mockProduct.price * quantity;
    const discount = (mockProduct.originalPrice - mockProduct.price) * quantity;
    const deliveryFee = subtotal > 500 ? 0 : 40;
    const total = subtotal + deliveryFee;
    
    setOrderSummary({
      subtotal,
      discount,
      deliveryFee,
      total
    });
  }, [quantity]);




  const steps = [
    { id: 1, title: "LOGIN", desc: "Sign in to your account" },
    { id: 2, title: "DELIVERY ADDRESS", desc: "Select delivery address" },
    { id: 3, title: "ORDER SUMMARY", desc: "Review your order" },
    { id: 4, title: "PAYMENT", desc: "Choose payment method" }
  ];

  // API call for login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (!loginForm.email || !loginForm.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginForm.email,
          password: loginForm.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        setIsLoggedIn(true);
        setUser(data.user);
        setAuthToken(data.token);
        
        // Store in localStorage for persistence
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        
        setLoginForm({ email: '', password: '' });
        setError('');
        
        // Show success message
        alert('Login successful! 🎉');
      } else {
        // Handle error response
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // API call for signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (!signupForm.username || !signupForm.email || !signupForm.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    if (!signupForm.email.includes('@')) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }
    
    if (signupForm.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: signupForm.username,
          email: signupForm.email,
          password: signupForm.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Successful signup
        alert('Account created successfully! Please login with your credentials.');
        
        // Switch to login form and pre-fill email
        setShowLogin(true);
        setLoginForm({ 
          email: signupForm.email, 
          password: '' 
        });
        setSignupForm({ username: '', email: '', password: '' });
        setError('');
      } else {
        // Handle error response
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get user profile (optional - can be used to fetch updated user info)
  const getUserProfile = async () => {
    if (!authToken) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
      } else {
        console.error('Failed to fetch user profile:', data.message);
      }
    } catch (error) {
      console.error('Profile fetch error:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setAuthToken('');
    setCurrentStep(1);
    
    // Clear stored data
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  };

  const handleAddAddress = () => {
    if (!newAddress.name || !newAddress.phone || !newAddress.address || !newAddress.city || !newAddress.state || !newAddress.pincode) {
      alert('Please fill all required fields');
      return;
    }
    const newId = addresses.length + 1;
    setAddresses([...addresses, { ...newAddress, id: newId, isDefault: false }]);
    setNewAddress({ name: '', phone: '', address: '', city: '', state: '', pincode: '', type: 'Home' });
    setShowAddressForm(false);
    setSelectedAddress(newId);
  };

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    alert('Order placed successfully! 🎉');
  };

  const renderStepIndicator = () => (
    <div className="bg-white shadow-lg border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 text-white' 
                    : currentStep === step.id 
                    ? 'bg-blue-100 text-blue-600 border-3 border-blue-600'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step.id ? <Check size={24} /> : step.id}
                </div>
                <div className="text-center mt-4">
                  <div className={`text-sm font-bold ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'}`}>
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-500 hidden sm:block mt-1">{step.desc}</div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-24 h-1 mx-8 ${currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLoginStep = () => {
    if (isLoggedIn) {
      return (
        <div className="bg-white rounded-xl p-10 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <div className="text-green-600 flex items-center">
              <Check size={24} className="mr-2" />
              <span className="text-lg">{user?.email}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-lg mb-2">Hello {user?.username || user?.name}!</p>
              <p className="text-gray-600 text-lg">You are logged in successfully</p>
            </div>
            <button 
              onClick={handleLogout}
              className="text-red-600 text-lg font-semibold hover:underline"
            >
              Logout
            </button>
          </div>
          <button 
            onClick={() => setCurrentStep(2)}
            className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition duration-200 mt-8"
          >
            CONTINUE CHECKOUT
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <div className="flex items-center">
            <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</span>
            <h2 className="text-xl font-bold">LOGIN OR SIGNUP</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10">
          <div>
            <div className="flex bg-gray-100 rounded-lg mb-8">
              <button 
                onClick={() => {
                  setShowLogin(true);
                  setError('');
                }}
                className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition ${
                  showLogin ? 'bg-blue-600 text-white' : 'text-gray-600'
                }`}
              >
                Login
              </button>
              <button 
                onClick={() => {
                  setShowLogin(false);
                  setError('');
                }}
                className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition ${
                  !showLogin ? 'bg-blue-600 text-white' : 'text-gray-600'
                }`}
              >
                Sign Up
              </button>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {showLogin ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Login to Your Account</h3>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Enter Email/Mobile number"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 border-2 rounded-lg text-lg focus:border-blue-500 outline-none"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    className="w-full pl-12 pr-12 py-4 border-2 rounded-lg text-lg focus:border-blue-500 outline-none"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  By continuing, you agree to Farmseasy's <span className="text-blue-600 cursor-pointer">Terms of Use</span> and <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
                </div>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'LOGGING IN...' : 'LOGIN'}
                </button>
                <div className="text-center">
                  <span className="text-blue-600 cursor-pointer hover:underline">Forgot Password?</span>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Create New Account</h3>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    value={signupForm.username}
                    onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 border-2 rounded-lg text-lg focus:border-blue-500 outline-none"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 border-2 rounded-lg text-lg focus:border-blue-500 outline-none"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password (min 6 characters)"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                    className="w-full pl-12 pr-12 py-4 border-2 rounded-lg text-lg focus:border-blue-500 outline-none"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  By continuing, you agree to Flipkart's <span className="text-blue-600 cursor-pointer">Terms of Use</span> and <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
                </div>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'CREATING ACCOUNT...' : 'SIGN UP'}
                </button>
              </form>
            )}
          </div>

          <div className="hidden lg:block">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Advantages of our secure login</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Truck className="text-blue-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Easily Track Orders, Hassle free Returns</h4>
                  <p className="text-gray-600">Keep track of your orders and returns with ease</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="text-blue-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Get Relevant Alerts and Recommendation</h4>
                  <p className="text-gray-600">Receive personalized alerts and product recommendations</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-blue-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Wishlist, Reviews, Ratings and more.</h4>
                  <p className="text-gray-600">Save products, write reviews and access exclusive features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAddressStep = () => (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-10 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center">
            <MapPin className="mr-3 text-blue-600" size={28} />
            Delivery Address
          </h2>
          <button 
            onClick={() => setShowAddressForm(true)}
            className="text-blue-600 text-lg flex items-center hover:underline font-semibold"
          >
            <Plus size={20} className="mr-2" />
            ADD NEW ADDRESS
          </button>
        </div>
      </div>
      
      <div className="p-10">
        {addresses.map((addr) => (
          <div key={addr.id} className={`border-2 rounded-xl p-6 mb-6 cursor-pointer transition ${
            selectedAddress === addr.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`} onClick={() => setSelectedAddress(addr.id)}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <input 
                    type="radio" 
                    checked={selectedAddress === addr.id}
                    onChange={() => setSelectedAddress(addr.id)}
                    className="mr-4 w-5 h-5"
                  />
                  <span className="font-bold text-xl">{addr.name}</span>
                  <span className="ml-4 px-4 py-2 bg-gray-100 text-base rounded-lg">{addr.type}</span>
                  {addr.isDefault && <span className="ml-4 px-4 py-2 bg-green-100 text-green-700 text-base rounded-lg">DEFAULT</span>}
                </div>
                <p className="text-gray-700 ml-9 text-lg mb-2">{addr.address}</p>
                <p className="text-gray-700 ml-9 text-lg mb-2">{addr.city}, {addr.state} - {addr.pincode}</p>
                <p className="text-gray-700 ml-9 text-lg">Mobile: {addr.phone}</p>
              </div>
              <button className="text-blue-600 p-3">
                <Edit2 size={20} />
              </button>
            </div>
          </div>
        ))}
        
        {showAddressForm && (
          <div className="border-t-2 pt-8 mt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xl">Add New Address</h3>
              <button onClick={() => setShowAddressForm(false)}>
                <X size={28} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                value={newAddress.name}
                onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                className="p-4 border-2 rounded-lg text-lg"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={newAddress.phone}
                onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                className="p-4 border-2 rounded-lg text-lg"
                required
              />
              <textarea
                placeholder="Address"
                value={newAddress.address}
                onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                className="col-span-2 p-4 border-2 rounded-lg h-32 text-lg"
                required
              />
              <input
                type="text"
                placeholder="City"
                value={newAddress.city}
                onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                className="p-4 border-2 rounded-lg text-lg"
                required
              />
              <input
                type="text"
                placeholder="State"
                value={newAddress.state}
                onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                className="p-4 border-2 rounded-lg text-lg"
                required
              />
              <input
                type="text"
                placeholder="Pincode"
                value={newAddress.pincode}
                onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
                className="p-4 border-2 rounded-lg text-lg"
                required
              />
              <select
                value={newAddress.type}
                onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
                className="p-4 border-2 rounded-lg text-lg"
              >
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
              <div className="col-span-2 flex gap-4 mt-4">
                <button onClick={handleAddAddress} className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-orange-600">
                  SAVE ADDRESS
                </button>
                <button onClick={() => setShowAddressForm(false)} className="border-2 border-gray-300 px-10 py-4 rounded-lg text-lg font-semibold">
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-8 pt-6 border-t-2">
          <button 
            onClick={() => setCurrentStep(1)}
            className="text-blue-600 flex items-center text-lg font-semibold"
          >
            ← Back
          </button>
          <button 
            onClick={() => setCurrentStep(3)}
            className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-orange-600"
            disabled={!selectedAddress}
          >
            DELIVER HERE
          </button>
        </div>
      </div>
    </div>
  );


  const renderOrderSummaryStep = () => (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-10 border-b">
        <h2 className="text-2xl font-bold flex items-center">
          <Truck className="mr-3 text-blue-600" size={28} />
          Order Summary
        </h2>
      </div>
      
      <div className="p-10">
        <div className="flex gap-8 mb-10">
          <img src={product?.image} alt={product?.title} className="w-32 h-32 object-cover rounded-xl" />
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-4">{product?.title}</h3>
            <p className="text-gray-600 text-lg mb-4">{product?.description}</p>
            <div className="flex items-center gap-6 text-lg">
              <span>Seller: {product?.seller}</span>
              <div className="flex items-center">
                <span className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm mr-3 font-semibold">
                  {product?.rating} ★
                </span>
                <span className="text-gray-500">({product?.reviews} reviews)</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-gray-400 line-through text-lg">₹{product?.originalPrice?.toLocaleString()}</span>
              <span className="font-bold text-2xl">₹{product?.price?.toLocaleString()}</span>
            </div>
            <p className="text-green-600 text-lg">You saved ₹{(product?.originalPrice - product?.price)?.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-10">
          <div className="flex items-center text-green-800">
            <Shield size={24} className="mr-3" />
            <span className="font-bold text-lg">Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-6 border-t-2">
          <button 
            onClick={() => setCurrentStep(2)}
            className="text-blue-600 flex items-center text-lg font-semibold"
          >
            ← Back
          </button>
          <button 
            onClick={() => setCurrentStep(4)}
            className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-orange-600"
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );




  const renderPaymentStep = () => (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-10 border-b">
        <h2 className="text-2xl font-bold flex items-center">
          <CreditCard className="mr-3 text-blue-600" size={28} />
          Payment Options
        </h2>
      </div>
      
      <div className="p-10">
        <div className="space-y-6 mb-10">
          {[
            { id: 'upi', name: 'UPI', desc: 'Pay using any UPI app', popular: true },
            { id: 'card', name: 'Credit/Debit Card', desc: 'Visa, Mastercard, RuPay' },
            { id: 'netbanking', name: 'Net Banking', desc: 'All major banks supported' },
            { id: 'wallet', name: 'Wallets', desc: 'Paytm, PhonePe, Amazon Pay' },
            { id: 'emi', name: 'EMI', desc: 'Easy monthly installments' },
            { id: 'cod', name: 'Cash on Delivery', desc: 'Pay when you receive' }
          ].map((method) => (
            <div key={method.id} className={`border-2 rounded-xl p-6 cursor-pointer transition ${
              paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`} onClick={() => setPaymentMethod(method.id)}>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  checked={paymentMethod === method.id}
                  onChange={() => setPaymentMethod(method.id)}
                  className="mr-4 w-5 h-5"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-bold text-xl">{method.name}</span>
                    {method.popular && <span className="ml-4 px-4 py-2 bg-orange-100 text-orange-600 text-sm rounded-lg font-semibold">POPULAR</span>}
                  </div>
                  <p className="text-gray-600 text-lg mt-2">{method.desc}</p>
                </div>
                <ChevronRight className="text-gray-400" size={20} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-6 border-t-2">
          <button 
            onClick={() => setCurrentStep(3)}
            className="text-blue-600 flex items-center text-lg font-semibold"
          >
            ← Back
          </button>
          <button 
            onClick={handlePlaceOrder}
            className="bg-orange-500 text-white px-12 py-5 rounded-lg text-lg font-bold hover:bg-orange-600 disabled:bg-gray-400"
            disabled={!paymentMethod}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );

  const renderOrderSummaryCard = () => (
    <div className="bg-white rounded-xl shadow-lg p-8 h-fit sticky top-28">
      <h3 className="font-bold mb-6 text-gray-800 text-xl">Price Details</h3>
      <div className="space-y-5 text-lg">
        <div className="flex justify-between">
          <span>Price ({quantity} item)</span>
          <span>₹{orderSummary.subtotal?.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>−₹{orderSummary.discount?.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span className={orderSummary.deliveryFee === 0 ? 'text-green-600' : ''}>
            {orderSummary.deliveryFee === 0 ? 'FREE' : `₹${orderSummary.deliveryFee}`}
          </span>
        </div>
        <hr className="border-t-2" />
        <div className="flex justify-between font-bold text-2xl">
          <span>Total Amount</span>
          <span>₹{orderSummary.total?.toLocaleString()}</span>
        </div>
        {orderSummary.discount > 0 && (
          <p className="text-green-600 text-lg font-semibold">
            You will save ₹{orderSummary.discount?.toLocaleString()} on this order
          </p>
        )}
      </div>
    </div>
  );

  if (!product) return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {renderStepIndicator()}
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {currentStep === 1 && renderLoginStep()}
            {currentStep === 2 && renderAddressStep()}
            {currentStep === 3 && renderOrderSummaryStep()}
            {currentStep === 4 && renderPaymentStep()}
          </div>
          
          <div className="lg:col-span-1">
            {renderOrderSummaryCard()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;