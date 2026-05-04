import React from 'react';
import '../Style.css';

const Footer = () => {
    return (
        <footer className="footer bg-black text-white py-5">
            <div className="container px-4">
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 pe-lg-4">
                        <h4 className="fw-bold mb-4">resideo.</h4>
                        <p className="footer-text mb-1">90 Fifth Avenue, 3rd Floor</p>
                        <p className="footer-text mb-1">San Francisco, CA 1980</p>
                        <p className="footer-text mb-5">(123) 456-7890</p>
                        <div className="social-icons d-flex gap-3 mb-4">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <p className="footer-text copyright mt-5 pt-3">© 2020 Resideo.</p>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 ps-lg-5">
                        <h6 className="fw-bold mb-4">Company</h6>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#">Agents</a></li>
                            <li><a href="#">Property Search</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <h6 className="fw-bold mb-4">Services</h6>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#">Buy Properties</a></li>
                            <li><a href="#">Sell Properties</a></li>
                            <li><a href="#">Rent Properties</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-4">Explore</h6>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#">Homes for Rent</a></li>
                            <li><a href="#">Apartments for Rent</a></li>
                            <li><a href="#">Homes for Sale</a></li>
                            <li><a href="#">Apartments for Sale</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
