import { useLocation, Link } from "react-router-dom";

function Confirmation() {

  const location = useLocation();

  return (
    <div className="container">
      <p>:) {location.state ? location.state.msg : "Process completed successfully!"}</p>
      <Link to="/agents" type="button" className="btn btn-primary me-2">Thanks</Link>
    </div>
  );
}

export default Confirmation;