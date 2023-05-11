import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { findAll } from "../services/AgentService";
import Agent from "./Agent";

function Agents() {

    const [agents, setAgents] = useState([]);
    const navigate = useNavigate();

    function handleAdd() {
        navigate("/agents/add")
    }

    useEffect(() => {
        findAll()
            .then(setAgents)
            .catch(alert);
    }, [navigate]);

    return (
        <div className="container">
            <div className="row">
                <h2 className="col">Agents</h2>
                <button className="btn btn-primary col" onClick={handleAdd}>Add</button>
            </div>
            <div className="row mb-2 text-bg-secondary">
                <div className="col">ID</div>
                <div className="col">Firstname</div>
                <div className="col">Middle</div>
                <div className="col">Lastname</div>
                <div className="col">Date of Birth</div>
                <div className="col">Height (inches)</div>
                <div className="col-3">Actions</div>
            </div>
            {agents.map(a => <Agent key={a.agentId} agent={a} />)}
        </div>
    )
}

export default Agents;