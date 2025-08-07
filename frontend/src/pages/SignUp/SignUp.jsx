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


// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';



// const SignUp = () => {

//     const [showPassword, setShowPassword] = useState(false);
//     const [showPassword1, setShowPassword1] = useState(false);

//     const [showLoader, setShowLoader] = useState(false);


//     const [formFields, setFormFields] = useState({
//         email: '',
//         password: '',
//         conformPassword: '',
//     })



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
//                 <div className="breadcrumbWrapper res-hide">
//                     <div className="container-fluid">
//                         <ul className="breadcrumb breadcrumb2 mb-0">
//                             <li><Link to="/">Home</Link>  </li>
//                             <li>SignUp</li>
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

//                         <h3>SignUp</h3>
//                         <form className='mt-4'>
//                             <div className='form-group mb-4 w-100'>
//                                 <TextField id="email" type="email" name='email' label="Email" className='w-100' onChange={onChangeField}  value={formFields.email}/>
//                             </div>
//                             <div className='form-group mb-4 w-100'>
//                                 <div className='position-relative'>
//                                     <TextField id="password" type={showPassword === false ? 'password' : 'text'} name='password' label="Password" className='w-100' onChange={onChangeField} 
//                                      value={formFields.password}/>
//                                     <Button className='icon' onClick={() => setShowPassword(!showPassword)}>
//                                         {
//                                             showPassword === false ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />
//                                         }

//                                     </Button>
//                                 </div>

//                             </div>

//                             <div className='form-group mb-4 w-100'>
//                                 <div className='position-relative'>
//                                     <TextField id="conformPassword" type={showPassword1 === false ? 'password' : 'text'} name='conformPassword' label="Confirm Password" className='w-100' onChange={onChangeField}  value={formFields.conformPassword}/>
//                                     <Button className='icon' onClick={() => setShowPassword1(!showPassword1)}>
//                                         {
//                                             showPassword1 === false ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />
//                                         }

//                                     </Button>
//                                 </div>

//                             </div>


//                             <div className='form-group mt-5 mb-4 w-100'>
//                                 <Button className='btn btn-g btn-lg w-100'>Sign Up</Button>
//                             </div>

//                             <p className='text-center'>Already have an account
//                                 <b> <Link to="/signIn">Sign In</Link>
//                                 </b>
//                             </p>



//                         </form>
//                     </div>
//                 </div>


//             </section>
//         </>
//     )
// }

// export default SignUp;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button, Backdrop, CircularProgress } from '@mui/material';
import axios from 'axios';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [formFields, setFormFields] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onChangeField = (e) => {
        const { name, value } = e.target;
        setFormFields((prev) => ({ ...prev, [name]: value }));
        setError(''); // Clear error on input change
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setShowLoader(true);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                username: formFields.username,
                email: formFields.email,
                password: formFields.password,
            });
            setShowLoader(false);
            navigate('/signIn'); // Redirect to sign-in page on successful registration
        } catch (error) {
            setShowLoader(false);
            if (error.response && error.response.status === 400) {
                setError(error.response.data.message || 'Registration failed. Please check your inputs.');
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <section className="signIn mb-5">
            <div className="breadcrumbWrapper res-hide">
                <div className="container-fluid">
                    <ul className="breadcrumb breadcrumb2 mb-0">
                        <li><Link to="/">Home</Link></li>
                        <li>SignUp</li>
                    </ul>
                </div>
            </div>

            <div className="loginWrapper">
                <div className="card shadow">
                    <Backdrop
                        sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={showLoader}
                        className="formLoader"
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>

                    <h3>SignUp</h3>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <form className="mt-4" onSubmit={handleSignUp}>
                        <div className="form-group mb-4 w-100">
                            <TextField
                                id="username"
                                type="text"
                                name="username"
                                label="Username"
                                className="w-100"
                                onChange={onChangeField}
                                value={formFields.username}
                            />
                        </div>
                        <div className="form-group mb-4 w-100">
                            <TextField
                                id="email"
                                type="email"
                                name="email"
                                label="Email"
                                className="w-100"
                                onChange={onChangeField}
                                value={formFields.email}
                            />
                        </div>
                        <div className="form-group mb-4 w-100">
                            <div className="position-relative">
                                <TextField
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    label="Password"
                                    className="w-100"
                                    onChange={onChangeField}
                                    value={formFields.password}
                                />
                                <Button
                                    className="icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                </Button>
                            </div>
                        </div>

                        <div className="form-group mt-5 mb-4 w-100">
                            <Button type="submit" className="btn btn-g btn-lg w-100">
                                Sign Up
                            </Button>
                        </div>

                        <p className="text-center">
                            Already have an account?
                            <b>
                                <Link to="/signIn">Sign In</Link>
                            </b>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;