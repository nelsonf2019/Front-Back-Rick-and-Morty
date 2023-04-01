import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar";

const Nav =({onSearch})=>{
    return(
        <div className={styles.container}>
            <Link to='home' className={styles.title}>
            <p className={styles.link}>Home</p>
            
            </Link>
            <Link to ='about' className={styles.title}>
                <p >About</p>
            </Link>
            <Link to ='portafolio' className={styles.title}>
                <p >Portafolio</p>
            </Link>
            <Link to="favorites" className={styles.title}>
                <p>Favorites</p>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;