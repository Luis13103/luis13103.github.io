function validarFormulario() {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    var email = emailInput.value;
    var password = passwordInput.value;

    // Validar correo
    if (!validarCorreo(email)) {
        mostrarAlerta('El correo debe contener el símbolo "@"');
        return;
    }

    // Validar contraseña
    if (!validarContraseña(password)) {
        mostrarAlerta('La contraseña debe tener al menos 8 caracteres');
        return;
    }

    // Continuar con el proceso de inicio de sesión si las validaciones son exitosas
    // ...
}

function validarCorreo(email) {
    return email.includes('@');
}

function validarContraseña(password) {
    return password.length >= 8;
}

function mostrarAlerta(mensaje) {
    alert(mensaje);
}
