import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style.css";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="container mt-5 py-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" name="username" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                className="form-control" 
                onChange={handleChange} 
                required 
              />
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-dark w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
