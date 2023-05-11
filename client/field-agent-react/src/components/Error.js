import { Link, useNavigate } from "react-router-dom";

function Error() {

  const navigate = useNavigate();

  return (
    <main>
      <h1>Error</h1>
      <p>Make sure all fields are valid.</p>
      <div>
        <button onClick={() => navigate(-1)}  className="btn btn-primary me-2">Try Again</button>
        <Link to="/agents" type="button" className="btn btn-warning">View All Agents</Link>
      </div>
    </main>
  );
}

export default Error;