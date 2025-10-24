import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/authService";

export default function Navbar() {
  const loggedIn = isAuthenticated();

  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 max-w-6xl">
        <Link to="/" className="text-2xl font-bold">🎟 TicketMaster</Link>
        <div className="flex gap-4">
          {loggedIn ? (
            <>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              <Link to="/tickets" className="hover:underline">Tickets</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/signup" className="hover:underline">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
