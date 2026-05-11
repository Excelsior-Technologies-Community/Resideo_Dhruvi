import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Demos.css';

import marina from "../assets/img1.png";
import seacliff from "../assets/img2.png";
import noevalley from "../assets/img3.png";
import sunset from "../assets/img4.png";
import pacific from "../assets/house4.jpg";
import mission from "../assets/house5.jpg";
import bannerImage from "../assets/house7.jpg";

const Demos = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/properties");
                setProperties(res.data);
            } catch (err) {
                console.error("Error fetching properties:", err);
            }
        };
        fetchProperties();
    }, []);

    const getImageUrl = (imageName) => {
        try {
            return new URL(`../assets/${imageName}`, import.meta.url).href;
        } catch (e) {
            return '';
        }
    };

    const [whyChooseData, setWhyChooseData] = useState([]);

    useEffect(() => {
        fetchWhyChooseData();
    }, []);

    const fetchWhyChooseData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/why-choose"
            );

            setWhyChooseData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [neighborhoods, setNeighborhoods] = useState([]);

    useEffect(() => {
        fetchNeighborhoods();
    }, []);

    const fetchNeighborhoods = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/neighborhoods-demo"
            );

            setNeighborhoods(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    const imageMap = {
        "img1.png": marina,
        "img2.png": seacliff,
        "img3.png": noevalley,
        "img4.png": sunset,
        "house4.jpg": pacific,
        "house5.jpg": mission,
    };

    const [agents, setAgents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/agents")
            .then(res => setAgents(res.data))
            .catch(err => console.log(err));
    }, []);

    const plansData = [
        {
            id: 1,
            title: "PERSONAL",
            listings: "10 Listings",
            featured: "2 Featured Listings",
            price: "Free",
            duration: "/ 1 month",
            icon: "fa-house",
            active: false,
            badge: "",
        },

        {
            id: 2,
            title: "PROFESSIONAL",
            listings: "20 Listings",
            featured: "5 Featured Listings",
            price: "49.99",
            duration: "/ 6 months",
            icon: "fa-store",
            active: true,
            badge: "MOST POPULAR",
        },

        {
            id: 3,
            title: "BUSINESS",
            listings: "30 Listings",
            featured: "10 Featured Listings",
            price: "99.99",
            duration: "/ 1 year",
            icon: "fa-city",
            active: false,
            badge: "",
        },
    ];


    return (
        <>
            <div className="demos-page">
                <div className="demos-hero-section">
                    <div className="demos-hero-overlay"></div>
                    <div className="demos-hero-content text-center">
                        <h1 className="fw-bold text-white mb-4" style={{ fontSize: '3rem' }}>Find your future home</h1>
                        <div className="demos-search-bar bg-white p-2 rounded d-flex align-items-center mx-auto" style={{ maxWidth: '700px' }}>
                            <select className="form-select border-0 shadow-none demos-select text-muted" style={{ width: '150px' }}>
                                <option>For Rent</option>
                                <option>For Sale</option>
                            </select>
                            <div className="vr mx-2 text-muted"></div>
                            <input type="text" className="form-control border-0 shadow-none demos-input" placeholder="Enter address..." />
                            <button className="btn btn-dark px-4 py-2 ms-2 rounded"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </div>

                <div className="container py-5 mt-4">
                    <div className="mb-4">
                        <h2 className="fw-bold mb-1 fs-3">Recommended For You</h2>
                        <p className="text-muted fs-6">Listings we think you'll love.</p>
                    </div>

                    <div className="demos-carousel-wrapper position-relative">
                        <div className="demos-carousel-container d-flex overflow-auto gap-4 pb-4">
                            {properties.map((prop) => (
                                <div className="demos-property-card flex-shrink-0" key={prop.id} style={{ width: '300px', height: '400px' }}>
                                    <div className="card border-0 h-100 rounded-0 overflow-hidden position-relative">
                                        <img src={getImageUrl(prop.image)} className="card-img h-100 object-fit-cover rounded-0" alt={prop.title} />
                                        <div className="demos-card-gradient position-absolute bottom-0 w-100 h-50"></div>
                                        <div className="card-img-overlay d-flex flex-column justify-content-end p-4 border-0">
                                            <h6 className="text-white mb-1" style={{ fontSize: '15px' }}>{prop.title}</h6>
                                            <h5 className="text-white fw-bold mb-2" style={{ fontSize: '22px' }}>{prop.price}</h5>
                                            <p className="text-white-50 small mb-0" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
                                                {prop.beds} BD | {prop.baths} BA | {prop.area} SF
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="d-flex align-items-center mt-3">
                        <a href="#" className="fw-bold text-dark text-decoration-none me-3" style={{ fontSize: '13px', letterSpacing: '1px' }}>BROWSE ALL</a>
                        <div style={{ width: '40px', height: '1px', backgroundColor: '#000' }}></div>
                    </div>
                </div>
            </div>

            <div className="whychoose-main-wrapper">
                <div className="whychoose-overlay-section">
                    <div className="container">

                        <div className="whychoose-heading-area">
                            <h1>Why Choose Us</h1>
                            <p>We offer perfect real estate services.</p>
                        </div>

                        <div className="row g-0 whychoose-card-main-row">

                            {whyChooseData.map((item) => (
                                <div className="col-lg-3 col-md-6 col-12" key={item.id}>

                                    <div className="whychoose-single-card">

                                        <div className="whychoose-icon-box">

                                            <i className={`fa-solid ${item.icon}`}></i>

                                        </div>

                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>

            <div className="neighborhood-main-wrapper">

                <div className="container">

                    <div className="neighborhood-title-wrapper">

                        <h1>Explore Our Neighborhoods</h1>

                        <p>
                            Browse our comprehensive neighborhood listings.
                        </p>

                    </div>

                    <div className="row">

                        {neighborhoods.map((item) => (

                            <div
                                className="col-lg-4 col-md-6 col-12 mb-4"
                                key={item.id}
                            >

                                <div className="neighborhood-card-box">

                                    <div className="neighborhood-image-wrapper">

                                        <img
                                            src={imageMap[item.image]}
                                            alt={item.title}
                                        />

                                    </div>

                                    <div className="neighborhood-content-wrapper">

                                        <h3>{item.title}</h3>

                                        <p>{item.city}</p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            <div
                className="smartsearch-main-banner"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                }}
            >

                <div className="container h-100">

                    <div className="row h-100 align-items-center">

                        <div className="col-lg-5 col-md-7 col-12">

                            <div className="smartsearch-content-box">

                                <h1>
                                    Search Smarter,
                                    <br />
                                    From Anywhere
                                </h1>

                                <p>
                                    Power your search with our Resideo
                                    real estate platform, for timely listings
                                    and a seamless experience.
                                </p>

                                <a href="/" className="smartsearch-btn-link">

                                    SEARCH NOW

                                    <span className="smartsearch-line"></span>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="agents-page">

                <div className="container agents-grid">
                    <div className="row">
                        {agents.map((agent) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={agent.id}>

                                <div className="agent-card">

                                    <img
                                        src={`src/assets/${agent.image}`}
                                        alt=""
                                        className="agent-img"
                                    />

                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>

                                    <div className="agent-info">
                                        <h6>{agent.name}</h6>
                                        <p><i className="fa fa-phone"></i> {agent.phone}</p>
                                        <span className="details">MORE DETAILS</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="membership-main-wrapper">

                <div className="container">

                    <div className="membership-heading-wrapper">

                        <h1>Membership Plans</h1>

                        <p>
                            Choose the plan that suits you best.
                        </p>

                    </div>

                    <div className="row justify-content-center">

                        {plansData.map((plan) => (

                            <div
                                className="col-lg-4 col-md-6 col-12 mb-4"
                                key={plan.id}
                            >

                                <div
                                    className={`membership-plan-card ${plan.active
                                            ? "membership-active-card"
                                            : ""
                                        }`}
                                >

                                    {plan.badge && (

                                        <div className="membership-popular-badge">

                                            {plan.badge}

                                        </div>

                                    )}

                                    <div className="membership-icon-wrapper">

                                        <i
                                            className={`fa-solid ${plan.icon}`}
                                        ></i>

                                    </div>

                                    <h3>{plan.title}</h3>

                                    <div className="membership-listing-text">

                                        <p>{plan.listings}</p>

                                        <p>{plan.featured}</p>

                                    </div>

                                    <div className="membership-price-wrapper">

                                        <span className="membership-price">

                                            {plan.price}

                                        </span>

                                        <span className="membership-duration">

                                            {plan.duration}

                                        </span>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </>
    );
};

export default Demos;
