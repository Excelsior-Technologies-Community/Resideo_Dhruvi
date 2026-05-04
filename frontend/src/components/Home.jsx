import React, { useEffect, useState } from "react";

import '../Style.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [start, setStart] = useState(0);

    const fetchData = async () => {
        const res = await fetch(`http://localhost:5000/api/neighborhoods?start=${start}`);
        const result = await res.json();
        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, [start]);

    const handleNext = () => {
        setStart(prev => prev + 1);
    };

    const handlePrev = () => {
        setStart(prev => Math.max(0, prev - 1));
    };
    return (
        <>

            <section className="hero-section d-flex align-items-center justify-content-center text-center">
                <div>
                    <h1 className="hero-title">
                        When you're ready for a change
                    </h1>
                    <p className="hero-subtitle">
                        Whether you're buying, selling or renting, we can help you move forward.
                    </p>
                </div>
            </section>

            <div className="search-header text-center">
                <h1>Find your future home</h1>
                <p>
                    The houses best suited to your lifestyle, and the agents who know them best.
                </p>
            </div>

            <div className="container">
                <div className="search-box">

                    <div className="row g-3 align-items-end">

                        <div className="col-md-3">
                            <label>Status</label>
                            <div className="input-box">
                                <select className="form-select custom-select">
                                    <option>For Rent</option>
                                    <option>For Sale</option>
                                </select>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label>Address</label>
                            <div className="input-box">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by City, Neighborhood, or Address"
                                />
                            </div>
                        </div>

                        <div className="col-md-3 text-md-end">
                            <button className="search-btn">
                                SEARCH PROPERTIES
                            </button>
                        </div>

                    </div>

                    <div className="advanced-search">
                        SHOW ADVANCED SEARCH <span>+</span>
                    </div>

                </div>
            </div>

            <div className="container py-5">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">Explore Neighborhoods</h2>
                    <p className="text-muted">
                        Browse our comprehensive neighborhood listings.
                    </p>
                </div>

                <div className="row position-relative">

                    {data.map((item) => (
                        <div className="col-md-4 mb-4" key={item.id}>
                            <div className="card-box">
                                <img src={`/src/assets/${item.image}`} alt="" />
                                <h5>{item.name}</h5>
                                <p>{item.city}</p>
                            </div>
                        </div>
                    ))}

                    {start > 0 && (
                        <button className="prev-btn" onClick={handlePrev}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                    )}

                    <button className="next-btn" onClick={handleNext}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

                <div className="text-center mt-3 view-link" style={{ cursor: "pointer", fontWeight: "600", color: "#000", textDecoration: "underline" }}>
                    VIEW PROPERTIES
                </div>

            </div>

            <section className="help-section py-5 mt-5">
                <div className="container px-4">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-5 mb-md-0 position-relative text-center text-md-start pe-md-5">
                            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Help" className="help-img" />
                            <div className="help-info-box bg-black text-white p-5 text-start">
                                <div className="mb-4">
                                    <i className="fa-solid fa-house fa-2x"></i>
                                </div>
                                <p className="mb-5 help-info-text">With over 1 million+ homes for sale available on the website, Resideo can match you with a house you will want to call home.</p>
                                <i className="fa-solid fa-arrow-right fa-lg"></i>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <h2 className="fw-bold mb-4 pe-md-5">See how Resideo can help</h2>
                            <p className="text-muted mb-5 help-subtitle pe-md-4">
                                With the solutions-driven mindset of a startup and the sophistication of a luxury brand, Resideo is the future of real estate.
                            </p>
                            <div className="help-options">
                                <div className="help-option active">
                                    <span className="line">—</span> Buy a home
                                </div>
                                <div className="help-option text-muted">
                                    Rent a home
                                </div>
                                <div className="help-option text-muted">
                                    See neighborhoods
                                </div>
                                <div className="help-option text-muted">
                                    Experienced agents
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial-section position-relative pb-5">
                <div className="container position-relative z-1 d-flex justify-content-center h-100 align-items-center">
                    <div className="testimonial-box bg-black text-white p-5 text-center">
                        <h3 className="fw-bold mb-4 mt-2">Susanne Weil</h3>
                        <p className="mb-5 px-3 testimonial-p">
                            "And it's no wonder Resideo has shaken things up: As anyone who's ever tried to rent or buy property in Cambridge knows, the experience is loaded with pain points."
                        </p>
                        <div className="slider-dots d-flex justify-content-center align-items-center gap-1 mb-3">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;