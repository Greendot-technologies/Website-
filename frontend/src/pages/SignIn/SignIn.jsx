// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import { Button } from '@mui/material';
// import { useState } from 'react';
// import GoogleImg from '../../assets/images/google.png';
// // import { initializeApp } from "firebase/app";
// // import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup } from "firebase/auth";
// // import { app } from '../../firebase';

// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';

// import { useNavigate } from 'react-router-dom';

// import { useContext } from 'react';

// import { MyContext } from '../../App';


// const SignIn = () => {

//     const [showPassword, setShowPassword] = useState(false);

//     const [showLoader, setShowLoader] = useState(false);


//     const [formFields, setFormFields] = useState({
//         email: '',
//         password: '',
//     })

//     const context = useContext(MyContext);



//     const onChangeField = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;

//         setFormFields(() => ({
//             ...formFields,
//             [name]: value,
//         }))

//     }



//     return (
//         <>
//             <section className='signIn mb-5'>
//                 <div className="breadcrumbWrapper">
//                     <div className="container-fluid">
//                         <ul className="breadcrumb breadcrumb2 mb-0">
//                             <li><Link to="/">Home</Link>  </li>
//                             <li>Sign In</li>
//                         </ul>
//                     </div>
//                 </div>



//                 <div className='loginWrapper'>
//                     <div className='card shadow'>
//                         <Backdrop
//                             sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                             open={showLoader}
//                             className="formLoader"
//                         >
//                             <CircularProgress color="inherit" />
//                         </Backdrop>

//                         <h3>Sign In</h3>
//                         <form className='mt-4'>
//                             <div className='form-group mb-4 w-100'>
//                                 <TextField id="email" type="email" name='email' label="Email" className='w-100'
//                                     onChange={onChangeField} value={formFields.email} />
//                             </div>
//                             <div className='form-group mb-4 w-100'>
//                                 <div className='position-relative'>
//                                     <TextField id="password" type={showPassword === false ? 'password' : 'text'} name='password' label="Password" className='w-100'
//                                         onChange={onChangeField} value={formFields.password} />
//                                     <Button className='icon' onClick={() => setShowPassword(!showPassword)}>
//                                         {
//                                             showPassword === false ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />
//                                         }

//                                     </Button>
//                                 </div>
//                             </div>



//                             <div className='form-group mt-5 mb-4 w-100'>
//                                 <Button className='btn btn-g btn-lg w-100'>Sign In</Button>
//                             </div>


//                             <div className='form-group mt-5 mb-4 w-100 signInOr'>
//                                 <p className='text-center'>OR</p>
//                                 <Button className='w-100' variant="outlined"><img src={GoogleImg} />
//                                     Sign In with Google</Button>
//                             </div>


//                             <p className='text-center'>Not have an account
//                                 <b> <Link to="/signup">Sign Up</Link>
//                                 </b>
//                             </p>

//                         </form>
//                     </div>
//                 </div>


//             </section>
//         </>
//     )
// }

// export default SignIn;




/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button, Backdrop, CircularProgress } from '@mui/material';
import GoogleImg from '../../assets/images/google.png';
import { MyContext } from '../../App';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [formFields, setFormFields] = useState({ email: '', password: '' });
    const context = useContext(MyContext);

    const onChangeField = (e) => {
        const { name, value } = e.target;
        setFormFields((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <ul className="flex space-x-2 text-sm text-gray-600 mb-6">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li>/</li>
                    <li>Sign In</li>
                </ul>

                <div className="relative">
                    <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl mx-auto p-10 relative z-10">
                        <Backdrop
                            sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={showLoader}
                            className="absolute inset-0"
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>

                        <h3 className="text-3xl font-semibold mb-6 text-center">Sign In</h3>

                        <form className="space-y-6">
                            <div className="w-full">
                                <TextField
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    className="w-full"
                                    value={formFields.email}
                                    onChange={onChangeField}
                                />
                            </div>

                            <div className="w-full relative">
                                <TextField
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    label="Password"
                                    variant="outlined"
                                    className="w-full"
                                    value={formFields.password}
                                    onChange={onChangeField}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-2.5 right-2 text-gray-500 hover:text-black"
                                >
                                    {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                </button>
                            </div>

                            <div className="pt-4">
                                <Button
                                    className="w-full !bg-black !text-white !py-3 !text-lg hover:!bg-gray-800"
                                >
                                    Sign In
                                </Button>
                            </div>

                            <div className="relative mt-6 text-center text-gray-500">
                                <span className="bg-white px-2 z-10 relative">OR</span>
                                <hr className="absolute top-3 w-full border-gray-300 z-0" />
                            </div>

                            <div>
                                <Button
                                    variant="outlined"
                                    className="w-full !py-3 !text-lg !text-black !border-gray-300 hover:!bg-gray-50"
                                >
                                    <img src={GoogleImg} alt="Google" className="w-6 h-6 mr-3" />
                                    Sign In with Google
                                </Button>
                            </div>

                            <p className="text-center mt-6 text-gray-700">
                                Don't have an account?
                                <Link to="/signup" className="ml-1 font-bold text-black hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
