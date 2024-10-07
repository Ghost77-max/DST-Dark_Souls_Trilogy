document.getElementById('go-to-register').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('go-to-login').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});

// Você pode adicionar mais validações e manipulação de eventos conforme necessário.
