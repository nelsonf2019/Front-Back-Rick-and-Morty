import { useSelector, useDispatch } from "react-redux";
import Card from '../Card/Card'
import { orderCards, filterCards } from "../../redux/action/actions";

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites); // seleccionar el estado de redux
  const dispatch = useDispatch();

  const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value))
  }
  const handlefilter = (event)=>{
   dispatch(filterCards(event.target.value))
  }
  return (
    <div style={{ display: "flex" }}>
         <div>
        <select onChange={handleOrder} >
          <option value="Order" disabled="disabled">Order by</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlefilter}>
          <option value="filter" disabled="disabled">Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Generless">Generless</option>
        </select>
        
      </div>
      {
      myFavorites.map((elem) =>{
        <Card
          name={elem.name}
          species={elem.species}
          gender={elem.gender}
          image={elem.image}
          id={elem.id}
          key={elem.id}
          onClose={() => alert("Para eliminar toca el corazon")}
        />
      }
        
      )}
    </div>
  );
}
