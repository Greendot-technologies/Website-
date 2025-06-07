

// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import bannerMenu from '../../../assets/images/banner-menu.png';
// import { MyContext } from '../../../App';
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// import GridViewIcon from '@mui/icons-material/GridView';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const Nav = (props) => {
//   const manualNavData = [
//     {
//       id: 1,
//       cat_name: 'Herbicides',
//       items: [
//         { cat_name: 'Pre-emergent' },
//         { cat_name: 'Post-emergent' },
//         { cat_name: 'Selective' },
//         { cat_name: 'Non-selective' },
//       ],
//     },
//     {
//       id: 2,
//       cat_name: 'Fertilizers',
//       items: [
//         { cat_name: 'Organic' },
//         { cat_name: 'Chemical' },
//         { cat_name: 'Liquid' },
//         { cat_name: 'Granular' },
//       ],
//     },
//     {
//       id: 3,
//       cat_name: 'Pesticides',
//       items: [
//         { cat_name: 'Insecticides' },
//         { cat_name: 'Fungicides' },
//         { cat_name: 'Rodenticides' },
//         { cat_name: 'Bactericides' },
//       ],
//     },
//     {
//       id: 4,
//       cat_name: 'Seeds',
//       items: [
//         { cat_name: 'Vegetables' },
//         { cat_name: 'Fruits' },
//         { cat_name: 'Cereals' },
//         { cat_name: 'Pulses' },
//       ],
//     },
//     {
//       id: 5,
//       cat_name: 'PGR',
//       items: [
//         { cat_name: 'Growth Promoters' },
//         { cat_name: 'Growth Retardants' },
//         { cat_name: 'Root Enhancers' },
//         { cat_name: 'Flowering Boosters' },
//       ],
//     },
//     {
//       id: 6,
//       cat_name: 'Equipment',
//       items: [
//         { cat_name: 'Sprayers' },
//         { cat_name: 'Harvesters' },
//         { cat_name: 'Seeders' },
//         { cat_name: 'Irrigation Tools' },
//       ],
//     },
//     {
//       id: 7,
//       cat_name: 'Other',
//       items: [
//         { cat_name: 'Soil Test Kits' },
//         { cat_name: 'Pots & Planters' },
//         { cat_name: 'Compost' },
//         { cat_name: 'Mulching Sheets' },
//       ],
//     },
//   ];

//   const [navData, setNavData] = useState(manualNavData);
//   const [isOpenNav, setIsOpenNav] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [openDropdownMenu, setDropdownMenu] = useState(false);
//   const [openDropdownMenuIndex, setDropdownMenuIndex] = useState(null);
//   const [openMegaMenu, setOpenMegaMenu] = useState(false);

//   const context = useContext(MyContext);

//   useEffect(() => {
//     setIsOpenNav(props.openNav);
//   }, [props.openNav]);

//   const closeNav = () => {
//     props.closeNav();
//   };

//   const openDropdownFun = (index) => {
//     if (openDropdownMenuIndex === index) {
//       setDropdownMenu(!openDropdownMenu);
//     } else {
//       setDropdownMenu(true);
//     }
//     setDropdownMenuIndex(index);
//   };

//   return (
//     <>
//       {isOpenNav && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={props.closeNav}
//         ></div>
//       )}

//       <div
//         className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform transform ${
//           isOpenNav ? 'translate-x-0' : '-translate-x-full'
//         } lg:translate-x-0 lg:relative lg:flex`}
//       >
//         <div className="w-full px-4 py-3">
//           <div className="flex flex-wrap items-center justify-between">
//             {/* Left Button */}
//             <div className="hidden lg:flex items-center space-x-2">
//               <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-1">
//                 <GridViewIcon />
//                 <span>Browse All Categories</span>
//                 <KeyboardArrowDownIcon />
//               </button>
//             </div>

//             {/* Center Nav Links */}
//             <div className="w-full lg:w-auto mt-4 lg:mt-0 flex-1">
//               <nav className={isOpenNav ? 'block' : 'hidden lg:block'}>
//                 <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-4">
//                   <li>
//                     <Link to="/" onClick={props.closeNav} className="font-bold text-gray-900 hover:text-green-600">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" onClick={props.closeNav} className="font-bold text-gray-900 hover:text-green-600">
//                       About
//                     </Link>
//                   </li>

//                   {navData.slice(0, 4).map((item, index) => (
//                     <li className="relative font-bold text-gray-900" key={item.id}>
//                       <button
//                         onClick={() => openDropdownFun(index)}
//                         className="flex items-center text-gray-700 hover:text-green-600"
//                       >
//                         <a
//                           href={windowWidth > 992 ? `/cat/${item.cat_name.toLowerCase()}` : '#'}
//                           onClick={() => sessionStorage.setItem('cat', item.cat_name.toLowerCase())}
//                         >
//                           {item.cat_name}
//                         </a>
//                         <KeyboardArrowDownIcon
//                           className={`ml-1 transition-transform ${
//                             openDropdownMenu && openDropdownMenuIndex === index ? 'rotate-180' : ''
//                           }`}
//                         />
//                       </button>
//                       {item.items.length > 0 && (
//                         <div
//                           className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 ${
//                             openDropdownMenu && openDropdownMenuIndex === index ? 'block' : 'hidden'
//                           }`}
//                         >
//                           <ul className="p-2 space-y-1">
//                             {item.items.map((item_, idx) => (
//                               <li key={idx}>
//                                 <a
//                                   href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}
//                                   onClick={() => {
//                                     sessionStorage.setItem('cat', item.cat_name.toLowerCase());
//                                     props.closeNav();
//                                   }}
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                 >
//                                   {item_.cat_name}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </li>
//                   ))}

//                   {/* Mega Menu - More */}
//                   <li className="relative">
//                     <button
//                       onClick={() => setOpenMegaMenu(!openMegaMenu)}
//                       className="flex items-center font-bold text-gray-900 hover:text-green-600"
//                     >
//                       More
//                       <KeyboardArrowDownIcon className={`ml-1 transition-transform ${openMegaMenu ? 'rotate-180' : ''}`} />
//                     </button>
//                     <div
//                       className={`absolute top-full left-[-150px] lg:left-[50%] lg:-translate-x-[40%] mt-2 w-[90vw] lg:w-[80vw] bg-white shadow-xl z-50 rounded-md max-h-[60vh] overflow-y-auto ${
//                         openMegaMenu ? 'block' : 'hidden'
//                       }`}
//                     >
//                       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
//                         {navData.slice(4).map((item) => (
//                           <div key={item.id}>
//                             <a href={`/cat/${item.cat_name.toLowerCase()}`} className="text-green-600 font-semibold">
//                               {item.cat_name}
//                             </a>
//                             <ul className="mt-2 space-y-1">
//                               {item.items.map((item_, idx) => (
//                                 <li key={idx}>
//                                   <Link
//                                     onClick={props.closeNav}
//                                     to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}
//                                     className="text-gray-700 text-sm hover:underline"
//                                   >
//                                     {item_.cat_name}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                         <div className="hidden lg:block">
//                           <img src={bannerMenu} alt="Banner" className="w-full h-auto rounded" />
//                         </div>
//                       </div>
//                     </div>
//                   </li>

//                   <li>
//                     <Link to="#" className="font-bold text-gray-900 hover:text-green-600">
//                       Contact
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             {/* Right Contact */}
//             <div className="hidden lg:flex items-center space-x-2">
//               <AddIcCallIcon className="text-green-600" />
//               <div>
//                 <h3 className="text-green-600 text-lg font-semibold">1900 - 888</h3>
//                 <p className="text-sm font-bold text-gray-500">24/7 Support Center</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;




// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import bannerMenu from '../../../assets/images/banner-menu.png';
// import { MyContext } from '../../../App';
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// import GridViewIcon from '@mui/icons-material/GridView';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const Nav = (props) => {
//   const manualNavData = [
//     {
//       id: 1,
//       cat_name: 'Herbicides',
//       items: [
//         { cat_name: 'Pre-emergent' },
//         { cat_name: 'Post-emergent' },
//         { cat_name: 'Selective' },
//         { cat_name: 'Non-selective' },
//       ],
//     },
//     {
//       id: 2,
//       cat_name: 'Fertilizers',
//       items: [
//         { cat_name: 'Organic' },
//         { cat_name: 'Chemical' },
//         { cat_name: 'Liquid' },
//         { cat_name: 'Granular' },
//       ],
//     },
//     {
//       id: 3,
//       cat_name: 'Pesticides',
//       items: [
//         { cat_name: 'Insecticides' },
//         { cat_name: 'Fungicides' },
//         { cat_name: 'Rodenticides' },
//         { cat_name: 'Bactericides' },
//       ],
//     },
//     {
//       id: 4,
//       cat_name: 'Seeds',
//       items: [
//         { cat_name: 'Vegetables' },
//         { cat_name: 'Fruits' },
//         { cat_name: 'Cereals' },
//         { cat_name: 'Pulses' },
//       ],
//     },
//     {
//       id: 5,
//       cat_name: 'PGR',
//       items: [
//         { cat_name: 'Growth Promoters' },
//         { cat_name: 'Growth Retardants' },
//         { cat_name: 'Root Enhancers' },
//         { cat_name: 'Flowering Boosters' },
//       ],
//     },
//     {
//       id: 6,
//       cat_name: 'Equipment',
//       items: [
//         { cat_name: 'Sprayers' },
//         { cat_name: 'Harvesters' },
//         { cat_name: 'Seeders' },
//         { cat_name: 'Irrigation Tools' },
//       ],
//     },
//     {
//       id: 7,
//       cat_name: 'Other',
//       items: [
//         { cat_name: 'Soil Test Kits' },
//         { cat_name: 'Pots & Planters' },
//         { cat_name: 'Compost' },
//         { cat_name: 'Mulching Sheets' },
//       ],
//     },
//   ];

//   const [navData, setNavData] = useState(manualNavData);
//   const [isOpenNav, setIsOpenNav] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [openDropdownMenu, setDropdownMenu] = useState(false);
//   const [openDropdownMenuIndex, setDropdownMenuIndex] = useState(null);
//   const [openMegaMenu, setOpenMegaMenu] = useState(false);

//   const context = useContext(MyContext);

//   useEffect(() => {
//     setIsOpenNav(props.openNav);
//   }, [props.openNav]);

//   const closeNav = () => {
//     props.closeNav();
//   };

//   const openDropdownFun = (index) => {
//     if (openDropdownMenuIndex === index) {
//       setDropdownMenu(!openDropdownMenu);
//     } else {
//       setDropdownMenu(true);
//     }
//     setDropdownMenuIndex(index);
//   };

//   return (
//     <>
//       {isOpenNav && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={props.closeNav}
//         ></div>
//       )}

//       <div
//         className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform transform ${
//           isOpenNav ? 'translate-x-0' : '-translate-x-full'
//         } lg:translate-x-0 lg:relative lg:flex`}
//       >
//         <div className="w-full px-4 py-3">
//           <div className="flex flex-wrap items-center justify-between">
//             {/* Left Button */}
//             <div className="hidden lg:flex items-center space-x-2">
//               <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-1">
//                 <GridViewIcon />
//                 <span>Browse All Categories</span>
//                 <KeyboardArrowDownIcon />
//               </button>
//             </div>

//             {/* Center Nav Links */}
//             <div className="w-full lg:w-auto mt-4 lg:mt-0 flex-1">
//               <nav className={isOpenNav ? 'block' : 'hidden lg:block'}>
//                 <ul className="pl-20 flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-14">
//                   <li>
//                     <Link to="/" onClick={props.closeNav} className="font-bold text-gray-900 hover:text-green-600">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" onClick={props.closeNav} className="font-bold text-gray-900 hover:text-green-600">
//                       About
//                     </Link>
//                   </li>

//                   {navData.slice(0, 4).map((item, index) => (
//                     <li className="relative font-bold text-gray-900" key={item.id}>
//                       <button
//                         onClick={() => openDropdownFun(index)}
//                         className="flex items-center text-gray-700 hover:text-green-600"
//                       >
//                         <a
//                           href={windowWidth > 992 ? `/cat/${item.cat_name.toLowerCase()}` : '#'}
//                           onClick={() => sessionStorage.setItem('cat', item.cat_name.toLowerCase())}
//                         >
//                           {item.cat_name}
//                         </a>
//                         <KeyboardArrowDownIcon
//                           className={`ml-1 transition-transform ${
//                             openDropdownMenu && openDropdownMenuIndex === index ? 'rotate-180' : ''
//                           }`}
//                         />
//                       </button>
//                       {item.items.length > 0 && (
//                         <div
//                           className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 ${
//                             openDropdownMenu && openDropdownMenuIndex === index ? 'block' : 'hidden'
//                           }`}
//                         >
//                           <ul className="p-2 space-y-1">
//                             {item.items.map((item_, idx) => (
//                               <li key={idx}>
//                                 <a
//                                   href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}
//                                   onClick={() => {
//                                     sessionStorage.setItem('cat', item.cat_name.toLowerCase());
//                                     props.closeNav();
//                                   }}
//                                   className="block px-4 py-2 text-base lg:text-[20px] text-gray-700 hover:bg-gray-100"
//                                 >
//                                   {item_.cat_name}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </li>
//                   ))}

//                   {/* Mega Menu - More */}
//                   <li className="relative">
//                     <button
//                       onClick={() => setOpenMegaMenu(!openMegaMenu)}
//                       className="flex items-center font-bold text-gray-900 hover:text-green-600"
//                     >
//                       More
//                       <KeyboardArrowDownIcon className={`ml-1 transition-transform ${openMegaMenu ? 'rotate-180' : ''}`} />
//                     </button>
//                     <div
//                       className={`absolute top-full left-[-150px] lg:left-[50%] lg:-translate-x-[40%] mt-2 w-[90vw] lg:w-[80vw] bg-white shadow-xl z-50 rounded-md max-h-[60vh] overflow-y-auto ${
//                         openMegaMenu ? 'block' : 'hidden'
//                       }`}
//                     >
//                       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
//                         {navData.slice(4).map((item) => (
//                           <div key={item.id}>
//                             <a href={`/cat/${item.cat_name.toLowerCase()}`} className="text-green-600 font-semibold">
//                               {item.cat_name}
//                             </a>
//                             <ul className="mt-2 space-y-1">
//                               {item.items.map((item_, idx) => (
//                                 <li key={idx}>
//                                   <Link
//                                     onClick={props.closeNav}
//                                     to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}
//                                     className="text-gray-700 text-base lg:text-[20px] hover:underline"
//                                   >
//                                     {item_.cat_name}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                         <div className="hidden lg:block">
//                           <img src={bannerMenu} alt="Banner" className="w-full h-auto rounded" />
//                         </div>
//                       </div>
//                     </div>
//                   </li>

//                   <li>
//                     <Link to="#" className="font-bold text-gray-900 hover:text-green-600">
//                       Contact
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             {/* Right Contact */}
//             <div className="hidden lg:flex items-center space-x-2">
//               <AddIcCallIcon className="text-green-600" />
//               <div>
//                 <h3 className="text-green-600 text-lg font-semibold">1900 - 888</h3>
//                 <p className="text-sm font-bold text-gray-500">24/7 Support Center</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;




/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bannerMenu from '../../../assets/images/banner-menu.png';
import { MyContext } from '../../../App';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Nav = (props) => {
  const [navData, setNavData] = useState([]); // will store categories + subcategories nested
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openDropdownMenu, setDropdownMenu] = useState(false);
  const [openDropdownMenuIndex, setDropdownMenuIndex] = useState(null);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    setIsOpenNav(props.openNav);
  }, [props.openNav]);

  // Fetch categories and subcategories, then merge them
  useEffect(() => {
    const fetchNavData = async () => {
      try {
        // 1. Fetch categories
        const catRes = await axios.get('http://localhost:5000/api/category/categories');
        const categories = catRes.data.categories || [];

        // 2. Fetch approved subcategories
        const subcatRes = await axios.get('http://localhost:5000/api/user/approved');
        const subcategories = Array.isArray(subcatRes.data) ? subcatRes.data : [];

        // 3. Map subcategories to their categories
        const combinedNavData = categories.map((cat) => {
          return {
            id: cat.id,
            cat_name: cat.name_en || cat.name || 'Unnamed Category',
            items: subcategories
              .filter((sub) => sub.category_id === cat.id)
              .map((sub) => ({
                cat_name: sub.name_en || sub.name || 'Unnamed Subcategory',
                id: sub.id,
              })),
          };
        });

        setNavData(combinedNavData);
      } catch (error) {
        console.error('Error fetching navigation data:', error);
      }
    };

    fetchNavData();
  }, []);

  const closeNav = () => {
    props.closeNav();
  };

  const openDropdownFun = (index) => {
    if (openDropdownMenuIndex === index) {
      setDropdownMenu(!openDropdownMenu);
    } else {
      setDropdownMenu(true);
    }
    setDropdownMenuIndex(index);
  };

  return (
    <>
      {isOpenNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={props.closeNav}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform transform ${
          isOpenNav ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative lg:flex`}
      >
        <div className="w-full px-4 py-3">
          <div className="flex flex-wrap items-center justify-between">
            {/* Left Button */}
            <div className="hidden lg:flex items-center space-x-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-1">
                <GridViewIcon />
                <span>Browse All Categories</span>
                <KeyboardArrowDownIcon />
              </button>
            </div>

            {/* Center Nav Links */}
            <div className="w-full lg:w-auto mt-4 lg:mt-0 flex-1">
              <nav className={isOpenNav ? 'block' : 'hidden lg:block'}>
                <ul className="pl-20 flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-14">
                  <li>
                    <Link to="/" onClick={props.closeNav} className="font-bold text-gray-900 hover:text-green-600">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={props.closeNav} className="font-bold text-gray-900 hover:text-green-600">
                      About
                    </Link>
                  </li>

                  {navData.slice(0, 4).map((item, index) => (
                    <li className="relative font-bold text-gray-900" key={item.id}>
                      <button
                        onClick={() => openDropdownFun(index)}
                        className="flex items-center text-gray-700 hover:text-green-600"
                      >
                        <Link
                          to={windowWidth > 992 ? `/cat/${item.cat_name.toLowerCase()}` : '#'}
                          onClick={() => sessionStorage.setItem('cat', item.cat_name.toLowerCase())}
                        >
                          {item.cat_name}
                        </Link>
                        <KeyboardArrowDownIcon
                          className={`ml-1 transition-transform ${
                            openDropdownMenu && openDropdownMenuIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {item.items.length > 0 && (
                        <div
                          className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 ${
                            openDropdownMenu && openDropdownMenuIndex === index ? 'block' : 'hidden'
                          }`}
                        >
                          <ul className="p-2 space-y-1">
                            {item.items.map((item_, idx) => (
                              <li key={item_.id || idx}>
                                <Link
                                  to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}
                                  onClick={() => {
                                    sessionStorage.setItem('cat', item.cat_name.toLowerCase());
                                    props.closeNav();
                                  }}
                                  className="block px-4 py-2 text-base lg:text-[20px] text-gray-700 hover:bg-gray-100"
                                >
                                  {item_.cat_name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}

                  {/* Mega Menu - More */}
                  <li className="relative">
                    <button
                      onClick={() => setOpenMegaMenu(!openMegaMenu)}
                      className="flex items-center font-bold text-gray-900 hover:text-green-600"
                    >
                      More
                      <KeyboardArrowDownIcon className={`ml-1 transition-transform ${openMegaMenu ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      className={`absolute top-full left-[-150px] lg:left-[50%] lg:-translate-x-[40%] mt-2 w-[90vw] lg:w-[80vw] bg-white shadow-xl z-50 rounded-md max-h-[60vh] overflow-y-auto ${
                        openMegaMenu ? 'block' : 'hidden'
                      }`}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                        {navData.slice(4).map((item) => (
                          <div key={item.id}>
                            <Link to={`/cat/${item.cat_name.toLowerCase()}`} className="text-green-600 font-semibold">
                              {item.cat_name}
                            </Link>
                            <ul className="mt-2 space-y-1">
                              {item.items.map((item_, idx) => (
                                <li key={item_.id || idx}>
                                  <Link
                                    onClick={props.closeNav}
                                    to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}
                                    className="text-gray-700 text-base lg:text-[20px] hover:underline"
                                  >
                                    {item_.cat_name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {/* <div className="hidden lg:block">
                          <img src={bannerMenu} alt="Banner" className="w-full h-auto rounded" />
                        </div> */}
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link to="#" className="font-bold text-gray-900 hover:text-green-600">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right Contact */}
            <div className="hidden lg:flex items-center space-x-2">
              <AddIcCallIcon className="text-green-600" />
              <div>
                <h3 className="text-green-600 text-lg font-semibold">1900 - 888</h3>
                <p className="text-sm font-bold text-gray-500">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
