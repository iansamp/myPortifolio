import styles from './Biography.module.css'

export default function Biography(){
    return(
        <div className={styles.biography}>
            <div>
                <h1>Educação & Experiencia</h1>
                <div className={styles.info}>
                    <h2>UNIASSELVI</h2>
                    <span>Formando em Análise e Desenvolvimento de Sistemas</span>
                    <p>10/2022 - 12/2024</p>
                </div>
                <div className={styles.imgs}>
                    <img src="../public/img/discover-conectar.jpg" alt="" />
                    <img src="../public/img/discover-fundamentar.jpg" alt="" />
                    <img src="../public/img/discover-especializar.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}