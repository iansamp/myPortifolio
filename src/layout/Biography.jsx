import styles from "./Biography.module.css";
import Splid from "../components/Splide";
import { Title } from "./styled/Title.style";

export default function Biography() {
  return (
    <div id="Biography" className={styles.biography}>
      <Title>Educação & Experiencia</Title>
      <div>
        <div className={styles.info}>
          <h2>UNIASSELVI</h2>
          <span>Formando em Análise e Desenvolvimento de Sistemas</span>
          <p>10/2022 - 05/2025</p>
        </div>
        <div className={styles.imgs}>
          <Splid />
        </div>
      </div>
    </div>
  );
}
