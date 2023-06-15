import styles from './Navbar.module.css'

export default function Navbar(){
    return(



        <div className={styles.navbar}>
            <section>
                <h1>Ian Sampaio</h1>
                <nav>
                    <ul>
                        <li><a href="http://localhost:5173/#Home">Home</a></li>
                        <li><a href="http://localhost:5173/#Biography">Biografia</a></li>
                        <li><a href="http://localhost:5173/#Skills">Habilidades</a></li>
                        <li><a href="http://localhost:5173/#Portfolio">Portfólio</a></li>
                        <li><a href="http://localhost:5173/#Contact">Contato</a></li>
                    </ul>
                </nav>
                <div>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/ian.sampaio015/" target='_blank'>
                                    <img src="../public/svg/instagram.svg" alt="instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ian-sampaio-204483246/" target='_blank'>
                                    <img src="../public/svg/linkedin.svg" alt="linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/iansamp" target='_blank'>
                                    <img src="../public/svg/github.svg" alt="github" />
                                </a>
                            </li>
                        </ul>
                </div>
                <footer>
                    <p>© 2023 Ian S. Todos os direitos reservados</p>
                </footer>
            </section>
        </div>
    )
}