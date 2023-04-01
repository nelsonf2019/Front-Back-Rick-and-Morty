const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;


export function validate(objUser) {
    const errors = {}
    if(!regexEmail.test(objUser.username)){
        errors.username = "El usuario debe ser un email"
    }else if(!objUser.username){
        errors.username = "El nombre de usuario no puede estar vacío"
    }else if(objUser.username.length > 35){
        errors.username = "El nombre de usuario no puede tener más de 35 caracteres"
    }
    if (!regexPassword.test(objUser.password)) {
        errors.password = "La contraseña debe tener al menos un número";
      } else if (objUser.password.length < 6 || objUser.password.length > 10) {
        errors.password =
          "La contraseña debe tener un longitud entre 6 y 10 caracteres";
      }
    return errors;
}

