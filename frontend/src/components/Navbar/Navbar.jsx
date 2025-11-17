import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>DevVault</div>
      <div className={styles.navLinks}>
        <a href="/" className={styles.navLink}>Dashboard</a>
        <a href="/snippets" className={styles.navLink}>Snippets</a>
        <a href="/add-snippet" className={styles.navLink}>Add Snippet</a>
        <a href="/login" className={styles.navLink}>Login</a>
      </div>
    </nav>
  );
}
