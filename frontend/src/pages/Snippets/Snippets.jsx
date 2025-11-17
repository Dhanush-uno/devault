import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Snippets.module.css";

export default function Snippets() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const loadSnippets = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("https://backendofdevault.onrender.com/api/snippets", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setSnippets(res.data);
      } catch (err) {
        console.error("Failed to load snippets:", err);
      }
    };

    loadSnippets();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>My Snippets</h1>

      {snippets.length === 0 ? (
        <p>No snippets yet!</p>
      ) : (
        <div className={styles.list}>
          {snippets.map((s) => (
            <div key={s._id} className={styles.card}>
              <h3>{s.title}</h3>
              <pre>{s.code}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
