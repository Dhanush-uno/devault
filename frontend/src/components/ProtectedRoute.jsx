import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // If no token → kick to login
  if (!token) return <Navigate to="/login" replace />;

  // If token exists → allow
  return children;
}
