import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style.css";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("users"); // "users", "contacts", "properties", "agents", "articles"
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (!userString) {
      navigate("/login");
      return;
    }
    
    const user = JSON.parse(userString);
    if (user.role !== "admin" && user.email !== "admin@gmail.com") {
      alert("Unauthorized access. Admin privileges required.");
      navigate("/");
      return;
    }

    fetchData(activeTab);
  }, [activeTab, navigate]);

  const fetchData = async (tab) => {
    setData([]);
    setSelectedItem(null);
    try {
      let endpoint = "";
      if (tab === "users") endpoint = "/api/auth/users";
      else if (tab === "contacts") endpoint = "/api/contacts";
      else if (tab === "properties") endpoint = "/api/properties";
      else if (tab === "agents") endpoint = "/api/agents";
      else if (tab === "articles") endpoint = "/api/articles";

      const res = await axios.get(`http://localhost:5000${endpoint}`);
      setData(res.data);
    } catch (err) {
      console.error(`Error fetching ${tab}`, err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm(`Are you sure you want to delete this item?`)) {
      try {
        let endpoint = "";
        if (activeTab === "users") endpoint = `/api/auth/users/${id}`;
        else if (activeTab === "contacts") endpoint = `/api/contacts/${id}`;
        else if (activeTab === "properties") endpoint = `/api/properties/${id}`;
        else if (activeTab === "agents") endpoint = `/api/agents/${id}`;
        else if (activeTab === "articles") endpoint = `/api/articles/${id}`;

        await axios.delete(`http://localhost:5000${endpoint}`);
        alert(`Item deleted successfully!`);
        setData(data.filter(item => item.id !== id));
        if (selectedItem && selectedItem.id === id) {
          setSelectedItem(null);
        }
      } catch (err) {
        console.error("Error deleting item", err);
        alert("Failed to delete item");
      }
    }
  };

  return (
    <div className="container py-5 my-5">
      <h2 className="fw-bold mb-4 text-center">Admin Dashboard</h2>

      {/* Dashboard Blocks / Tabs */}
      <div className="row mb-5 justify-content-center">
        {/* Users */}
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div 
            className={`card text-center p-3 border-0 shadow-sm h-100 ${activeTab === "users" ? "bg-dark text-white" : "bg-light text-dark"}`} 
            style={{ cursor: "pointer", transition: "0.3s" }}
            onClick={() => setActiveTab("users")}
          >
            <i className="fas fa-users fa-2x mb-2"></i>
            <h6 className="fw-bold">Users</h6>
          </div>
        </div>
        {/* Contacts */}
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div 
            className={`card text-center p-3 border-0 shadow-sm h-100 ${activeTab === "contacts" ? "bg-dark text-white" : "bg-light text-dark"}`} 
            style={{ cursor: "pointer", transition: "0.3s" }}
            onClick={() => setActiveTab("contacts")}
          >
            <i className="fas fa-envelope-open-text fa-2x mb-2"></i>
            <h6 className="fw-bold">Messages</h6>
          </div>
        </div>
        {/* Properties */}
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div 
            className={`card text-center p-3 border-0 shadow-sm h-100 ${activeTab === "properties" ? "bg-dark text-white" : "bg-light text-dark"}`} 
            style={{ cursor: "pointer", transition: "0.3s" }}
            onClick={() => setActiveTab("properties")}
          >
            <i className="fas fa-home fa-2x mb-2"></i>
            <h6 className="fw-bold">Properties</h6>
          </div>
        </div>
        {/* Agents */}
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div 
            className={`card text-center p-3 border-0 shadow-sm h-100 ${activeTab === "agents" ? "bg-dark text-white" : "bg-light text-dark"}`} 
            style={{ cursor: "pointer", transition: "0.3s" }}
            onClick={() => setActiveTab("agents")}
          >
            <i className="fas fa-user-tie fa-2x mb-2"></i>
            <h6 className="fw-bold">Agents</h6>
          </div>
        </div>
        {/* Articles */}
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div 
            className={`card text-center p-3 border-0 shadow-sm h-100 ${activeTab === "articles" ? "bg-dark text-white" : "bg-light text-dark"}`} 
            style={{ cursor: "pointer", transition: "0.3s" }}
            onClick={() => setActiveTab("articles")}
          >
            <i className="fas fa-newspaper fa-2x mb-2"></i>
            <h6 className="fw-bold">Articles</h6>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Table Section */}
        <div className="col-md-8 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title mb-4 text-capitalize">
                {activeTab} Directory
              </h4>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Main Info</th>
                      <th>Secondary Info</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(item => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          {activeTab === "users" && item.username}
                          {activeTab === "contacts" && item.name}
                          {activeTab === "properties" && item.title}
                          {activeTab === "agents" && item.name}
                          {activeTab === "articles" && item.title}
                        </td>
                        <td>
                          {activeTab === "users" && item.email}
                          {activeTab === "contacts" && item.email}
                          {activeTab === "properties" && item.price}
                          {activeTab === "agents" && item.phone}
                          {activeTab === "articles" && item.category}
                        </td>
                        <td className="text-center">
                          <button 
                            className="btn btn-sm btn-info text-white me-2"
                            onClick={() => setSelectedItem(item)}
                          >
                            View
                          </button>
                          <button 
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                    {data.length === 0 && (
                      <tr>
                        <td colSpan="4" className="text-center text-muted py-4">
                          No items found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="col-md-4 mb-4">
          {selectedItem ? (
            <div className="card shadow-sm border-0 bg-light h-100">
              <div className="card-body">
                <h4 className="card-title mb-4 border-bottom pb-2 text-capitalize">{activeTab} Details</h4>
                
                <div className="mb-3">
                  <span className="fw-bold text-muted d-block">ID</span>
                  <span className="fs-5">{selectedItem.id}</span>
                </div>

                {/* Users Details */}
                {activeTab === "users" && (
                  <>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Username</span><span className="fs-5">{selectedItem.username}</span></div>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Email</span><span className="fs-5">{selectedItem.email}</span></div>
                  </>
                )}

                {/* Contacts Details */}
                {activeTab === "contacts" && (
                  <>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Name</span><span className="fs-5">{selectedItem.name}</span></div>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Email</span><span className="fs-5">{selectedItem.email}</span></div>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Phone Number</span><span className="fs-5">{selectedItem.number || "Not Provided"}</span></div>
                    <div className="mb-3">
                      <span className="fw-bold text-muted d-block">Message</span>
                      <div className="p-3 bg-white border rounded mt-1" style={{ whiteSpace: "pre-wrap" }}>{selectedItem.message}</div>
                    </div>
                  </>
                )}

                {/* Properties Details */}
                {activeTab === "properties" && (
                  <>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Title</span><span className="fs-5">{selectedItem.title}</span></div>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Price</span><span className="fs-5">{selectedItem.price}</span></div>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Type</span><span className="fs-5">{selectedItem.type}</span></div>
                    <div className="row mb-3">
                      <div className="col-4"><span className="fw-bold text-muted d-block">Beds</span><span className="fs-5">{selectedItem.beds}</span></div>
                      <div className="col-4"><span className="fw-bold text-muted d-block">Baths</span><span className="fs-5">{selectedItem.baths}</span></div>
                      <div className="col-4"><span className="fw-bold text-muted d-block">Sqft</span><span className="fs-5">{selectedItem.area}</span></div>
                    </div>
                    {selectedItem.image && (
                      <div className="mb-3">
                        <span className="fw-bold text-muted d-block">Image</span>
                        <img src={`/assets/${selectedItem.image}`} alt={selectedItem.title} className="img-fluid rounded mt-2" style={{maxHeight: "150px"}} onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/300x150?text=No+Image+Found"}} />
                      </div>
                    )}
                  </>
                )}

                {/* Agents Details */}
                {activeTab === "agents" && (
                  <>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Name</span><span className="fs-5">{selectedItem.name}</span></div>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Phone</span><span className="fs-5">{selectedItem.phone}</span></div>
                    {selectedItem.image && (
                      <div className="mb-3">
                        <span className="fw-bold text-muted d-block">Image</span>
                        <img src={`/assets/${selectedItem.image}`} alt={selectedItem.name} className="img-fluid rounded mt-2" style={{maxHeight: "150px"}} onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/150?text=No+Image"}} />
                      </div>
                    )}
                  </>
                )}

                {/* Articles Details */}
                {activeTab === "articles" && (
                  <>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Title</span><span className="fs-5">{selectedItem.title}</span></div>
                    <div className="mb-3"><span className="fw-bold text-muted d-block">Category</span><span className="fs-5">{selectedItem.category}</span></div>
                    <div className="mb-3">
                      <span className="fw-bold text-muted d-block">Description</span>
                      <div className="p-3 bg-white border rounded mt-1" style={{ whiteSpace: "pre-wrap" }}>{selectedItem.description}</div>
                    </div>
                  </>
                )}

                <button className="btn btn-outline-secondary w-100 mt-4" onClick={() => setSelectedItem(null)}>
                  Close Details
                </button>
              </div>
            </div>
          ) : (
            <div className="card shadow-sm border-0 bg-light d-flex align-items-center justify-content-center h-100" style={{ minHeight: "250px" }}>
              <div className="text-center px-4">
                <i className="fas fa-search fa-3x text-muted mb-3 opacity-50"></i>
                <p className="text-muted mb-0">
                  Select an item from the list to view its full details here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
