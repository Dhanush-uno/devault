import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> | 
      {token ? (
        <>
          <Link to="/snippets"> Snippets</Link> | 
          <Link to="/add"> Add Snippet</Link> | 
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login"> Login</Link> | 
          <Link to="/register"> Register</Link>
        </>
      )}
    </nav>
  );
}
