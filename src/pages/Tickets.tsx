import { useState } from "react";
import { Ticket } from "../types";
import {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../services/ticketService";
import TicketCard from "../components/TicketCard";
import Toast from "../components/Toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tickets() {
  const [tickets, setTickets] = useState<Ticket[]>(getTickets());
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<"open" | "in_progress" | "closed">("open");
  const [description, setDescription] = useState("");
  const [toast, setToast] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setToast("Title is required");
      return;
    }
    createTicket({ id: "", title, description, status });
    setTickets(getTickets());
    setTitle("");
    setDescription("");
    setToast("Ticket created successfully!");
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      deleteTicket(id);
      setTickets(getTickets());
      setToast("Ticket deleted");
    }
  };

  return (
    <>
      <Navbar />
      <div className="tickets-page">
        <h2>Ticket Management</h2>
        <form onSubmit={handleCreate} className="ticket-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          <button type="submit" className="btn">Create Ticket</button>
        </form>

        <div className="ticket-list">
          {tickets.length > 0 ? (
            tickets.map((t) => (
              <TicketCard
                key={t.id}
                ticket={t}
                onDelete={() => handleDelete(t.id)}
              />
            ))
          ) : (
            <p>No tickets available.</p>
          )}
        </div>
      </div>
      <Footer />
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </>
  );
}
