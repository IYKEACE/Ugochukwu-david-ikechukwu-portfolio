import React from "react";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div>
      <section className={styles.experienceContainer} id="experience">
        <p>Explore More</p>
        <h2>Experience</h2>
        <section className={styles.experienceContent}>
          <div className={styles.experiences}>
            <div className={styles.experience}>
              <h3>FRONTEND DEVELOPMENT</h3>
              <div className={styles.marks}>
                <div className={styles.mark}>
                  <img
                    src="/public/html5-original.svg"
                    alt="HTML"
                    className={styles.logo}
                  />
                  <div>
                    <h4>HTML</h4>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className={styles.mark}>
                  <img src="/public/css3-original.svg" alt="CSS" className={styles.logo} />
                  <div>
                    <h4>CSS</h4>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className={styles.mark}>
                  <img
                    src="/public/javascript-original.svg"
                    alt="JavaScript"
                    className={styles.logo}
                  />
                  <div>
                    <h4>JavaScript</h4>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className={styles.mark}>
                  <img
                    src="/public/react-original.svg"
                    alt="React"
                    className={styles.logo}
                  />
                  <div>
                    <h4>React</h4>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className={styles.mark}>
                  <img
                    src="/public/nextjs-original.svg"
                    alt="Next.js"
                    className={styles.logo}
                  />
                  <div>
                    <h4>Next.js</h4>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.experience}>
              <h3>BACKEND DEVELOPMENT</h3>
              <div className={styles.marks}>
                <div className={styles.mark}>
                  <img
                    src="/public/nodejs-original.svg"
                    alt="Node js"
                    className={styles.logo}
                  />
                  <div>
                    <h4>NODE.JS</h4>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className={styles.mark}>
                  <img
                    src="/public/express-original.svg"
                    alt="Express"
                    className={styles.logo}
                  />
                  <div>
                    <h4>EXPRESS</h4>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className={styles.mark}>
                  <img
                    src="/public/mongodb-original.svg"
                    alt="Express"
                    className={styles.logo}
                  />
                  <div>
                    <h4>MONGO DB</h4>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className={styles.mark}>
                  <img
                    src="/public/git-original.svg"
                    alt="Express"
                    className={styles.logo}
                  />
                  <div>
                    <h4>GIT</h4>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className={styles.mark}>
                  <img
                    src="/public/postgresql-original.svg"
                    alt="Express"
                    className={styles.logo}
                  />
                  <div>
                    <h4>POSTGRESQL</h4>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Experience;
