// Pegar evento de Submit

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    // Obter Valores
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const errorMsg = document.getElementById('error-msg');

    // Limpar a msg de erro
    errorMsg.style.display = 'none';
    errorMsg.textContent = '';

    // Valida os campos

    if (usuario === '' || senha === '') {
        errorMsg.textContent = 'Por favor, preencha os campos!';
        errorMsg.style.display = 'block';
    } else if (usuario === 'ryanfelipe2004' && senha === '250101') {
        alert('Login efetuado com sucesso!');
    } else {
        errorMsg.textContent = 'Usuário ou senha incorretos!';
        errorMsg.style.display = 'block';
    }
    
})

// Esconder msg de erro quando o foco estiver no input

document.getElementById('usuario').addEventListener('focus', function(){
    const errorMsg = document.getElementById('error-msg')
    errorMsg.style.display = 'none'; // Ocultar a msg de erro
    errorMsg.textContent = ''; // Limpa o texto da msg
})

document.getElementById('senha').addEventListener('focus', function(){
    const errorMsg = document.getElementById('error-msg')
    errorMsg.style.display = 'none';
    errorMsg.textContent = ''
})