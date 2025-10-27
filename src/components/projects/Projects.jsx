import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div>
      <section className={styles.projectContainer} id="project">
        <p>Browse my recent</p>
        <h2>Projects</h2>
        <div className={styles.projectContent}>
          <div className={styles.projectCard}>
            <img src="/pasifik.png" alt="project one" />
            <h3>Pasifik Project</h3>
            <div className={styles.buttons}>
              <a
                href="https://github.com/IYKEACE/pasifik-project"
                target="_blank"
                className={styles.btns}
              >
                Github
              </a>
              <a
                href="https://pasifik-project.vercel.app/"
                target="_blank"
                className={styles.btns}
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/srudent-img.png" alt="project two" />
            <h3>Project Two</h3>
            <div className={styles.buttons}>
              <a
                href="https://github.com/IYKEACE/student-login-form"
                target="_blank"
                className={styles.btns}
              >
                Github
              </a>
              <a
                href="https://iykeace.github.io/student-login-form/"
                target="_blank"
                className={styles.btns}
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/portfolio bspecial.png" alt="project three" />
            <h3>Bspecial Projects</h3>
            <div className={styles.buttons}>
              <a
                href="https://github.com/IYKEACE/BSpecialAviation"
                target="_blank"
                className={styles.btns}
              >
                Github
              </a>
              <a
                href="https://b-special-973p.vercel.app/"
                target="_blank"
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
