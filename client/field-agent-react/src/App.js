import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agents from "./components/Agents";
import Home from "./components/Home";
import ConfirmSuccess from "./components/ConfirmSuccess";
import ConfirmDelete from "./components/ConfirmDelete";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import AgentForm from "./components/AgentForm";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/error" element={<Error />} />
          <Route path="/agents/add" element={<AgentForm />} />
          <Route path="/edit/:agentId" element={<AgentForm />} />
          <Route path="/delete/:agentId" element={<ConfirmDelete />} />
          <Route path="/success" element={<ConfirmSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;