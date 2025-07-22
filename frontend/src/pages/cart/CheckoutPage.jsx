import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedProduct = localStorage.getItem('checkout_product');
    if (!storedProduct) return navigate('/');
    const parsedProduct = JSON.parse(storedProduct);
    setProduct(parsedProduct);
    setQuantity(parsedProduct.quantity || 1);
  }, [navigate]);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    localStorage.removeItem('checkout_product');
    navigate('/');
  };

  if (!product) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Summary */}
        <div className="space-y-4">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-medium">Price: ₹{product.price}</p>
          <p className="text-lg font-medium">Quantity: {quantity}</p>
          <p className="text-xl font-bold">Total: ₹{product.price * quantity}</p>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
          <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded" />
          <textarea placeholder="Delivery Address" className="w-full p-3 border rounded h-32"></textarea>

          <button
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
