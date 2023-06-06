import styles from './Contact.module.css'

export default function Contact(){
    return(
        <div className={styles.form}>
            <h1>Contato</h1>
            <form>
                <p>ianosampaio@gmail.com</p>

                <label htmlFor="nome">NOME:</label>
                <input type="text" name='nome' placeholder='Digite seu nome'/>

                <label htmlFor="email">EMAIL:</label>
                <input type="text" name='email' placeholder='exemplo@exemplo.com'/>

                <label htmlFor="tel">TELEFONE<span>(opcional):</span></label>
                <input type="number" name='tel' placeholder='EX: +11 (22) 1234-5678'/>

                <label htmlFor="mensage">MENSAGEM:</label>
                <input className={styles.msg} type="text" name='mensage' placeholder='Digite o projeto que deseja fazer'/>
            </form>
        </div>
    )
}