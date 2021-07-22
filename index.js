var nameComplete = document.getElementById('nameComplete');
var email = document.getElementById('email');
var password = document.getElementById('password');
var error = document.getElementById('error');

function validar(){


    


    console.log('guardando datos');
    formulario.reset();

    return false;
}





var mensajeError = [];

    if(nameComplete.value === '') {
    mensajeError.push('ingresa tu nombre completo');
} 

    if(email.value === null || email.value === '') {         
        mensajeError.push('ingresa tu email');
    } 

    if(password.value === null || password.value === '') {
        mensajeError.push('ingresa tu password');
    }

    error.innerHTML = mensajeError.join(' , ');