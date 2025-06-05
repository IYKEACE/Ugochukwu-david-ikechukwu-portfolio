import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div>
      <section className={styles.projectContainer} id="project">
        <p>Browse my recent</p>
        <h2>Projects</h2>
        <div className={styles.projectContent}>
          <div className={styles.projectCard}>
            <img src="/public/estate images.png" alt="project one" />
            <h3>Project One</h3>
            <div className={styles.buttons}>
              <a
                href="https://github.com/IYKEACE/Estate-landing-page"
                className={styles.btns}
              >
                Github
              </a>
              <a
                href="https://iykeace.github.io/Estate-landing-page/"
                className={styles.btns}
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/public/srudent-img.png" alt="project one" />
            <h3>Project Two</h3>
            <div className={styles.buttons}>
              <a
                href="https://github.com/IYKEACE/student-login-form"
                className={styles.btns}
              >
                Github
              </a>
              <a
                href="https://iykeace.github.io/student-login-form/"
                className={styles.btns}
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/public/landingpage.png" alt="project one" />
            <h3>Project Three</h3>
            <div className={styles.buttons}>
              <a
                href="https://github.com/IYKEACE/real-landing-page"
                className={styles.btns}
              >
                Github
              </a>
              <a
                href="https://iykeace.github.io/real-landing-page/"
                className={styles.btns}
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
