// Asegúrate de que SweetAlert2 esté cargado antes de utilizarlo
document.addEventListener('DOMContentLoaded', function () {

    function validarFormulario() {
        var emailInput = document.getElementById('email');
        var passwordInput = document.getElementById('password');

        var email = emailInput.value;
        var password = passwordInput.value;

        // Validar correo
        if (!validarCorreo(email)) {
            mostrarMensajeSweetAlert('Error', 'El correo debe contener el símbolo "@"', 'error');
            return;
        }

        // Validar contraseña
        if (!validarContraseña(password)) {
            mostrarMensajeSweetAlert('Error', 'La contraseña debe tener al menos 8 caracteres', 'error');
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

    function mostrarMensajeSweetAlert(titulo, mensaje, tipo) {
        Swal.fire({
            title: titulo,
            text: mensaje,
            icon: tipo,
            confirmButtonText: 'Aceptar'
        });
    }
});
