import React from "react";
import styles from "./ErrorMessage.module.css";

function ErrorMessage({ error }) {
  if (!error) return null;
  return <div className={styles.errorBox}>{error}</div>;
}

export default ErrorMessage;
