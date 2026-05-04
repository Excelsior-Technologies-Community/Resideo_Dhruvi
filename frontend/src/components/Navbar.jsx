import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">resideo.</Link>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">
                            ABOUT US
                        </Link></li>
                        <li className="nav-item"><a className="nav-link" href="#">SERVICES</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">LISTINGS</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">AGENTS</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">BLOG</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">DEMOS</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">CONTACT US</a></li>
                    </ul>
                </div>

                <div className="user-icon">
                    <i className="fa-regular fa-user"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
