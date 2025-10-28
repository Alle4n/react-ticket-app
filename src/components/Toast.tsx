import { Ticket } from "../types";

export default function TicketCard({
  ticket,
  onDelete,
}: {
  ticket: Ticket;
  onDelete: () => void;
}) {
  const colorMap = {
    open: "bg-green-100 text-green-800",
    in_progress: "bg-amber-100 text-amber-800",
    closed: "bg-gray-200 text-gray-800",
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 border">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{ticket.title}</h3>
        <span className={`px-2 py-1 rounded text-sm font-medium ${colorMap[ticket.status]}`}>
          {ticket.status.replace("_", " ")}
        </span>
      </div>
      {ticket.description && <p className="mt-2 text-gray-600">{ticket.description}</p>}
      <button
        onClick={onDelete}
        className="mt-3 text-red-500 hover:text-red-700 text-sm font-medium"
      >
        Delete
      </button>
    </div>
  );
}
