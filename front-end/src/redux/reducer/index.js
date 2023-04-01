import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER  } from "../action/ActionTypes"

const initialState={
    myFavorites:[],
    allCharacters:[]
}

const reducer =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_FAVORITES:
            
         return{
            ...state,
            myFavorites: [...state.allCharacters, action.payload],
            allCharacters:  [...state.myFavorites, action.payload]
            
         };
         case DELETE_FAVORITES:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((char)=> char.id !== action.payload)
            }
         case FILTER:
            const filterChar = state.allCharacters.filter(character=> character.gender === action.payload )
            return{
                  ...state,
                  myFavorites: filterChar
                }
         case ORDER:
            return{
                 ...state,
                 myFavorites: action.payload === "Ascendente" ? state.allCharacters.sort((a,b)=> a.id - b.id): state.allCharacters.sort((a,b)=> b.id - a.id)
                }
        default:
            return{
                ...state
            }
    }
}

export default reducer;