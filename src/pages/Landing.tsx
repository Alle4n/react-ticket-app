import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <section className="hero text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">TicketMaster</h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your support tickets easily and efficiently.
        </p>

        {/* 👇 Added section between <p> and <div className="buttons"> */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Simplify Your Workflow
          </h2>
          <img
            src="/assets/support-team.svg"
            alt="Support Team"
            className="mx-auto w-48 h-48 mb-4"
          />
          <p className="text-gray-500">
            Join thousands of users who trust TicketMaster for seamless ticket management.
          </p>
        </div>
        {/* 👆 End of added section */}

        <div className="buttons flex justify-center gap-4">
          <Link
            to="/login"
            className="btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn secondary border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Get Started
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
