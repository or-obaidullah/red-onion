import React from 'react';
import logo2 from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <a href="">
                            <img src={logo2} alt="" />
                        </a>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                        <div className="row">
                            <div className="col-6 col-md-6">
                                <ul>
                                    <li>About online food</li>
                                    <li>Read our blog</li>
                                    <li>Sign Up to Deliver</li>
                                    <li>Add Your Restaurant</li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-6 ">
                                <ul>
                                    <li>Get help</li>
                                    <li>Read FAQs</li>
                                    <li>view all cities</li>
                                    <li>Restaurant  near me</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5 pt-3'>
                    <div className="col-sm-6 col-md-6">
                        <small>Copyright &copy; 2020 Online food</small>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <ul className="d-flex justify-content-end mr-5 pr-5">
                            <li>Private Policy</li>
                            <li className='ml-5'>Terms od use</li>
                            <li className='ml-5'>Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;