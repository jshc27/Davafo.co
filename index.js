function validar(){

    //Validaciones
    let nameComplete = document.forms["formulario"]["nameComplete"].value;
    if(nameComplete == "") {
        alert("Ingresa tu nombre");
        return false;
    } else if (nameComplete.length<=6) {
        alert("Escribe tu nombre completo")
    }

    let email = document.forms["formulario"]["email"].value;
    if(email == "") {
        alert("Ingresa tu email");
        return false;
    } else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email) ) {
        console.log("La dirección de email " + email + " es correcta!.");
    } else {
        alert("La dirección de email es incorrecta!.");
    }

    let password = document.forms["formulario"]["password"].value;
    if(password == "") {
        alert("Ingresa tu email");
        return false;
    } else if ( password.length<=8) {
        alert("Ingresa mas de 8 caracteres");
    }

    console.log('Los datos que ingresate se guardaron correctamente');
    formulario.reset();

    return false;
}
