import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");
        if (token && userData) {
            setIsLoggedIn(true);
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUser(null);
        setShowDropdown(false);
        navigate("/");
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

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
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">
                                SERVICES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/listings">
                                LISTINGS
                            </Link>
                        </li>
                        <li className="nav-item dropdown hover-dropdown">
                            <a className="nav-link" href="#" id="agentsDropdown" role="button">
                                AGENTS
                            </a>
                            <ul className="dropdown-menu agents-menu" aria-labelledby="agentsDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/agents">
                                        Agents List
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/melvin-blackwell">
                                        Melvin Blackwell
                                    </Link>
                                </li>
                                <li><a className="dropdown-item" href="#">Alayna Becker</a></li>
                                <li><a className="dropdown-item" href="#">Scott Goodwin</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/blog">BLOG</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/demos">DEMOS</Link></li>
 <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT US
                </Link>
              </li>
                    </ul>
                </div>

                {isLoggedIn ? (
                    <div className="dropdown position-relative">
                        <div className="user-icon dropdown-toggle" onClick={toggleDropdown} style={{ cursor: "pointer", display: "inline-block" }}>
                            <i className="fa-regular fa-user" style={{ color: "#4CAF50" }}></i>
                        </div>
                        <ul className={`dropdown-menu dropdown-menu-end shadow mt-2 ${showDropdown ? 'show' : ''}`} style={{ position: 'absolute', right: 0, left: 'auto' }}>
                            <li><span className="dropdown-item fw-bold">Hello, {user?.username}</span></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <div className="user-icon" onClick={() => navigate("/signup")} style={{ cursor: "pointer" }}>
                        <i className="fa-regular fa-user"></i>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
