import styles from "./Form.module.css"
import { useState } from "react";
import {validate} from "./validation"

const Form =({login})=>{
    const [userData, setUserData] = useState({
        username:"",
        password:""
    });
    console.log(userData)
    const [errors, setErrors] = useState({});

    const handleInputChange=(event)=>{
       setErrors(validate({...userData, [event.target.name]: event.target.value}))
       setUserData({...userData, [event.target.name]: event.target.value})
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        login(userData)
    }
    return(
        <div className={styles.container}>
           <form onSubmit={handleSubmit}>
                
                <label htmlFor="username">Username</label>                
                <input className={styles.inputText} type="text" name="username" onChange={handleInputChange} value={userData.username}/>
                <p>{errors.username}</p>
               
                <label  htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleInputChange} value ={userData.password}/>
                <p>{errors.password}</p>
                 <hr />
                <button type="submit" className={styles.borderButton}>Aceptar</button>
           </form>
        </div>
    )
}

export default Form;