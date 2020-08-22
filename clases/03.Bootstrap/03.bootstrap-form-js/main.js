(() => {
    'use strict';

    // var email = document.getElementById('exampleImputEmail1');

    // Vincula la variable 'botonLogin' con el elemento que tenga el id='login-btn'
    var botonLogin = document.getElementById('login-btn');


    botonLogin.addEventListener('click', function () {
        //Se ejecuta el boton cuando se hace click

        // Hay que tomar lo que escribieron en email y password
        var email = document.getElementById('exampleInputEmail1');
        var password = document.getElementById('exampleInputPassword1');

        console.log(email.value);
        console.log(password.value);

        // Mis cuentas correctas --> CONSTANTES (Para este ejemplo, sin acceso a Base de Datos)
        var EMAIL_SUCCESS = 'micorreo@gmail.com';
        var PASSWORD_SUCCESS = '123';

        // Validar si es correcto email & password
        // if ( email.value === EMAIL_SUCCESS && password.value === PASSWORD_SUCCESS){
        //     alert('LOGIN');
        // } else {
        //     alert('LOGIN FAIL');
        // }

        var msgValidacion = "";

        if (email.value === EMAIL_SUCCESS) {
            if (password.value === PASSWORD_SUCCESS) {
                msgValidacion = "LOGIN";      
            } else {
                msgValidacion = "Contraseña Incorrecta";
            }
        } else {
            msgValidacion = "EMAIL no encontrado";
        }
        var msgModal = document.getElementsByClassName('modal-body');
        msgModal[0].innerHTML= msgValidacion;
        $('#modal-login-success').modal('show');

    });

})();