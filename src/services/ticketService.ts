import { Ticket } from "../types";

const TICKETS_KEY = "tickets";

export function getTickets(): Ticket[] {
  const data = localStorage.getItem(TICKETS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTickets(tickets: Ticket[]) {
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}

export function createTicket(ticket: Ticket) {
  const tickets = getTickets();
  tickets.push({ ...ticket, id: Date.now().toString() });
  saveTickets(tickets);
}

export function updateTicket(id: string, updated: Partial<Ticket>) {
  const tickets = getTickets().map(t =>
    t.id === id ? { ...t, ...updated } : t
  );
  saveTickets(tickets);
}

export function deleteTicket(id: string) {
  const tickets = getTickets().filter(t => t.id !== id);
  saveTickets(tickets);
}
