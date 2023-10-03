import styles from "./Skills.module.css";
import { Container } from "./styled/Bar.style";
import { ProgressBar } from "./styled/progressBar.style";
import { Title } from "./styled/Title.style";

export default function Skills() {
  return (
    <section id="Skills" className={styles.skills}>
      <Title>Habilidades</Title>
      <div className={styles.tam}>
        <div className={styles.card}>
          <img src="../public/svg/figma.svg" alt="Figma" />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Figma </p>
            <p className={styles.card__description}>
              Plataforma de design colaborativo baseada na web que permite que
              equipes de designers criem, colaborem e prototipem interfaces de
              usuário e experiências de usuário de forma eficiente.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img src="../public/svg/react.svg" alt="React" />
          <div className={styles.card__content}>
            <p className={styles.card__title}>React</p>
            <p className={styles.card__description}>
              O ReactJS é uma biblioteca de JavaScript desenvolvida pelo
              Facebook que facilita a criação de interfaces de usuário
              interativas e reativas para aplicativos web.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img src="../public/svg/js.svg" alt="JS" />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Javascript</p>
            <p className={styles.card__description}>
              JavaScript é uma linguagem de programação amplamente utilizada na
              criação de conteúdo dinâmico e interativo para a web.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img src="../public/svg/sql.png" alt="SQL" />
          <div className={styles.card__content}>
            <p className={styles.card__title}>MySQL </p>
            <p className={styles.card__description}>
              MySQL é um sistema de gerenciamento de banco de dados relacional
              de código aberto amplamente utilizado. Ele permite armazenar,
              organizar e recuperar dados de forma eficiente em tabelas
              relacionais.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            className={styles.py}
            src="../public/svg/python-logo-only.png"
            alt="SQL"
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Python</p>
            <p className={styles.card__description}>
              Python é uma linguagem de programação de alto nível, de código
              aberto e versátil, conhecida por sua sintaxe clara e legível.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            className={styles.py}
            src="../public/svg/New_Power_BI_Logo.svg.png"
            alt="SQL"
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Power BI</p>
            <p className={styles.card__description}>
              Python é uma linguagem de programação de alto nível, de código
              aberto e versátil, conhecida por sua sintaxe clara e legível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
