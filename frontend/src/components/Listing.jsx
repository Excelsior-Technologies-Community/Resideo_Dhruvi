import { useEffect, useState } from "react";
import axios from "axios";
import "../Style.css";
export default function Listings() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/properties")
      .then(res => setProperties(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Property Search</h2>

      <div className="row">
        
        <div className="col-lg-3 filter-box">
          <h5>Filter results</h5>

          <input className="form-control mb-3" placeholder="Enter location" />

          <select className="form-select mb-3">
            <option>All Types</option>
          </select>

          <div className="d-flex gap-2 mb-3">
            <select className="form-select">
              <option>Beds</option>
            </select>
            <select className="form-select">
              <option>Baths</option>
            </select>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="row">
            {properties.map((p) => (
              <div className="col-md-6 col-lg-4 mb-4" key={p.id}>
                
                <div className="card property-card">
                  
                  {p.featured && <span className="badge bg-primary featured">FEATURED</span>}
                  
                  <img
                    src={`/src/assets/${p.image}`}
                    className="card-img-top"
                    alt=""
                  />

                  <div className="card-body">
                    <h6>{p.title}</h6>

                    <p className="text-muted small">
                      {p.beds} BD | {p.baths} BA | {p.area} SF
                    </p>

                    <h5 className="price">{p.price}</h5>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}