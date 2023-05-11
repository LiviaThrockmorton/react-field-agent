import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findById, save } from "../services/AgentService";

function AgentForm() {
    const [currentAgent, setCurrentAgent] = useState({ agentId: "", firstName: "", middleName: "", lastName: "", dob: "", heightInInches: "" });
    const [wait, setWait] = useState(true);
    const navigate = useNavigate();
    const {agentId} = useParams();

    useEffect(() => {
        if (agentId) {
            findById(agentId)
                .then(agent => {
                    setCurrentAgent(agent);
                    setWait(false);
                })
                .catch(() => navigate("/"));
        } else {
            setWait(false);
        }
    }, [agentId, navigate]);

    function handleChange(evt) {
        const nextAgent = {...currentAgent};
        nextAgent[evt.target.name] = evt.target.value;
        setCurrentAgent(nextAgent);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
         const nextAgent = {...currentAgent};

         save(nextAgent)
             .then(() => navigate("/success", {state: {msg: "Agent saved"}}))
             .catch(() => navigate("/error", {state: {msg: "Make sure all fields are valid"}}));
    }

    if (wait) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div>
                <label htmlFor="firstName" className="form-label">Firstname</label>
                <input type="text" id="firstName" name="firstName" className="form-control"
                    value={currentAgent.firstName} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="middleName" className="form-label">Middle</label>
                <input type="text" id="middleName" name="middleName" className="form-control"
                    value={currentAgent.middleName} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="lastName" className="form-label">Lastname</label>
                <input type="text" id="lastName" name="lastName" className="form-control"
                    value={currentAgent.lastName} onChange={handleChange} required />
            </div>
            <div>
            <label className="form-label" htmlFor="dob">Date of Birth</label>
                <input className="form-control" id="dob" type="date" name="dob"
                    value={currentAgent.dob} onChange={handleChange} required />
            </div>
            <div>
            <label className="form-label" htmlFor="heightInInches">Height (inches)</label>
                <input className="form-control" id="heightInInches" type="number" name="heightInInches"
                    value={currentAgent.heightInInches} onChange={handleChange} required />
            </div>
            <div>
                <button type="submit" className="btn btn-primary me-2">Save</button>
                <Link to="/agents" type="button" className="btn btn-warning">Cancel</Link>
            </div>
            {/* {errors.length > 0 && <div className="alert alert-danger mt-2">
                <ul>{errors.map(err => <li key={err}>{err}</li>)}</ul>
            </div>} */}
        </form>
    )
}

export default AgentForm;