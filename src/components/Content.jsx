import styles from './Content.module.css'
import Navbar from './Navbar'
import Home from './Home'

export default function Content(){
    return(
        <div className={styles.content}>
            <Navbar/>
            <Home/>
        </div>
    )
}