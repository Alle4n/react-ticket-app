import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>TicketMaster</h1>
        <p>Manage your support tickets easily and efficiently.</p>
        <div className="buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn secondary">Get Started</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
