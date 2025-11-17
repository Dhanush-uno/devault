import { useState } from "react";
import styles from "./AddSnippet.module.css";


export default function AddSnippet() {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log values
    console.log({ title, language, code });
    alert("Snippet added!");
    setTitle("");
    setLanguage("");
    setCode("");
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
          Language
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="e.g., JavaScript, Python"
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
