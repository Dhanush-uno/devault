import { useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

export default function AddSnippet() {
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "/snippets",
      { title, code },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert("Snippet Added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Snippet</h2>

      <input
        type="text"
        placeholder="Snippet title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your code here"
        rows="10"
        onChange={(e) => setCode(e.target.value)}
      ></textarea>

      <button type="submit">Add Snippet</button>
    </form>
  );
}
