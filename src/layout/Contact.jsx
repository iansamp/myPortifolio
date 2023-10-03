import styles from "./Contact.module.css";
import { Title } from "./styled/Title.style";
import { Submit } from "./styled/Submit.style";

export default function Contact() {
  return (
    <div id="Contact" className={styles.form}>
      <Title>Contato</Title>
      <form>
        <p>ianosampaio@gmail.com</p>
      </form>
    </div>
  );
}
