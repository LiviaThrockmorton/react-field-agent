import { useNavigate } from "react-router-dom"

function Agent({agent}) {

    const navigate = useNavigate();

    function handleDelete() {
        navigate(`/delete/${agent.agentId}`);
    }

    function handleEdit() {
        navigate(`/edit/${agent.agentId}`);
    }

    return (
        <div className='row mb-2'>
            <div className='col'>{agent.agentId}</div>
            <div className='col'>{agent.firstName}</div>
            <div className='col'>{agent.middleName}</div>
            <div className='col'>{agent.lastName}</div>
            <div className='col'>{agent.dob}</div>
            <div className='col'>{agent.heightInInches}</div>
            <div className='col-3'>
                <button className='btn btn-danger me-2' onClick={handleDelete}>Delete</button>
                <button className='btn btn-info' onClick={handleEdit}>Edit</button>
            </div>
        </div>
    );
}

export default Agent;