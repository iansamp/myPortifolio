import styles from './Content.module.css'
import Navbar from './Navbar'
import Home from '../layout/Home'
import Biography from '../layout/Biography'

export default function Content(){
    return(
        <div className={styles.content}>
            <Navbar/>
            <Home/>
            <Biography/>
        </div>
    )
}