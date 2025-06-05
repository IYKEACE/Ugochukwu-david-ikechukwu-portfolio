import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      © {new Date().getFullYear()} Ugochukwu David Ikechukwu. All rights
      reserved.
    </p>
  </footer>
);

export default Footer;
