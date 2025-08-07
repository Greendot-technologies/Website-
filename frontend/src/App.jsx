// /* eslint-disable no-unused-vars */
// import React, { createContext, useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import "./responsive.css";

// // Components
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// import ShopByCrop from './components/crop/ShopByCrop';
// import ProductList from './components/product/ProductList';
// import AllProducts from './components/product/AllProducts';
// import DailyBestSells from './components/product/DailyBestSells';   
// import ProductDetail from './components/product/ProductDetail';

// // Pages
// import Home from './pages/Home/Home';
// import SignIn from './pages/SignIn/SignIn';
// import SignUp from './pages/SignUp/SignUp';
// import Cart from './pages/cart/Cart';
// import CheckoutPage from './pages/cart/CheckoutPage'; 
// import Details from './pages/Details/Details';
// import ConnectWithUsForm from './pages/SignIn/ConnectWithUsForm'; // Import the ConnectWithUsForm component

// // Data
// import data from "./data";

// // Context

// const MyContext = createContext();

// const App = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [cartItems, setCartItems] = useState([]);
//   const [isOpenNavigation, setIsOpenNavigation] = useState(false);
//   const [isOpenFilters, setIsOpenFilters] = useState(false);
//   const [isLogin, setIsLogin] = useState(false);

//   // Initialize login state on mount
//   useEffect(() => {
//     const is_Login = localStorage.getItem("isLogin");
//     setIsLogin(is_Login === "true");
//   }, []);

//   // Auth handlers
//   const signIn = () => {
//     localStorage.setItem("isLogin", "true");
//     setIsLogin(true);
//   };

//   const signOut = () => {
//     localStorage.removeItem("isLogin");
//     setIsLogin(false);
//   };

//   // Filter toggle handler
//   const openFilters = () => {
//     setIsOpenFilters(!isOpenFilters);
//   };

//   const contextValue = {
//     windowWidth,
//     cartItems,
//     isLogin,
//     signIn,
//     signOut,
//     isOpenFilters,
//     openFilters,
//     isOpenNavigation,
//     setIsOpenNavigation,
//   };

//   return (
//     <BrowserRouter>
//       <MyContext.Provider value={contextValue}>
//         <Header data={data.productData} />

//         <Routes>
//           <Route path="/" element={<Home data={data.productData} />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/details" element={<Details />} />
//           <Route path="/ShopByCrop" element={<ShopByCrop />} />
//           <Route path="/ProductList" element={<ProductList />} />
//           <Route path="/AllProducts" element={<AllProducts />} />
//           <Route path="/signIn" element={<SignIn />} />
//           <Route path="/signUp" element={<SignUp />} />
//         <Route path="/DailyBestSells" element={<DailyBestSells />} />
//             <Route path="/product/:id" element={<ProductDetail />} />
//             <Route path="/ConnectWithUsForm" element={<ConnectWithUsForm open={true} onClose={() => {}} />} />
//           <Route path="/CheckoutPage" element={<CheckoutPage />} />
//           {/* Add NotFound or redirect route if needed */}
//         </Routes>

//         <Footer />
//       </MyContext.Provider>
//     </BrowserRouter>
//   );
// };

// export default App;
// export { MyContext };



/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./responsive.css";

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ShopByCrop from './components/crop/ShopByCrop';
import ProductList from './components/product/ProductList';
import AllProducts from './components/product/AllProducts';
import DailyBestSells from './components/product/DailyBestSells';   
import ProductDetail from './components/product/ProductDetail';

// Pages
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/cart/Cart';
import CheckoutPage from './pages/cart/CheckoutPage'; 
import Details from './pages/Details/Details';
import ConnectWithUsForm from './pages/SignIn/ConnectWithUsForm'; // Import the ConnectWithUsForm component

// Data
import data from "./data";

// Context
const MyContext = createContext();

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cartItems, setCartItems] = useState([]);
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null); // Add user state

  // Initialize login state on mount
  useEffect(() => {
    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login === "true");
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Load user from localStorage if exists
    }
  }, []);

  // Auth handlers
  const signIn = () => {
    localStorage.setItem("isLogin", "true");
    setIsLogin(true);
  };

  const signOut = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user"); // Remove user data on logout
    setIsLogin(false);
    setUser(null); // Clear user state
  };

  // Filter toggle handler
  const openFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  const contextValue = {
    windowWidth,
    cartItems,
    isLogin,
    signIn,
    signOut,
    isOpenFilters,
    openFilters,
    isOpenNavigation,
    setIsOpenNavigation,
    user, // Add user to context
    setUser, // Add setUser to context
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={contextValue}>
        <Header data={data.productData} />

        <Routes>
          <Route path="/" element={<Home data={data.productData} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Details />} />
          <Route path="/ShopByCrop" element={<ShopByCrop />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/DailyBestSells" element={<DailyBestSells />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/ConnectWithUsForm" element={<ConnectWithUsForm open={true} onClose={() => {}} />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          {/* Add NotFound or redirect route if needed */}
        </Routes>

        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default App;
export { MyContext };