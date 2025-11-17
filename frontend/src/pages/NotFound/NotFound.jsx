import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className={styles.btn}>
        Go Home
      </Link>
    </div>
  );
}
