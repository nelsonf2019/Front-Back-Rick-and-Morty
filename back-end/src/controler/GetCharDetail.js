const axios = require("axios");
const URL = "https://rickandmortyapi.com/api"
//const URL ="https://be-a-rym.up.railway.app/api"
//const KEY = "72a627113ed2.d567c8800a09702015d4";

const successH =(response, res)=>{
    const {name, gender, status, origin, species, image} = response.data;
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify({name, gender, status, origin, species, image}))
}
const errorH = (error, res)=> {
    res.writeHead(500, {"Content-Type":"text/plain"});
    res.end(error.message);
}
const GetCharDetail =(res, id) =>{
    //axios.get(`${URL}/character/${id}?key=${KEY}`)
    axios.get(`${URL}/character/${id}`)
    .then((response)=> successH(response, res))
    .catch((error)=> errorH(error, res));   
}


module.exports = GetCharDetail;