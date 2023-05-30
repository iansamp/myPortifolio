import styles from './Biography.module.css'
import Splid from '../components/Splide'


export default function Biography(){
    return(
        <div className={styles.biography}>
                <h1>Educação & Experiencia</h1>
            <div>
                <div className={styles.info}>
                    <h2>UNIASSELVI</h2>
                    <span>Formando em Análise e Desenvolvimento de Sistemas</span>
                    <p>10/2022 - 12/2024</p>
                </div>
                <div className={styles.imgs}>
                    <Splid/>
                </div>
            </div>
        </div>
    )
}