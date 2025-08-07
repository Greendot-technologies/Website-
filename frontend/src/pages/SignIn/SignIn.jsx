
// /* eslint-disable no-unused-vars */
// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import { Button, Backdrop, CircularProgress } from '@mui/material';
// import GoogleImg from '../../assets/images/google.png';
// import { MyContext } from '../../App';

// const SignIn = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [showLoader, setShowLoader] = useState(false);
//     const [formFields, setFormFields] = useState({ email: '', password: '' });
//     const context = useContext(MyContext);

//     const onChangeField = (e) => {
//         const { name, value } = e.target;
//         setFormFields((prev) => ({ ...prev, [name]: value }));
//     };

//     return (
//         <section className="bg-gray-100 py-20">
//             <div className="max-w-7xl mx-auto px-4">
//                 <ul className="flex space-x-2 text-sm text-gray-600 mb-6">
//                     <li><Link to="/" className="hover:underline">Home</Link></li>
//                     <li>/</li>
//                     <li>Sign In</li>
//                 </ul>

//                 <div className="relative">
//                     <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl mx-auto p-10 relative z-10">
//                         <Backdrop
//                             sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                             open={showLoader}
//                             className="absolute inset-0"
//                         >
//                             <CircularProgress color="inherit" />
//                         </Backdrop>

//                         <h3 className="text-3xl font-semibold mb-6 text-center">Sign In</h3>

//                         <form className="space-y-6">
//                             <div className="w-full">
//                                 <TextField
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     label="Email"
//                                     variant="outlined"
//                                     className="w-full"
//                                     value={formFields.email}
//                                     onChange={onChangeField}
//                                 />
//                             </div>

//                             <div className="w-full relative">
//                                 <TextField
//                                     id="password"
//                                     name="password"
//                                     type={showPassword ? 'text' : 'password'}
//                                     label="Password"
//                                     variant="outlined"
//                                     className="w-full"
//                                     value={formFields.password}
//                                     onChange={onChangeField}
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     className="absolute top-2.5 right-2 text-gray-500 hover:text-black"
//                                 >
//                                     {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
//                                 </button>
//                             </div>

//                             <div className="pt-4">
//                                 <Button
//                                     className="w-full !bg-black !text-white !py-3 !text-lg hover:!bg-gray-800"
//                                 >
//                                     Sign In
//                                 </Button>
//                             </div>

//                             <div className="relative mt-6 text-center text-gray-500">
//                                 <span className="bg-white px-2 z-10 relative">OR</span>
//                                 <hr className="absolute top-3 w-full border-gray-300 z-0" />
//                             </div>

//                             <div>
//                                 <Button
//                                     variant="outlined"
//                                     className="w-full !py-3 !text-lg !text-black !border-gray-300 hover:!bg-gray-50"
//                                 >
//                                     <img src={GoogleImg} alt="Google" className="w-6 h-6 mr-3" />
//                                     Sign In with Google
//                                 </Button>
//                             </div>

//                             <p className="text-center mt-6 text-gray-700">
//                                 Don't have an account?
//                                 <Link to="/signup" className="ml-1 font-bold text-black hover:underline">
//                                     Sign Up
//                                 </Link>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SignIn;


/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button, Backdrop, CircularProgress, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import GoogleImg from '../../assets/images/google.png';
import { MyContext } from '../../App';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [formFields, setFormFields] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false); // For success message
    const context = useContext(MyContext);
    const navigate = useNavigate();

    const onChangeField = (e) => {
        const { name, value } = e.target;
        setFormFields((prev) => ({ ...prev, [name]: value }));
        setError(''); // Clear error on input change
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setShowLoader(true);
        setError('');
        setSuccess(false); // Clear success message
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email: formFields.email,
                password: formFields.password,
            }, {
                headers: { 'Content-Type': 'application/json' },
            });
            const { token, user } = response.data;
            // Store token and user_id
            localStorage.setItem('token', token);
            localStorage.setItem('user_id', user.id);
            localStorage.setItem('user', JSON.stringify(user)); // Store full user object
            // Update context
            if (context && context.setUser) {
                context.setUser(user);
            } else {
                console.error('context.setUser is not available.');
            }
            context.signIn(); // Update isLogin state
            setShowLoader(false);
            setSuccess(true); // Show success message
            setTimeout(() => {
                setSuccess(false);
                navigate('/'); // Redirect after success message
            }, 2000); // Show success for 2 seconds before redirect
        } catch (error) {
            setShowLoader(false);
            if (error.response) {
                const status = error.response.status;
                const errorMsg = error.response.data.message || 'An error occurred. Please try again.';
                setError(errorMsg);
                if (status === 401) {
                    setTimeout(() => navigate('/signup'), 2000); // Redirect to signup on invalid credentials
                }
            } else {
                setError('Network error. Please check your connection or try again later.');
                console.error('Login error:', error.message);
            }
        }
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

                        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                        <Snackbar
                            open={success}
                            autoHideDuration={2000}
                            onClose={() => setSuccess(false)}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        >
                            <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                                Login successful!
                            </Alert>
                        </Snackbar>

                        <form className="space-y-6" onSubmit={handleSignIn}>
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
                                    type="submit"
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