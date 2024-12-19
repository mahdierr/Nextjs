// pages/projects.js
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>Mes Projets</h1>
      <ul>
        <li>Projet 1: Application Web</li>
        <li>Projet 2: Site e-commerce</li>
        <li>Projet 3: Blog interactif</li>
      </ul>
    </div>
  );
};

export default Projects;
