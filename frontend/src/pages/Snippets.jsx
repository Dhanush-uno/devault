import { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

export default function Snippets() {
  const { token } = useAuth();
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    axios
      .get("/snippets", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setSnippets(res.data));
  }, []);

  return (
    <div>
      <h2>Your Snippets</h2>
      {snippets.map((s) => (
        <div key={s._id}>
          <h3>{s.title}</h3>
          <pre>{s.code}</pre>
        </div>
      ))}
    </div>
  );
}
