const SESSION_KEY = "ticketapp_session";

export function login(username: string, password: string) {
  const user = localStorage.getItem("user_" + username);
  if (!user) throw new Error("Invalid credentials");
  const parsed = JSON.parse(user);
  if (parsed.password !== password) throw new Error("Invalid credentials");
  localStorage.setItem(SESSION_KEY, JSON.stringify({ username }));
}

export function signup(username: string, password: string) {
  if (localStorage.getItem("user_" + username))
    throw new Error("User already exists");
  localStorage.setItem("user_" + username, JSON.stringify({ username, password }));
  login(username, password);
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem(SESSION_KEY);
}

export function getCurrentUser() {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session).username : null;
}
