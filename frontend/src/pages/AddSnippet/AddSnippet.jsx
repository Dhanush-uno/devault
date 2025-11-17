import { useState } from "react";
import axios from "axios";
import styles from "./AddSnippet.module.css";

export default function AddSnippet() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://backendofdevault.onrender.com/api/snippets",
        { title, code },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Snippet saved:", res.data); // 👈 NOW YOU SEE IT
      alert("Snippet added successfully!");

      setTitle("");
      setCode("");

    } catch (error) {
      console.error("Failed to add snippet:", error.response?.data || error);
      alert("Failed to add snippet");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Add New Snippet</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Snippet title"
            required
          />
        </label>

        <label>
          Code
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Your code here..."
            rows={10}
            required
          />
        </label>

        <button type="submit">Add Snippet</button>
      </form>
    </div>
  );
}
