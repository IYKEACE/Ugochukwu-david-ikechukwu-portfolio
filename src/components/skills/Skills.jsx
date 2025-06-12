import { skillsData } from "../../utils/data";
import styles from "./skills.module.css";
import { ImUserTie } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";

const Skills = () => {
  return (
    <div>
      <section className={styles.skillsContainer} id="about">
        <p>Get To Know More</p>
        <h2>About Me</h2>
        <section className={styles.skillsContent}>
          <section className={styles.topSkills}>
            <img src="/IYKEIN TECH.jpg" alt="logo" />
          </section>
          <section className={styles.bottomSkills}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <ImUserTie className={styles.icon} />
                <h3>Experience</h3>
                <p>2+ years</p>
                <p>
                  Frontend Development <br />& <br />
                  Backend Development
                </p>
              </div>
              <div className={styles.card}>
                <FaUsers className={styles.icon} />
                <h3>Education</h3>
                <p>B.Sc. Bachelor's Degree</p>
                <p>M.Sc. Master's Degree</p>
              </div>
            </div>

            <p className={styles.description}>
              Hi &#128075;, I'm Ugochukwu David Ikechukwu, a passionate Full
              Stack Developer with experience in both frontend and backend
              development. I specialize in creating dynamic, user-friendly
              websites and web applications, and I am deeply committed to
              writing clean, efficient code.As a full-stack developer, I bring a
              unique skill set that covers both the frontend and backend aspects
              of web development.
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};
export default Skills;
