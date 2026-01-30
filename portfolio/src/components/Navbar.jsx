import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>SHIBIN's Portfolio</div>

        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>HOME</Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>ABOUT</Link>
          </li>
          <li>
            <Link to="/skills" className={styles.navLink}>SKILLS</Link>
          </li>
          <li>
            <Link to="/project" className={styles.navLink}>PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLink}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
