import Contacts from "./Contacts/Contacts";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Contacts />
    </footer>
  );
}

export default Footer;
