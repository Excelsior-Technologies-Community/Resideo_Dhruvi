import "../Style.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Agents() {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/agents")
            .then(res => setAgents(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <>
            <div className="agents-page">

                <div className="text-center py-4 bg-light">
                    <h2>Our Agents</h2>
                    <p className="text-muted">
                        Pairing the industry's top technology with unsurpassed local expertise.
                    </p>
                </div>

                <div className="agent-hero">

                    <div className="search-box container">
                        <h3>Find an Agent</h3>

                        <div className="input-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for..."
                            />
                            <span className="input-group-text">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>

                </div>

            </div>

            <br></br>

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

        </>
    );
}