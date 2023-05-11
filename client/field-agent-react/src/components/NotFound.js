import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
    return (
      <main>
        <h1>404</h1>
        <p>We couldn't find that page...</p>
        <button onClick={() => navigate(-1)}  className="btn btn-primary me-2">Go Back</button>
      </main>
    );
  }
  
  export default NotFound;