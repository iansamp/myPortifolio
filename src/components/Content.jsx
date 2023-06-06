import styles from './Content.module.css'
import Navbar from './Navbar'
import Home from '../layout/Home'
import Biography from '../layout/Biography'
import Skills from '../layout/Skills'
import Portfolio from '../layout/Portfolio'
import Contact from '../layout/Contact'

export default function Content(){
    return(
        <div className={styles.content}>
            <Navbar/>
            <Home/>
            <Biography/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}