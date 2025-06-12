import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroContainer} id="home">
      <section className={styles.heroContent}>
        <section className={styles.topHeroContent}>
          <img
            src="/IYKEIN TECH.jpg"
            alt="IYKEIN TECH"
            className={styles.image}
          />
        </section>
        <section className={styles.bottomHeroContent}>
          <p className={styles.hello}>Hello &#128075; I'm</p>
          <h2 className={styles.name}>Ugochukwu David IKechukwu</h2>
          <p className={styles.skill}>A Frontend Developer</p>
          <div className={styles.btn}>
            <a
              href="/public/Ugochukwu David Cv.pdf"
              download="MY CV.pdf"
              className={styles.cv}
            >
              Download CV
            </a>
            <button
              className={styles.info}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact info
            </button>
            {/* <button className={styles.info}>Contact info</button> */}
          </div>
          <div className={styles.icon}>
            <a
              href="https://www.linkedin.com/in/ikechukwu-ugochukwu/"
              target="_blank"
            >
              <FaLinkedin className="fa-2x" />
            </a>
            <a href="https://github.com/IYKEACE" target="_blank">
              <FaGithub className="fa-2x" />
            </a>
            <a href="https://x.com/ikechukwuu338" target="_blank">
              <FaSquareXTwitter className="fa-2x" />
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Hero;
