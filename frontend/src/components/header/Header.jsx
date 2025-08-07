// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from 'react';
// import '../header/header.css';
// import Logo from '../../assets/images/logo.svg';
// import SearchIcon from '@mui/icons-material/Search';
// import Select from '../selectDrop/select';
// import axios from 'axios';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import IconCompare from '../../assets/images/icon-compare.svg';
// import IconHeart from '../../assets/images/icon-heart.svg';
// import IconCart from '../../assets/images/icon-cart.svg';
// import IconUser from '../../assets/images/icon-user.svg';

// import Button from '@mui/material/Button';
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import ConnectWithUsForm from '../../pages/SignIn/ConnectWithUsForm';
// import { ClickAwayListener } from '@mui/base/ClickAwayListener';

// import Nav from './nav/Nav';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';

// import { MyContext } from '../../App';
// import { useNavigate } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// const Header = (props) => {

//     const [isOpenDropDown, setisOpenDropDown] = useState(false);
//     const [isOpenAccDropDown, setisOpenAccDropDown] = useState(false);
    
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//     const [isopenSearch, setOpenSearch] = useState(false);
//     const [isOpenNav, setIsOpenNav] = useState(false);

//     const headerRef = useRef();
//     const searchInput = useRef()

//     const context = useContext(MyContext);

//     // useEffect(() => {

//     // }, [context.cartItems])

//     const [categories, setcategories] = useState([
//         'Milks and Dairies',
//         'Wines & Drinks',
//         'Clothing & beauty',
//         'Fresh Seafood',
//         'Pet Foods & Toy',
//         'Fast food',
//         'Baking material',
//         'Vegetables',
//         'Fresh Fruit',
//         'Bread and Juice',
//         'Milks and Dairies',
//         'Wines & Drinks',
//         'Clothing & beauty',
//         'Fresh Seafood'
//     ]);


//     useEffect(()=>{
//         window.addEventListener('scroll',()=>{
//             let position = window.pageYOffset;
//             if(position >100){
//                 headerRef.current.classList.add('fixed')
//             }else{
//                 headerRef.current.classList.remove('fixed')

//             }
//         })
//     },[])

//     const openSearch = () => {
//         setOpenSearch(true);
//         searchInput.current.focus();
//     }
    
//     const closeSearch = () => {
//         setOpenSearch(false);
//         searchInput.current.blur();
//         searchInput.current.value = "";
//     }

//     const openNav = () => {
//         setIsOpenNav(true);
//         context.setIsopenNavigation(true)
//     }

//     const closeNav = () => {
//         setIsOpenNav(false);
//         setisOpenAccDropDown(false)
//         context.setIsopenNavigation(false)
//     }

//     return (
//         <>
//             <div className='headerWrapper' ref={headerRef}>
//                 <header>
//                     <div className='container-fluid'>
//                         <div className='row'>
//                             <div className='col-sm-2 part1 d-flex align-items-center'>
//                                 {/* <Link to="/">
//                                     <img src={Logo} className='logo' />Logo
//                                     </Link> */}
//                                         <Link to="/" className="flex items-center space-x-2">
//       <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-800 via-green-600 to-lime-400 text-transparent bg-clip-text tracking-wider drop-shadow-md">
//         FarmsEasy
//       </h1>
//     </Link>
//                                 {
//                                     windowWidth < 992 &&
//                                     <div className='ml-auto d-flex align-items-center'>


//                                         <div className='navbarToggle mr-0' onClick={openSearch}><SearchIcon /></div>
//                                         <ul className='list list-inline mb-0 headerTabs pl-0 mr-4'>

//                                             <li className='list-inline-item'>
//                                                 <span>
//                                                     <Link to='/cart'> <img src={IconCart} />
//                                                         <span className='badge bg-success rounded-circle'>
//                                                         </span>
//                                                     </Link>
//                                                 </span>
//                                             </li>


//                                         </ul>
//                                         <div className='navbarToggle mr-2' onClick={openNav}><MenuIcon /></div>
//                                             <div className='myAccDrop' onClick={() => setisOpenAccDropDown(!isOpenAccDropDown)}><PersonOutlineOutlinedIcon /></div>

//                                     </div>
//                                 }

//                             </div>

//                             {/*headerSearch start here */}
//                             <div className='col-sm-5 part2'>
//                                 <div className={`headerSearch d-flex align-items-center ${isopenSearch === true ? 'open' : ''}`}>



//                                     {
//                                         windowWidth < 992 && <div className="closeSearch" onClick={closeSearch}><ArrowBackIosIcon /></div>
//                                     }
//                                     <Select data={categories} placeholder={'All Categories'} icon={false} />


//                                     <div className='search'>
//                                         <input type='text' placeholder='Search for items...' ref={searchInput} />
//                                         <SearchIcon className="searchIcon cursor" />
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*headerSearch start here */}


//                             <div className='col-sm-5 d-flex align-items-center part3 res-hide'>
//                                 <div className='ml-auto d-flex align-items-center'>

//                                     <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
//                                         <ul className='list list-inline mb-0 headerTabs'>
//                                             <li className='list-inline-item'>
//                                                 <span>
//                                                     <img src={IconHeart} />
//                                                     <span className='badge bg-success rounded-circle'>3</span>
//                                                     Wishlist
//                                                 </span>
//                                             </li>
//                                             <li className='list-inline-item'>
//                                                 <span>
//                                                     <Link to='/cart'> <img src={IconCart} />
//                                                         <span className='badge bg-success rounded-circle'>
//                                                             0
//                                                         </span>
//                                                         Cart</Link>
//                                                 </span>
//                                             </li>




//                                                     <li className='list-inline-item'>
//                                                         <Link to={'/signIn'}>
//                                                             <Button className="btn btn-g">Sign In</Button>
//                                                         </Link>
//                                                     </li>
//                                                     <li className='list-inline-item'>
//                                                         <Link to={'/ConnectWithUsForm'}>
//                                                             <Button className="btn btn-g">Connect with us</Button>
//                                                         </Link>
//                                                     </li>



//                                         </ul>
//                                     </ClickAwayListener>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                 </header>


//                 <Nav data={props.data} openNav={isOpenNav} closeNav={closeNav} />
//             </div>

//             <div className='afterHeader'></div>
//             {
//                 isOpenAccDropDown !== false &&
//                 <>
//                 <div className='navbarOverlay' onClick={closeNav}></div>
//                 <ul className='dropdownMenu dropdownMenuAcc' onClick={closeNav}>
//                     <li><Button className='align-items-center'><Link to=""><Person2OutlinedIcon /> My Account</Link></Button></li>
//                     <li><Button className='align-items-center'><Link to=""> <img src={IconCompare} />Compare</Link></Button></li>
//                     <li><Button className='align-items-center'><Link to=""> <img src={IconCart} />Cart</Link></Button></li>
//                     <li><Button><Link to=""><LocationOnOutlinedIcon /> Order Tracking</Link></Button></li>
//                     <li><Button><Link to=""><FavoriteBorderOutlinedIcon /> My Wishlist</Link></Button></li>
//                     <li><Button><Link to=""><SettingsOutlinedIcon /> Setting</Link></Button></li>
//                     <li><Button ><Link to=""><LogoutOutlinedIcon /> Sign out</Link></Button></li>
//                 </ul>
//                 </>
//             }

//         </>
//     )
// }

// export default Header;





/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import IconCart from '../../assets/images/icon-cart.svg';
import IconHeart from '../../assets/images/icon-heart.svg';
import Button from '@mui/material/Button';
import Select from '../selectDrop/select';
import Nav from './nav/Nav';
import { MyContext } from '../../App';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Header = (props) => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenAccDropDown, setisOpenAccDropDown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isopenSearch, setOpenSearch] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const headerRef = useRef();
  const searchInput = useRef();

  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [categories, setcategories] = useState([
    'Milks and Dairies', 'Wines & Drinks', 'Clothing & beauty', 'Fresh Seafood',
    'Pet Foods & Toy', 'Fast food', 'Baking material', 'Vegetables',
    'Fresh Fruit', 'Bread and Juice', 'Milks and Dairies', 'Wines & Drinks',
    'Clothing & beauty', 'Fresh Seafood'
  ]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add('top-[-126px]');
      } else {
        headerRef.current.classList.remove('top-[-126px]');
      }
    });
  }, []);

  const openSearch = () => {
    setOpenSearch(true);
    searchInput.current.focus();
  };

  const closeSearch = () => {
    setOpenSearch(false);
    searchInput.current.blur();
    searchInput.current.value = "";
  };

  const openNav = () => {
    setIsOpenNav(true);
    context.setIsopenNavigation(true);
  };

  const closeNav = () => {
    setIsOpenNav(false);
    setisOpenAccDropDown(false);
    context.setIsopenNavigation(false);
  };

  const handleSignOut = () => {
    if (context && context.signOut) {
      context.signOut();
      setisOpenAccDropDown(false);
      navigate('/signIn');
    }
  };

  return (
    <>
      <div className="w-full transition-all duration-300 ease-in-out bg-white fixed top-0 left-0 z-[1000]" ref={headerRef}>
        <header className="py-8">
          <div className="container-fluid">
            <div className="row">
              {/* Logo and Mobile */}
              <div className="col-sm-2 flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-800 via-green-600 to-lime-400 text-transparent bg-clip-text tracking-wider drop-shadow-md">
                    FarmsEasy
                  </h1>
                </Link>
                {windowWidth < 992 && (
                  <div className="ml-auto flex items-center">
                    <div className="navbarToggle mr-0 cursor-pointer" onClick={openSearch}><SearchIcon /></div>
                    <ul className="list list-inline mb-0 headerTabs pl-0 mr-4">
                      <li className="list-inline-item">
                        <Link to='/cart'>
                          <img src={IconCart} />
                          <span className="absolute top-[-16px] left-[10px] w-[28px] h-[28px] bg-green-600 text-white text-xs flex items-center justify-center rounded-full">0</span>
                        </Link>
                      </li>
                    </ul>
                    <div className="navbarToggle mr-2 cursor-pointer" onClick={openNav}><MenuIcon /></div>
                    {context.isLogin ? (
                      <div className="cursor-pointer" onClick={() => setisOpenAccDropDown(!isOpenAccDropDown)}><PersonOutlineOutlinedIcon /></div>
                    ) : (
                      <Link to="/signIn"><Button className="btn btn-g">Sign In</Button></Link>
                    )}
                  </div>
                )}
              </div>

              {/* Search Bar */}
              <div className="col-sm-5 flex items-center justify-center">
                <div className={`headerSearch d-flex align-items-center w-full ${isopenSearch ? 'open' : ''}`} style={{ minWidth: 0 }}>
                  {windowWidth < 992 && (
                    <div className="closeSearch cursor-pointer mr-2" onClick={closeSearch}><ArrowBackIosIcon /></div>
                  )}
                  <div className="selectDropWrapper" style={{ minWidth: windowWidth < 992 ? '120px' : '180px', width: windowWidth < 992 ? '30%' : '23%' }}>
                    <select className="w-full h-[50px] border-none outline-none text-base font-semibold bg-transparent">
                      <option value="">All Categories</option>
                      {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="search flex-1 pl-5 relative" style={{ width: windowWidth < 992 ? '70%' : '77%' }}>
                    <input type="text" placeholder="Search for items..." ref={searchInput} className="w-full h-[50px] outline-none text-lg border-none" />
                    <SearchIcon className="absolute top-3 right-0 opacity-50 text-2xl cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Tabs & User */}
              <div className="col-sm-5 hidden md:flex items-center">
                <div className="ml-auto flex items-center">
                  <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                    <ul className="flex space-x-6">
                      <li className="relative">
                        <span className="text-xl cursor-pointer"><img src={IconHeart} className="mr-2 inline" /> <span className="absolute top-[-16px] left-[10px] w-[28px] h-[28px] bg-green-600 text-white text-xs flex items-center justify-center rounded-full">3</span> Wishlist</span>
                      </li>
                      <li className="relative">
                        <Link to='/cart' className="text-xl cursor-pointer">
                          <img src={IconCart} className="mr-2 inline" />
                          <span className="absolute top-[-16px] left-[10px] w-[28px] h-[28px] bg-green-600 text-white text-xs flex items-center justify-center rounded-full">0</span>
                          Cart
                        </Link>
                      </li>
                      {context.isLogin ? (
                        <>
                          <li>
                            <Link to='/ConnectWithUsForm'><Button className="btn btn-g">Connect with us</Button></Link>
                          </li>
                          <li>
                            <div className="cursor-pointer" onClick={() => setisOpenAccDropDown(!isOpenAccDropDown)}><PersonOutlineOutlinedIcon /></div>
                          </li>
                        </>
                      ) : (
                        <>
                          <li><Link to='/signIn'><Button className="btn btn-g">Sign In</Button></Link></li>
                          <li><Link to='/ConnectWithUsForm'><Button className="btn btn-g">Connect with us</Button></Link></li>
                        </>
                      )}
                    </ul>
                  </ClickAwayListener>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Nav data={props.data} openNav={isOpenNav} closeNav={closeNav} />
      </div>

      <div className={windowWidth < 992 ? 'mt-[120px]' : 'mt-[210px]'}></div>
      {context.isLogin && isOpenAccDropDown && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={closeNav}></div>
          <div className="above-navbar absolute right-0 top-[60px] w-[260px] bg-white shadow-lg rounded-lg z-[100]">
            <ul className="py-2">
              <li className="px-5 py-2 font-bold text-lg flex items-center border-b"><PersonOutlineOutlinedIcon className="mr-2" /> Account</li>
              <li><Button className="w-full justify-start text-base py-3 flex items-center" component={Link} to="/supercoin"><span className="mr-2">⚡</span> SuperCoin Zone</Button></li>
              <li><Button className="w-full justify-start text-base py-3 flex items-center" component={Link} to="/plus"><span className="mr-2">★</span> Flipkart Plus Zone</Button></li>
              <li><Button className="w-full justify-start text-base py-3 flex items-center" component={Link} to="/orders"><span className="mr-2">📦</span> Orders</Button></li>
              <li><Button className="w-full justify-start text-base py-3 flex items-center" component={Link} to="/wishlist"><FavoriteBorderOutlinedIcon className="mr-2" /> Wishlist</Button></li>
              <li><Button className="w-full justify-start text-base py-3 flex items-center" component={Link} to="/coupons"><span className="mr-2">🏷️</span> Coupons</Button></li>
              <li><Button className="w-full justify-start text-base py-3 flex items-center" component={Link} to="/gift-cards"><span className="mr-2">🎁</span> Gift Cards</Button></li>
              <li><Button className="w-full justify-start text-base py-3 flex items-center" component={Link} to="/notifications"><span className="mr-2">🔔</span> Notifications</Button></li>
              <li><Button onClick={handleSignOut} className="w-full justify-start text-base py-3 flex items-center"><LogoutOutlinedIcon className="mr-2" /> Logout</Button></li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
