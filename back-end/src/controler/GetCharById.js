const axios = require("axios")
const URL = "https://rickandmortyapi.com/api"
//const URL ="https://be-a-rym.up.railway.app/api"
//const KEY = "72a627113ed2.d567c8800a09702015d4";

// const successH = (response, res) => {
//     const { id, image, name, gender, species } = response.data;
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ id, name, gender, species, image }));
// };
// const errorH = (error, res) => {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end(error.message);
// };

// //los parametros que recibe getCharacterById
// const getCharById =(res, id)=>{
  
//     //axios.get(`${URL}/character/${id}?key=${KEY}`)
//     axios.get(`${URL}/character/${id}`)
//     .then((response)=> successH(response, res))
//     .catch((error)=> errorH(error, res));
// };
const getCharById =(req, res)=>{
    const {id}  = req.params;
    axios.get(`${URL}/${id}`).then((response)=>{
        
    })
}

module.exports = getCharById;