import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import "../Style.css";
import img1 from "../assets/img1.png";
const Services = () => {
    const [features, setFeatures] = useState([]);
    const [contactForm, setContactForm] = useState({ name: '', number: '', email: '', message: '' });
    const navigate = useNavigate();

    const handleContactChange = (e) => {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login and then try again.");
            navigate("/login");
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/contacts', contactForm);
            alert("Message sent successfully!");
            setContactForm({ name: '', number: '', email: '', message: '' });
        } catch (err) {
            alert("Failed to send message. Please try again.");
            console.error(err);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/features')
            .then(res => setFeatures(res.data))
            .catch(err => console.log(err));
    }, []);
    
    return (
        <>
            <section className="services-section container py-5">
                <h2 className="fw-bold mb-5">Services</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 position-relative">
                        <img
                            src={img1}
                            alt="service"
                            className="img-fluid main-img"
                        />

                        <div className="overlay-card text-center">
                            <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
                            <h5 className="fw-bold">A real estate company</h5>
                            <p>
                                We are building the first modern real estate platform, pairing the
                                industry's top talent with technology to make the search and sell
                                experience intelligent and seamless.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <h3 className="fw-bold">
                            A tech company reinventing the space
                        </h3>

                        <p className="text-muted mt-3">
                            To lead the industry requires the smartest tools built by the
                            brightest minds across engineering, design, and strategy. Through
                            our proprietary platform, Resideo is changing how agents and clients
                            navigate the process of finding or selling a home.
                        </p>

                        <a href="#" className="browse-link">
                            BROWSE OUR PROPERTIES <span className="line"></span>
                        </a>
                    </div>
                </div>
            </section>

            <br></br>

            <div className="container my-5 mt-5">
                <div className="row">

                    <div className="col-md-4">
                        <h2 className="fw-bold">
                            We are building the first modern real estate platform.
                        </h2>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            {features.map((item) => (
                                <div className="col-md-6 mb-4" key={item.id}>
                                    <div className="d-flex">
                                        <i className={`fa ${item.icon} fa-2x text-primary me-3`}></i>
                                        <div>
                                            <h5>{item.title}</h5>
                                            <p className="text-muted">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <section className="contact-hero d-flex align-items-center" style={{ backgroundColor: '#023035', minHeight: '600px', backgroundImage: 'url(https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2000)', backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundPosition: 'center' }}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-white pe-md-5">
                            <h1 className="fw-bold display-4 mb-3">When you're ready for a change</h1>
                            <p className="fs-5">When you're ready for a change</p>
                        </div>

                        <div className="col-md-5 offset-md-1 mt-5 mt-md-0">
                            <div className="card bg-black text-white p-5 border-0 shadow-lg">
                                <h2 className="fw-bold mb-2">Say hello</h2>
                                <p className="text-muted mb-4">Tell us how we can guide you.</p>
                                <form onSubmit={handleContactSubmit}>
                                    <div className="row g-3 mb-3">
                                        <div className="col-sm-6">
                                            <input type="text" name="name" className="form-control bg-dark text-white border-0 py-2 contact-input" placeholder="Your name" value={contactForm.name} onChange={handleContactChange} required />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" name="number" className="form-control bg-dark text-white border-0 py-2 contact-input" placeholder="Your number" value={contactForm.number} onChange={handleContactChange} required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" name="email" className="form-control bg-dark text-white border-0 py-2 contact-input" placeholder="Your email" value={contactForm.email} onChange={handleContactChange} required />
                                    </div>
                                    <div className="mb-4">
                                        <textarea name="message" className="form-control bg-dark text-white border-0 py-2 contact-input" rows="4" placeholder="Type your message..." value={contactForm.message} onChange={handleContactChange} required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 py-3 fw-bold" style={{ backgroundColor: '#0d6efd' }}>SEND MESSAGE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;