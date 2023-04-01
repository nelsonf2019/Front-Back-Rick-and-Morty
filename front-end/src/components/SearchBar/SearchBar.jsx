import { useState } from "react"
import styles from './SearchBar.module.css'

//recibe la props onSearch en el componente
const SearchBar =({ onSearch })=>{
    const [id, setId] = useState("");

    const handleChange=(event)=>{
        setId(event.target.value)
    }

    return(
        <div className={styles.bar}>
            <input type="search" onChange={handleChange} className={styles.searchInput}/>
            <button onClick={()=> onSearch(id)} className={styles.searchButton}>Agregar</button>
        </div>
    )
}

export default SearchBar;