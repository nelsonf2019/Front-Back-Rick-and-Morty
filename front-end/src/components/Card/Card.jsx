import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorites, deleteFavorites } from '../../redux/action/actions';

const Card =({id, name, species, gender, image, onClose})=>{
  const [isFav, setIsFav] = useState(false);
  
  const myFavorites = useSelector((state)=> state.myFavorites);
  const dispatch = useDispatch();

  const handleFavorites=()=>{
    if(isFav){
      setIsFav(false);
      dispatch(deleteFavorites(id))
    }else{
      setIsFav(true)
      dispatch(addFavorites({id, name, species, gender, image}))
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
       setIsFav(true);
      }
    });
  }, [myFavorites]);
  return(
     
     <div className={styles.container}>
      {
           isFav ? (
            <button onClick={handleFavorites}>❤️</button>
         ) : (
            <button onClick={handleFavorites}>🤍</button>
         )
      }
      <button onClick={() => onClose(id)} className={styles.closeButton}>
        X
      </button>
      
      <Link to={`/detail/${id}`}>
        <h3 className={styles.positionName}>{name}</h3>
      </Link>
        <img className={styles.image} src={image} alt={name} />
        <h2 className={styles.species}>Species: {species}</h2>
        <h2 className={styles.gender}>Gender: {gender}</h2>      
     </div>
   
    )
}

export default Card;