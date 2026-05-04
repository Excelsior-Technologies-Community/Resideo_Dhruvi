import React, { useEffect, useState } from "react";
import "../Style.css";

function About() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/services");
      const result = await res.json();
      if (Array.isArray(result)) {
        setServices(result);
      } else {
        console.error("API did not return an array:", result);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <>
      <div className="about-hero">
        <div className="overlay">
          <div className="container">
            <h1>About Us</h1>
            <p>A real estate company with a purpose.</p>
          </div>
        </div>
      </div>

      <div className="container my-5 py-4">
        <div className="row align-items-center">
          
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold">
              We are building the first modern real estate platform.
            </h2>
          </div>

          <div className="col-md-6">
            <ul className="list-unstyled about-list">
              <li>
                <i className="fas fa-plus"></i> Find your future home
              </li>
              <li>
                <i className="fas fa-plus"></i> Experienced agents
              </li>
              <li>
                <i className="fas fa-plus"></i> Buy or rent homes
              </li>
              <li>
                <i className="fas fa-plus"></i> List your own property
              </li>
            </ul>
          </div>

        </div>
      </div>

      
      <div className="tech-hero text-center text-white d-flex align-items-center justify-content-center">
        <div className="tech-content">
          <h2 className="fw-bold mb-3">A tech company reinventing the space</h2>
          <p className="mb-4">The smartest tools built by the brightest minds across engineering, design and strategy.</p>
          <div className="play-btn">
            <i className="fas fa-play"></i>
          </div>
        </div>
      </div>

      <div className="numbers-section bg-black text-white py-5">
        <div className="container py-5">
          <h3 className="fw-bold mb-2">Real Estate by the Numbers</h3>
          <p className="text-muted mb-5">In 2021, things look like this:</p>
          
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <h1 className="fw-bold number-stat mb-3">195k</h1>
              <h5 className="fw-bold mb-3">Property value</h5>
              <p className="text-muted small">Median US property value in $</p>
            </div>
            <div className="col-md-4">
              <h1 className="fw-bold number-stat mb-3">3000+</h1>
              <h5 className="fw-bold mb-3">Property taxes</h5>
              <p className="text-muted small">Average property taxes in $</p>
            </div>
            <div className="col-md-4">
              <h1 className="fw-bold number-stat mb-3">63%</h1>
              <h5 className="fw-bold mb-3">Home ownership</h5>
              <p className="text-muted small">Percentage of home ownership vs. renting</p>
            </div>
          </div>
        </div>
      </div>


      <div className="services-section bg-light py-5 text-center">
        <div className="container py-4">
          <h2 className="fw-bold mb-2">Why Choose Us</h2>
          <p className="text-muted mb-5">We offer perfect real estate services.</p>
          <div className="row g-4 justify-content-center">
            {services.map((service) => (
              <div className="col-md-4" key={service.id}>
                <div className="service-card" style={{ backgroundImage: `url('/src/assets/${service.image}')` }}>
                  <div className="service-overlay">
                    <div className="service-icon mb-3">
                      <i className={`fa-solid ${service.icon}`}></i>
                    </div>
                    <h4 className="fw-bold text-white mb-3">{service.title}</h4>
                    <p className="text-white small service-desc px-3">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}

export default About;