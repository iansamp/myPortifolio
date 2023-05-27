import styles from './Home.module.css';
import Img from '../../public/img/ian.png';

export default function Home(){
    return(
        <div className={styles.home}>
            <div>
                <img src={Img} alt="perfil" />
                <p>Sou um desenvolvedor Full-stack Júnior com experiência em JavaScript, ReactJS e SQL. Tenho habilidades tanto no desenvolvimento de interfaces de usuário dinâmicas utilizando ReactJS, como no desenvolvimento de APIs e integração com bancos de dados. Possuo conhecimentos em banco de dados MySQL, realizando consultas e gerenciamento de dados. Estou sempre buscando aprender e me atualizar em novas tecnologias e tendências de mercado para oferecer soluções completas e eficientes.</p>
            </div>
        </div>
    )
}