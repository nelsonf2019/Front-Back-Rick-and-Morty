import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from './Detail.module.css'
import { Link } from "react-router-dom";
//import getCharDFeita

const Detail = () => {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(()=>{
    //const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const URL_BASE = "http://localhost:3002/rickandmorty/detail";
   // const KEY = "72a627113ed2.d567c8800a09702015d4";

    //axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => 
      axios(`${URL_BASE}/${detailId}`).then((response) =>
      setCharacter(response.data));
  }, [])
 
return (
    <div className={styles.container}>
      <button className={styles.closeButton}> <Link to='/home'>Home</Link>  </button>
      {character.name ? (
        <>
          <h2 className={styles.positionName}>{character.name}</h2>
          <p>{character.status}</p>
          <p className={styles.species}>{character.species}</p>
          <p>{character.gender}</p>
          {/* <p>{character.origin?.name}</p> */}
          <img className={styles.image} src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
