import { useState } from "react";
import axios from "axios";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://backendofdevault.onrender.com/api/auth/signup", {
        name,
        email,
        password,
      });

      console.log("SIGNUP RESPONSE:", res.data);
      localStorage.setItem("token", res.data.token);

      alert("Signup successful!");
      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.msg || "Signup failed");
    }

    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Account</h2>
        <p className={styles.subtitle}>Join DevVault today</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className={styles.input}
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.btn} disabled={loading}>
            {loading ? "Creating..." : "Signup"}
          </button>
        </form>

        <p className={styles.switchText}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
