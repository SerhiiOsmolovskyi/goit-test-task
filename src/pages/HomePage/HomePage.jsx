import styles from "./HomePage.module.css";
import camperImage from "../../assets/images/camper-van-8360614_960_720.png";

export default function HomePage() {
  return (
    <section className={styles.section}>
      <div className={styles.welcomePageContainer}>
        <h1 className={styles.title}>Welcome to Camper Life!</h1>
        <p className={styles.text}>Thank you for visiting us!</p>
        <img
          src={camperImage}
          alt="Camper Van"
          className={styles.camperImage}
        />
      </div>
    </section>
  );
}
