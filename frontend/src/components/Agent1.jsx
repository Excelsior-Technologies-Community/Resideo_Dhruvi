import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import agentImg from "../assets/user4.png";

const Agent1 = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/agents/properties")
            .then(res => setProperties(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="agent-page">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8">

                        <div className="agent-top">
                            <h1 className="agent-name">Melvin Blackwell</h1>

                            <div className="agent-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>

                        <p className="agent-role">
                            Licensed Associate Real Estate Broker
                        </p>

                        <div className="agent-contact">
                            <p>
                                <i className="far fa-envelope"></i>
                                melvin.blackwell@resideo.com
                            </p>

                            <p>
                                <i className="fas fa-phone-alt"></i>
                                (123) 456-7890
                            </p>
                        </div>

                        <button className="agent-btn">
                            WORK WITH MELVIN BLACKWELL
                        </button>

                        <div className="about-agent">
                            <h2>About Melvin Blackwell</h2>

                            <p>
                                Using the sophisticated resources of Resideo in San Francisco,
                                Melvin will guide you through what can be considered a most
                                stressful time in your life. Whether you are looking to buy a
                                vacation home or selling your condo, he will competently and
                                compassionately guide you through the local real estate process,
                                facilitating your ultimate decision with sound financial
                                expertise, solid market knowledge, and honest advice.
                            </p>

                            <p>
                                When handling the gamut of real-estate needs for buyers and
                                sellers alike, Melvin is dedicated to providing the utmost
                                professionalism, knowledge, and business sense, striving to keep
                                all your days productive.
                            </p>
                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div className="agent-right">

                            <img
                                src={agentImg}
                                alt="Agent"
                                className="agent-image"
                            />

                            <div className="specialities">
                                <h3>Specialities</h3>

                                <p>House Sales and Rentals</p>
                            </div>

                            <div className="social-media">
                                <h3>Social Media</h3>

                                <div className="social-icons">

                                    <a href="#">
                                        <i className="fa-brands fa-facebook"></i>                  </a>

                                    <a href="#">
                                        <i className="fa-brands fa-twitter"></i>                  </a>

                                    <a href="#">
                                        <i className="fa-brands fa-instagram"></i>                  </a>

                                    <a href="#">
                                        <i className="fa-brands fa-pinterest"></i>                  </a>

                                    <a href="#">
                                        <i className="fa-brands fa-linkedin"></i>                  </a>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="container mt-5 mb-5">
                <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Listings by Melvin Blackwell</h2>
                <div className="row">
                    {properties.map((p) => (
                        <div className="col-md-4 mb-4" key={p.id}>
                            <div className="card text-white border-0 shadow-sm" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                <img
                                    src={`/src/assets/${p.image}`}
                                    className="card-img"
                                    alt={p.title}
                                    style={{ height: '350px', objectFit: 'cover' }}
                                />
                                <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                    <h6 className="card-title mb-1" style={{ fontSize: '1rem' }}>{p.title}</h6>
                                    <h4 className="card-text mb-1" style={{ fontWeight: 'bold' }}>{p.price}</h4>
                                    <p className="card-text small m-0" style={{ opacity: 0.8 }}>{p.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agent1;