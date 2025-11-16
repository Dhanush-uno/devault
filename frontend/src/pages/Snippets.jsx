import { useEffect, useState } from "react";
import axios from "axios";

export default function Snippets() {
  const [snippets, setSnippets] = useState([]);

  const load = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/snippets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSnippets(res.data);
    } catch (err) {
      console.log("Error:", err);
      alert("Unauthorized / Token missing");
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Snippets</h2>
      <hr />

      {snippets.length === 0 ? (
        <p>No snippets found</p>
      ) : (
        snippets.map((s) => (
          <div key={s._id} style={{ marginBottom: "15px" }}>
            <h3>{s.title}</h3>
            <p>{s.code}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
