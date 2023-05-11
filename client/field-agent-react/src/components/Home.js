import { useNavigate } from "react-router-dom";

function Home() {
    
    const navigate = useNavigate();

    function handleViewAllAgents() {
        navigate("/agents")
    }

    return (
        <div className="container">
            <h2>Home</h2>
            <button className="btn btn-primary" onClick={handleViewAllAgents}>View All Agents</button>
        </div>
    )
}

export default Home;