import { VscMenu } from "react-icons/vsc";
import { navbarData } from "../../utils/data";

import styles from "./navbar.module.css";

const Navbar = () => {

  return (
    <section className={styles.navbar}>
      <section>
        <a href="IYKEIN TECH" className={styles.logo}>
          IYKEIN TECH
        </a>
      </section>
      <ul className={styles.navLists}>
        {navbarData.map((item) => (
          <li key={item.id} className={styles.navList}>
            {item.name}
          </li>
        ))}
      </ul>
      <VscMenu className={styles.menuIcon} />
    </section>
  );
};
export default Navbar;
