import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Demos.css';

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
        } catch(e) {
            return '';
        }
    };

    return (
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
                    <div style={{width: '40px', height: '1px', backgroundColor: '#000'}}></div>
                </div>
            </div>
        </div>
    );
};

export default Demos;
