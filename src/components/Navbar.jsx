import styles from './Navbar.module.css'

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <section>
                <h1>Ian Sampaio</h1>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Biografia</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Potifolio</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
                <div>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/ian.sampaio015/" target='_blank'>
                                    <img src="../public/svg/icons8-instagram.svg" alt="instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ian-sampaio-204483246/" target='_blank'>
                                    <img src="../public/svg/icons8-linkedin.svg" alt="linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/iansamp" target='_blank'>
                                    <img src="../public/svg/icons8-github.svg" alt="github" />
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