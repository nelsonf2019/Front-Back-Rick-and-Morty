import './App.css'
import Form from "./components/Form/Form"
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import { useEffect, useState } from 'react'
//useNavegate, muestra la url en el navegador
import { useLocation, useNavigate } from 'react-router-dom'
import Favorites from './components/Favorites/Favorites'
import Portafolio from './components/Portafolio/Portafolio' 
function App () {
  const [characters, setCharacters]=useState([])
  const location = useLocation();
  const navegate = useNavigate();
  const [access, setAccess] = useState(false)
  const username = "nel@gmail.com";
  const password = "nel1234";

  const login =(userData)=>{
    if(userData.username === username  && userData.password === password){
      setAccess(true);
      navegate("/home");
    }
  }
  useEffect(()=>{
    !access && navegate("/")
  },[access])
   //const URL_BASE = "https://be-a-rym.up.railway.app/api";
    //const URL_BASE ="http://localhost:3001/rickandmorty"
    //const KEY = "72a627113ed2.d567c8800a09702015d4";
  const onSearch=(id)=>{
    const URL_BASE = "http://localhost:3002/rickandmorty";
    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }   
   //?key=${KEY}
  // fetch(`${URL_BASE}/onsearch/${id}?key=${KEY}`)
    fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())  
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          //navegate('/')
        } else {
          alert("Algo salió mal");
        }
      });
  }
  const onClose =(id)=>{
    //solo mostrame todos los personajes menos el seleccionado, porq es el que se va
    //no genera un nuevo array
    setCharacters(characters.filter((char) => char.id !== id))
  }
//console.log(location.pathname)
  return (
    <div className='App' style={{ padding: '25px' }}>
      
      {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route
          path="/home"element={<Cards characters={characters} onClose={onClose} />}
          /> 
          <Route path='/about' element={ <About /> }/>
          <Route path='/portafolio' element={<Portafolio/>} />
          <Route path='/favorites' element={<Favorites />}/>
          Rout
          {/* Guarda el detailId en useParams osea el ud del personaje */}
          <Route path='/detail/:detailId' element={<Detail/>} /> 
      </Routes>

    </div>
  )
}

export default App
