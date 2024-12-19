// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import profilePic from '../public/images/profile.jpg';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Portfolio de développeur" />
      </Head>

      <main className={styles.main}>
        <h1>Bienvenue sur mon portfolio</h1>
        <Image src={profilePic} alt="Photo de profil" width={150} height={150} />
        <p>Développeur Full-stack passionné par la technologie.</p>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Mon Portfolio</p>
      </footer>
    </div>
  );
};

export default Home;
