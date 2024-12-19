// pages/contact.js
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contactez-moi</h1>
      <form>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
