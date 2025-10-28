import { Link, useNavigate } from "react-router-dom";
import { getTickets } from "../services/ticketService";
import { getCurrentUser, logout } from "../services/authService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  const tickets = getTickets();
  const navigate = useNavigate();
  const user = getCurrentUser();

  const openCount = tickets.filter(t => t.status === "open").length;
  const progressCount = tickets.filter(t => t.status === "in_progress").length;
  const closedCount = tickets.filter(t => t.status === "closed").length;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h2>Welcome, {user}</h2>
        <div className="stats">
          <div className="card green">
            <h3>Open Tickets</h3>
            <p>{openCount}</p>
          </div>
          <div className="card amber">
            <h3>In Progress</h3>
            <p>{progressCount}</p>
          </div>
          <div className="card gray">
            <h3>Closed</h3>
            <p>{closedCount}</p>
          </div>
        </div>
        <div className="actions">
          <Link to="/tickets" className="btn">Manage Tickets</Link>
          <button onClick={handleLogout} className="btn secondary">Logout</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
