function sendMessage() {
    let mensaje, nombre, email;
    mensaje = document.getElementById('form_message').value;
    nombre = document.getElementById('form_name').value;
    email = document.getElementById('form_email').value;
    // alert('Se recibieron los valores: ' + '\n' + 'Nombre: ' + name + '\n' + 'Email: ' + email + '\n' + 'Mensaje: ' + message);
    Email.send({
        Host: "smtp.gmail.com", // Servidor de correos.
        Username: "raes.tareas@gmail.com", // Mi correo.
        Password: "1679432585", //Contraseña.
        To: 'raes.tareas@gmail.com', // A quien se envia.
        From: email,
        Subject: nombre,
        Body: mensaje
    }).then(
        message => alert(message)
    );
}

// function getName(){
//     let name;
//     name = document.getElementById('form_name');
//     alert(name.value);
// }

// function getEmail(){
//     let email;
//     email = document.getElementById('form_email');
//     alert(email.value);
// }