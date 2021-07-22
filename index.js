// var nameComplete = document.getElementById('nameComplete');
// var email = document.getElementById('email');
// var password = document.getElementById('password');
// var error = document.getElementById('error');

function validar(){


    let nameComplete = document.forms["formulario"]["nameComplete"].value;
    if(nameComplete == "") {
        alert("Ingresa tu nombre");
        return false;
    } else if (nameComplete.length<=6) {
        alert("Escribe tu nombre completo")
    }

    let email = document.forms["formulario"]["nameComplete"].value;
    if(nameComplete == "") {
        alert("Ingresa tu nombre");
        return false;
    } else if (nameComplete.length<=6) {
        alert("Escribe tu nombre completo")
    }

    console.log('guardando datos');
    formulario.reset();

    return false;
}





// var mensajeError = [];

//     if(nameComplete.value === '') {
//     mensajeError.push('ingresa tu nombre completo');
// } 

//     if(email.value === null || email.value === '') {         
//         mensajeError.push('ingresa tu email');
//     } 

//     if(password.value === null || password.value === '') {
//         mensajeError.push('ingresa tu password');
//     }

//     error.innerHTML = mensajeError.join(' , ');