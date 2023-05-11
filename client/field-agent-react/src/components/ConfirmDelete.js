import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteById, findById } from "../services/AgentService";

function ConfirmDelete() {

    const [agent, setAgent] = useState();
    const navigate = useNavigate();
    const { agentId } = useParams();

    useEffect(() => {
        if (agentId) {
            findById(agentId)
                .then(setAgent)
                .catch(() => navigate("/"));
        } else {
            navigate("/");
        }
    }, [agentId, navigate])

    const handleCancel = () => navigate("/agents");
    
    const handleDelete = () => {
        deleteById(agent.agentId)
            .finally(() => navigate("/agents"));
            
    };

    return (
        <>
            <div  className="alert alert-danger">
                Are you sure you want to delete {agent && agent.agentId}?
            </div>
            <div>
                <button onClick={handleDelete}  className="btn btn-danger me-2">Delete</button>
                <button onClick={handleCancel} className="btn btn-warning">Cancel</button>
            </div>
        </>
    )
}

export default ConfirmDelete;

//.then(() => navigate("/"))
//.catch(() => navigate("/error", { state: { msg: "Something went wrong :(" } }));