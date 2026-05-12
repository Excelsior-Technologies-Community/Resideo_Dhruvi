import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        regarding: "",
        number: "",
        message: "",
    });

    const [location, setLocation] = useState("San Francisco");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            alert("First login and then try again");
            navigate("/login");
            return;
        }

        const finalMessage = formData.regarding
            ? `Regarding: ${formData.regarding}\n\n${formData.message}`
            : formData.message;

        const payload = {
            name: formData.name,
            email: formData.email,
            number: formData.number,
            message: finalMessage,
        };

        try {
            const res = await axios.post("http://localhost:5000/api/contacts", payload);
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", regarding: "", number: "", message: "" });
        } catch (err) {
            console.error("Error submitting contact form:", err);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <>
            <div className="contact-header text-center">

                <h1>Contact Us</h1>

                <p>Say hello. Tell us how we can guide you.</p>

            </div>

            <div className="contact-bg">

                <div className="office-card container">

                    <h2>Our Offices</h2>

                    <div className="row mt-5">

                        <div className="col-lg-4 col-md-6 col-12 office-box">

                            <h3>San Francisco</h3>

                            <p>
                                <i className="fas fa-map-marker-alt me-2"></i>
                                90 Fifth Avenue, 3rd Floor
                                <br />
                                San Francisco, CA 1980
                            </p>

                            <p>
                                <i className="fas fa-phone-alt me-2"></i>
                                (123) 789-7390
                            </p>

                            <p className="email">
                                <i className="fas fa-envelope me-2"></i>
                                office-sf@resideo.com
                            </p>

                        </div>

                        <div className="col-lg-4 col-md-6 col-12 office-box">

                            <h3>New York</h3>

                            <p>
                                <i className="fas fa-map-marker-alt me-2"></i>
                                90 Fifth Avenue, 3rd Floor
                                <br />
                                New York, NY 1980
                            </p>

                            <p>
                                <i className="fas fa-phone-alt me-2"></i>
                                (123) 789-7390
                            </p>

                            <p className="email">
                                <i className="fas fa-envelope me-2"></i>
                                office-ny@resideo.com
                            </p>

                        </div>

                        <div className="col-lg-4 col-md-6 col-12 office-box">

                            <h3>Los Angeles</h3>

                            <p>
                                <i className="fas fa-map-marker-alt me-2"></i>
                                90 Fifth Avenue, 3rd Floor
                                <br />
                                Los Angeles, CA 1980
                            </p>

                            <p>
                                <i className="fas fa-phone-alt me-2"></i>
                                (123) 789-7390
                            </p>

                            <p className="email">
                                <i className="fas fa-envelope me-2"></i>
                                office-la@resideo.com
                            </p>

                        </div>

                    </div>

                </div>

            </div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-lg-6 mb-4 pe-lg-5">
                        <h2 className="fw-bold mb-4" style={{ color: "#333" }}>Send Us A Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: "2px", padding: "10px" }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ borderRadius: "2px", padding: "10px" }}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <select
                                        className="form-select"
                                        name="regarding"
                                        value={formData.regarding}
                                        onChange={handleChange}
                                        style={{ borderRadius: "2px", padding: "10px", color: "#6c757d" }}
                                    >
                                        <option value="">What is this regarding?</option>
                                        <option value="Sales">Sales</option>
                                        <option value="Support">Support</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone (optional)"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        style={{ borderRadius: "2px", padding: "10px" }}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <textarea
                                    className="form-control"
                                    rows="6"
                                    placeholder="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{ borderRadius: "2px", padding: "10px", resize: "none" }}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn text-white px-4 py-2"
                                style={{ backgroundColor: "#333", borderRadius: "2px", fontWeight: "600", fontSize: "14px" }}
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    <div className="col-lg-6">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold mb-0" style={{ color: "#333" }}>Our Locations</h2>
                            <select
                                className="form-select w-auto"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                style={{ borderRadius: "2px", padding: "5px 30px 5px 15px", fontSize: "14px", color: "#6c757d" }}
                            >
                                <option value="San Francisco">San Francisco</option>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                            </select>
                        </div>

                        <div style={{ width: "100%", height: "350px", backgroundColor: "#e9ecef" }}>
                            {location === "San Francisco" && (
                                <iframe
                                    src="https://maps.google.com/maps?q=San+Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="San Francisco Map"
                                ></iframe>
                            )}
                            {location === "New York" && (
                                <iframe
                                    src="https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="New York Map"
                                ></iframe>
                            )}
                            {location === "Los Angeles" && (
                                <iframe
                                    src="https://maps.google.com/maps?q=Los+Angeles&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Los Angeles Map"
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;