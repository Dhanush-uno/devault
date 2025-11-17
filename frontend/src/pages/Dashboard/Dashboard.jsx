import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Welcome to DevVault!</p>
      </div>
      <div className={styles.main}>
        <div className={styles.card}>
          <h2>Snippets</h2>
          <p>View all your code snippets</p>
          <Link to="/snippets" className={styles.btn}>Go</Link>
        </div>
        <div className={styles.card}>
          <h2>Add Snippet</h2>
          <p>Add a new code snippet</p>
          <Link to="/add-snippet" className={styles.btn}>Go</Link>
        </div>
        <div className={styles.card}>
          <h2>Profile</h2>
          <p>Manage your account</p>
          <Link to="/profile" className={styles.btn}>Go</Link>
        </div>
      </div>
    </div>
  );
}
