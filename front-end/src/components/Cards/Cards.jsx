import Card from '../Card/Card'
import styles from './Cards.module.css'

//Cards recibe los datos por props desde APP para luego mostrarlos
const Cards =({characters, onClose})=>{
    return(
        <div className={styles.container}>
            {
                characters.map(({id,name,species,gender,image})=>{
                    return <span>
                        <Card
                            id={id}
                            key={id}
                            name={name}
                            species={species}
                            gender={gender}
                            image={image} 
                            onClose={onClose}                       
                            />
                    </span>
                })
            }
        </div>
    )
}

export default Cards;