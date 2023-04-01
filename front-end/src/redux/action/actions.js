import { ADD_FAVORITES, DELETE_FAVORITES,FILTER, ORDER } from "./ActionTypes";
import axios from "axios"
export const addFavorites=(character)=>{
    // return{
    //     action:ADD_FAVORITES, payload:character
    // }
    return async (dispatch) =>{
      const response =  await axios.post("http://localhost:3002/rickandmorty/fav", character)
      const data = response.data;
      return dispatch({
        type : ADD_FAVORITES,
        payload: data
      })
    }
}

export const deleteFavorites=(id)=>{
    // return{
    //     action:DELETE_FAVORITES, payload: id
    // }
    return async (dispatch)=>{
        const response = await axios.delete(`http://localhost:3002/rickandmorty/fav/${id}`)
        const data = response.data;
        return dispatch({
            type: DELETE_FAVORITES,
            payload: data
        })
    }
}
export const filterCards =(gender)=>{
    return{
      type: FILTER, payload: gender
    }
  }
  
  export const orderCards =(id)=>{
      return{
        action:ORDER, payload:id
      }
  }