import styles from "./Button.module.css";

export default function Button({ type = "button", onClick = () => {}, text }) {
  return (
    <>
      <button className={styles.sendButton} type={type} onClick={onClick}>
        <p className={styles.sendButtonText}>{text}</p>
      </button>
    </>
  );
}
