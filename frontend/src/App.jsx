// /* eslint-disable no-unused-vars */
// import React, { createContext, useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import "./responsive.css";
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from './components/header/Header'
// import Home from './pages/Home/Home'
// import Footer from './components/footer/Footer'


// import data from "./data";
// import SignIn from './pages/SignIn/SignIn';
// import SignUp from './pages/SignUp/SignUp';
// import Cart from './pages/cart/Cart';
// import Details from './pages/Details/Details';

// const MyContext = createContext();

// const App = () => {

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [cartItems, setCartItems] = useState([]);

//   const [isopenNavigation, setIsopenNavigation] = useState(false);
//   const [isOpenFilters, setIsopenFilters] = useState(false);
//   const [isLogin, setIsLogin] = useState();

//   const signIn = () => {
//     const is_Login = localStorage.getItem("isLogin");
//     setIsLogin(is_Login);
//   };

//   const signOut = () => {
//     localStorage.removeItem("isLogin");
//     setIsLogin(false);
//   };


//   const openFilters = () => {
//     setIsopenFilters(!isOpenFilters);
//   };


//   const value = {
//     windowWidth,
//     cartItems,
//     isLogin,
//     signOut,
//     signIn,
//     isOpenFilters,
//     openFilters,
//     isopenNavigation,
//     setIsopenNavigation,
//   };

//   return <>
//     <BrowserRouter>
//       <MyContext.Provider value={value}>

//         <Header data={data.productData} />
//         <Routes>
//           <Route
//             exact={true}
//             path="/"
//             element={<Home data={data.productData} />}
//           />
//           {/* <Route
//               exact={true}
//               path="/product/:id"
//               element={<DetailsPage data={data.productData} />}
//             /> */}
//           <Route exact={true} path="/cart" element={<Cart />} />
//           <Route exact={true} path="/details" element={<Details />} />
//           {/* <Route exact={true} path="/checkout" element={<Checkout />} /> */}


//           <Route exact={true} path="/signIn" element={<SignIn />} />
//           <Route exact={true} path="/signUp" element={<SignUp />} />
//           {/* <Route exact={true} path="*" element={<NotFound />} /> */}

//         </Routes>
//         <Footer />
//       </MyContext.Provider>

//     </BrowserRouter>
//   </>
// }

// export default App
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

// Pages
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/cart/Cart';
import Details from './pages/Details/Details';

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

  // Initialize login state on mount
  useEffect(() => {
    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login === "true");
  }, []);

  // Auth handlers
  const signIn = () => {
    localStorage.setItem("isLogin", "true");
    setIsLogin(true);
  };

  const signOut = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
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
          {/* Add NotFound or redirect route if needed */}
        </Routes>

        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default App;
export { MyContext };
