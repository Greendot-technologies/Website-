// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Product from "./Product";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [similarProducts, setSimilarProducts] = useState([]);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/${id}`);
//         setProduct(res.data.product);

//         if (res.data.product.category_id) {
//           const simRes = await axios.get(
//             `http://localhost:5000/api/products/summary?category=${res.data.product.category_id}`
//           );
//           const filtered = simRes.data.products.filter((p) => p.id !== parseInt(id));
//           setSimilarProducts(filtered);
//         }
//       } catch (err) {
//         console.error("❌ Error fetching product:", err);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   if (!product) return <div className="p-8">Loading...</div>;

//   const finalImage =
//     product?.images?.find((img) => img?.is_primary)?.image_url ||
//     product?.images?.[0]?.image_url;

//   const imageUrl = finalImage?.startsWith("/uploads")
//     ? `http://localhost:5000${finalImage}`
//     : finalImage;

//   return (
//     <div className="p-8">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 text-blue-600 hover:underline"
//       >
//         ← Back to Products
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-8">
//         <img
//           src={imageUrl}
//           alt={product.name}
//           className="w-full h-[400px] object-cover rounded-xl"
//           onError={(e) => (e.target.src = "/fallback.jpg")}
//         />

//         <div className="space-y-4">
//           <h2 className="text-4xl font-bold">{product.name}</h2>
//           <p className="text-gray-500 text-xl">{product.brand}</p>
//           <p className="text-lg text-gray-600">{product.description}</p>

//           <div className="flex space-x-4 items-center mt-4">
//             <span className="text-gray-400 line-through text-xl">
//               Rs {product.price}
//             </span>
//             <span className="text-green-600 text-3xl font-bold">
//               Rs {product.discounted_price}
//             </span>
//             <span className="text-sm text-red-500">
//               {product.discount_percentage}% OFF
//             </span>
//           </div>

//           <div className="flex space-x-4 mt-6">
//             <button className="bg-[#3bb77e] text-white px-6 py-3 rounded-xl hover:bg-green-700">
//               Add to Cart
//             </button>
//             <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12">
//         <h3 className="text-2xl font-bold mb-6">Similar Products</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {similarProducts.map((item) => (
//             <Product key={item.id} item={item} tag="similar" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Product from "./Product";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [similarProducts, setSimilarProducts] = useState([]);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/${id}`);
//         setProduct(res.data.product);

//         if (res.data.product.category_id) {
//           const simRes = await axios.get(
//             `http://localhost:5000/api/products/summary?category=${res.data.product.category_id}`
//           );
//           const filtered = simRes.data.products.filter((p) => p.id !== parseInt(id));
//           setSimilarProducts(filtered);
//         }
//       } catch (err) {
//         console.error("❌ Error fetching product:", err);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   if (!product) return <div className="p-8">Loading...</div>;

//   const finalImage =
//     product?.images?.find((img) => img?.is_primary)?.image_url ||
//     product?.images?.[0]?.image_url;

//   const imageUrl = finalImage?.startsWith("/uploads")
//     ? `http://localhost:5000${finalImage}`
//     : finalImage;

//   return (
//     <div className="p-6 max-w-screen-xl mx-auto">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 text-blue-600 hover:underline"
//       >
//         ← Back to Products
//       </button>

//       {/* Product Overview */}
//       <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-10">
//         <div className="w-full md:w-1/2">
//           <img
//             src={imageUrl}
//             alt={product.name}
//             className="rounded-xl w-full h-[420px] object-cover"
//             onError={(e) => (e.target.src = "/fallback.jpg")}
//           />
//         </div>

//         <div className="w-full md:w-1/2 space-y-4">
//           <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-sm bg-green-100 inline-block px-3 py-1 rounded-full text-green-700 uppercase font-semibold">
//             {product.brand}
//           </p>
//           <p className="text-gray-600 text-base mt-2">{product.description}</p>

//           <div className="mt-4 flex items-center gap-4">
//             <span className="text-gray-400 text-xl line-through">Rs {product.price}</span>
//             <span className="text-green-600 text-3xl font-bold">Rs {product.discounted_price}</span>
//             <span className="text-red-500 text-sm font-medium">{product.discount_percentage}% OFF</span>
//           </div>

//           <div className="flex gap-4 mt-6">
//             <button className="bg-[#3bb77e] hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold">
//               Add to Cart
//             </button>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-lg font-semibold">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Similar Products */}
//       <div className="mt-12">
//         <h3 className="text-2xl font-bold mb-6 text-gray-800">Similar Products</h3>
//         {similarProducts.length === 0 ? (
//           <p className="text-gray-500">No similar products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {similarProducts.map((item) => (
//               <Product key={item.id} item={item} tag="similar" />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Product from "./Product";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [similarProducts, setSimilarProducts] = useState([]);
//   const userId = 1; // Replace with dynamic user ID if needed

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/${id}`);
//         setProduct(res.data.product);

//         if (res.data.product.category_id) {
//           const simRes = await axios.get(
//             `http://localhost:5000/api/products/summary?category=${res.data.product.category_id}`
//           );
//           const filtered = simRes.data.products.filter((p) => p.id !== parseInt(id));
//           setSimilarProducts(filtered);
//         }
//       } catch (err) {
//         console.error("❌ Error fetching product:", err);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   if (!product) return <div className="p-8">Loading...</div>;

//   const finalImage =
//     product?.images?.find((img) => img?.is_primary)?.image_url ||
//     product?.images?.[0]?.image_url;

//   const imageUrl = finalImage?.startsWith("/uploads")
//     ? `http://localhost:5000${finalImage}`
//     : finalImage;

//   const handleAddToCart = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/cart/add", {
//         user_id: userId,
//         product_id: product.id,
//         quantity: 1,
//       });
//       alert("🛒 Product added to cart!");
//     } catch (err) {
//       console.error("Failed to add to cart:", err);
//       alert("❌ Could not add to cart");
//     }
//   };

//   return (
//     <div className="p-6 max-w-screen-xl mx-auto">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 text-blue-600 hover:underline"
//       >
//         ← Back to Products
//       </button>

//       {/* Product Overview */}
//       <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-10">
//         <div className="w-full md:w-1/2">
//           <img
//             src={imageUrl}
//             alt={product.name}
//             className="rounded-xl w-full h-[420px] object-cover"
//             onError={(e) => (e.target.src = "/fallback.jpg")}
//           />
//         </div>

//         <div className="w-full md:w-1/2 space-y-4">
//           <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-sm bg-green-100 inline-block px-3 py-1 rounded-full text-green-700 uppercase font-semibold">
//             {product.brand}
//           </p>
//           <p className="text-gray-600 text-base mt-2">{product.description}</p>

//           <div className="mt-4 flex items-center gap-4">
//             <span className="text-gray-400 text-xl line-through">
//               Rs {product.price}
//             </span>
//             <span className="text-green-600 text-3xl font-bold">
//               Rs {product.discounted_price}
//             </span>
//             <span className="text-red-500 text-sm font-medium">
//               {product.discount_percentage}% OFF
//             </span>
//           </div>

//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={handleAddToCart}
//               className="bg-[#3bb77e] hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold"
//             >
//               Add to Cart
//             </button>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-lg font-semibold">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Similar Products */}
//       <div className="mt-12">
//         <h3 className="text-2xl font-bold mb-6 text-gray-800">
//           Similar Products
//         </h3>
//         {similarProducts.length === 0 ? (
//           <p className="text-gray-500">No similar products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {similarProducts.map((item) => (
//               <Product key={item.id} item={item} tag="similar" />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "./Product";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const userId = 1; // Replace with dynamic user ID if needed

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data.product);

        if (res.data.product.category_id) {
          const simRes = await axios.get(
            `http://localhost:5000/api/products/summary?category=${res.data.product.category_id}`
          );
          const filtered = simRes.data.products.filter((p) => p.id !== parseInt(id));
          setSimilarProducts(filtered);
        }

        const cartRes = await axios.get(`http://localhost:5000/api/cart/${userId}`);
        setCartItems(cartRes.data);

        const isInCart = cartRes.data.some((item) => item.product_id === parseInt(id));
        setAlreadyInCart(isInCart);
      } catch (err) {
        console.error("❌ Error fetching product:", err);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) return <div className="p-8">Loading...</div>;

  const finalImage =
    product?.images?.find((img) => img?.is_primary)?.image_url ||
    product?.images?.[0]?.image_url;

  const imageUrl = finalImage?.startsWith("/uploads")
    ? `http://localhost:5000${finalImage}`
    : finalImage;

  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:5000/api/cart/add", {
        user_id: userId,
        product_id: product.id,
        quantity: 1,
      });
      alert("🛒 Product added to cart!");
      setAlreadyInCart(true);
    } catch (err) {
      console.error("Failed to add to cart:", err);
      alert("❌ Could not add to cart");
    }
  };

  const handleBuyNow = () => {
    const checkoutData = {
      user_id: userId,
      product: {
        ...product,
        quantity: 1,
      },
    };
    localStorage.setItem("checkout_product", JSON.stringify(checkoutData));
    navigate("/CheckoutPage");
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back to Products
      </button>

      {/* Product Overview */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt={product.name}
            className="rounded-xl w-full h-[420px] object-cover"
            onError={(e) => (e.target.src = "/fallback.jpg")}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-sm bg-green-100 inline-block px-3 py-1 rounded-full text-green-700 uppercase font-semibold">
            {product.brand}
          </p>
          <p className="text-gray-600 text-base mt-2">{product.description}</p>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-gray-400 text-xl line-through">
              Rs {product.price}
            </span>
            <span className="text-green-600 text-3xl font-bold">
              Rs {product.discounted_price}
            </span>
            <span className="text-red-500 text-sm font-medium">
              {product.discount_percentage}% OFF
            </span>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-[#3bb77e] hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold disabled:opacity-60"
              disabled={alreadyInCart}
            >
              {alreadyInCart ? "Already in Cart" : "Add to Cart"}
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-lg font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Similar Products
        </h3>
        {similarProducts.length === 0 ? (
          <p className="text-gray-500">No similar products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((item) => (
              <Product key={item.id} item={item} tag="similar" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
