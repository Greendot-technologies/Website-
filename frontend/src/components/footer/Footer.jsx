import React from 'react';
import './footer.css';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import Icon4 from '../../assets/images/icon-4.svg'
import Icon5 from '../../assets/images/icon-5.svg'
// import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
// import paymentImage from '../../assets/images/payment-method.png';

// import appStore from '../../assets/images/app-store.jpg';
// import googlePlay from '../../assets/images/google-play.jpg';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import Newsletter from '../../components/newsletter/Newsletter';
import NewsletterImg from '../../assets/images/newsletter.png';

const Footer = () => {
    return (
        <>

            <section className='newsLetterSection'>
                <div className='container-fluid'>
                    <div className='box d-flex align-items-center'>
                        <div className='info'>
                            <h2>Stay home & get your daily <br />needs from our shop</h2>
                            <p>Start Your Daily Shopping with Nest Mart</p>
                            <br /><br className='res-hide' />
                            <Newsletter />
                        </div>

                        <div className='img'>
                            <img src={NewsletterImg} className='w-100' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon1} /></span>
                                    <div className='info'>
                                        <h4>Best prices & offers</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon2} /></span>
                                    <div className='info'>
                                        <h4>Free delivery</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon3} /></span>
                                    <div className='info'>
                                        <h4>Great daily deal</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon4} /></span>
                                    <div className='info'>
                                        <h4>Wide assortment</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon5} /></span>
                                    <div className='info'>
                                        <h4>Easy returns</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                                <Link to='/'>
                                    {/* <img src={Logo} /> */}Logo
                                </Link>
                                <br /><br />
                                <p>Awesome grocery store </p>
                                <br />

                                <p><LocationOnOutlinedIcon /> <strong>Address</strong>: Aurangabad Maharashtra</p>
                                <p><HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) - 9999999999 </p>
                                <p><EmailOutlinedIcon /> <strong>Email:</strong> shop@gmail.com</p>
                                <p><WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

                            </div>


                            <div className='col-md-6 part2'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3>Company</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>Company</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Account</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>Corporate</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>Popular</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3'>
                                <h3>Organic Foods</h3>
                                <br className='res-hide'/>
                                <p>Shop Now Our latest organic Products</p>

                                <div className='d-flex'>
                                    <Link to={''}><img src="data:image/jpeg;base64,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" width={150} /></Link>
                                    <Link to={''}><img src="data:image/jpeg;base64,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" className='mx-2' width={150} /></Link>
                                </div>

                                <br />

                            </div>


                        </div>







                    </div>
                </footer>


            </div>
        </>
    )
}

export default Footer;