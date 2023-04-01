// const http = require("http");// primero importamos el servidor
// const getCharById = require("../controler/GetCharById");//llamamos a la función
// const GetCharDetail = require("../controler/GetCharDetail")
// //luego creamos el servidor
// http.createServer((req, res)=>{
//   //esto res.setHeader('Access-Control-Allow-Origin', '*');
//   // se hacer para se pueda tener acceso por los cors sin problemas
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    let id = req.url.split("/").at(-1);
//    if(req.url.includes("onsearch")){
//     //obtenemos el id
//     getCharById(res,id)
//    }
//    if(req.url.includes("detail")){
//     //obtenemos el id
//     let id = req.url.split("/").at(-1);
//     GetCharDetail(res,id)
//    }
// }).listen(3001, "localhost")

// // http.createServer((req,res)=>{
// //   res.end(JSON.stringify(objeto));
// // })
const express = require("express");
const app = express();// creamos APP y ejecutamos express con esto ()
const axios = require("axios");
const cors = require("cors")
app.use(cors())
app.use(express.json())

app.get('/rickandmorty/character/:id', async (req,res)=>{
  
  try {
    const {id} = req.params;
//https://rickandmortyapi.com/api/character/1
    const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
    const data = response.data;

    const infoCharacter = {
      id: data.id,
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image
    }
    res.status(200).json(infoCharacter)
  } catch (error) {
    res.status(404).send(error.message)
  }
   
})

app.get('/rickandmorty/detail/:detailId', async (req, res)=>{
 
  try {
       const { detailId } = req.params;
       const { data } = await axios(`https://rickandmortyapi.com/api/character/${detailId}`);

       const inforCharacterDetail ={
          name: data.name,
          status: data.satus,
          species: data.species,
          gender: data.gender,
          origin: data.origin.name,
          image: data.image
       }  

        res.status(200).json(inforCharacterDetail)

      } catch (error) {
        res.status(404).send(error.message);
  }
  // try {
  //   const {detailId} = req.params;
  //   const response = await axios(`https://rickandmortyapi.com/api/character/${detailId}`).data

  //     const inforCharacterDetail ={

  //     }

  //   }

  // } catch (error) {
    
  // }

})

let fav = []

app.get("/rickandmorty/fav", (req,res)=>{
   
  res.status(200).json(fav)

})

app.post("/rickandmorty/fav", (req, res) =>{
     
    fav.push(req.body);

    res.status(200).send("se guardaron correctamente los datos")
})

app.delete("/rickandmorty/fav/:id", (req, res)=>{
  
  const { id } = req.params;

  const favFilter = fav.filter(ele => ele.id !== parseInt(id));
  fav = favFilter;
  res.status(200).send("Dato eliminado")
})



module.exports = app;