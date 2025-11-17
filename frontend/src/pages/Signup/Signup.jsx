import React, { useState } from "react";
import styles from "./Signup.module.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ name, email, password });
    // Simulate API call
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Signup</h2>
        <p className={styles.subtitle}>Create your account</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <p className={styles.switchText}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
