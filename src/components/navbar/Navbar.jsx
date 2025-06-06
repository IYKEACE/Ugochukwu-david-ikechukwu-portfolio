import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.logo} logo-global`}>IYKEIN TECH</div>
      <div className={styles.links}>
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      {/* Move the toggle button here so it's always visible */}
      <button
        className={styles.toggleBtn}
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <div
        className={styles.mobileMenuIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </div>
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#project" onClick={() => setMenuOpen(false)}>
            Project
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
