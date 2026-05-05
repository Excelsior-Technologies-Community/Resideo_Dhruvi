import React from "react";
import "../Style.css";
import img1 from "../assets/img1.png";
const Services = () => {
  return (
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
  );
};

export default Services;