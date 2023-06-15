import styles from "./Skills.module.css";
import { Container } from "./styled/Bar.style";
import { ProgressBar } from "./styled/progressBar.style";
import { Title } from './styled/Title.style'


export default function Skills(){
    return(
        <section id="Skills" className={styles.skills}>
            <Title>Habilidades</Title>
            <Container>
                <ProgressBar Percent="80%">
                    <img src="../public/svg/figma.svg" alt="Figma" />
                    <div>
                        <p>Figma</p>
                        <p>80%</p>
                    </div>
                </ProgressBar>
            </Container>

            <Container>
                <ProgressBar Percent="85%">
                    <img src="../public/svg/react.svg" alt="React" />
                    <div>
                        <p>React</p>
                        <p>85%</p>
                    </div>
                </ProgressBar>
            </Container>

            <Container>
                <ProgressBar Percent="90%">
                    <img src="../public/svg/js.svg" alt="JS" />
                    <div>
                        <p>Javascript</p>
                        <p>90%</p>
                    </div>
                </ProgressBar>
            </Container>

            <Container>
                <ProgressBar Percent="85%">
                    <img src="../public/svg/sql.png" alt="SQL" />
                    <div>
                        <p>SQL</p>
                        <p>85%</p>
                    </div>
                </ProgressBar>
            </Container>

            <Container>
                <ProgressBar Percent="75%">
                    <img src="../public/svg/wordpress.svg" alt="Wordpress" />
                    <div>
                        <p>Wordpress</p>
                        <p>75%</p>
                    </div>
                </ProgressBar>
            </Container>
        </section>
    )
}