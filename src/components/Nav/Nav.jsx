import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/catalog" className={styles.link}>
            Catalog
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/favorites" className={styles.link}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
