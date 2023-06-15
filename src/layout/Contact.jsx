import styles from "./Contact.module.css";
import { Title } from "./styled/Title.style";
import { Submit } from "./styled/Submit.style";

export default function Contact() {
  return (
    <div id="Contact" className={styles.form}>
      <Title>Contato</Title>
      <form>
        <p>ianosampaio@gmail.com</p>

        <label htmlFor="nome">NOME:</label>
        <input type="text" name="nome" placeholder="Digite seu nome" />

        <label htmlFor="email">EMAIL:</label>
        <input type="text" name="email" placeholder="exemplo@exemplo.com" />

        <label htmlFor="tel">
          TELEFONE<span>(opcional):</span>
        </label>
        <input type="number" name="tel" placeholder="EX: +11 22 91234-5678" />

        <label htmlFor="mensage">MENSAGEM:</label>
        <textarea
          className={styles.msg}
          cols="30"
          rows="5"
          placeholder="Digite o projeto que deseja fazer"
        ></textarea>

        <Submit>Enviar</Submit>
      </form>
    </div>
  );
}
