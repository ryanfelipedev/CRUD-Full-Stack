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

    if (usuario === 'ryanfelipe2004' || senha === '250101'){
        alert('login efetuado com sucesso !')
        
    } else {
        errorMsg.textContent = 'Por favor preencha os campos !';
        errorMsg.style.display = 'block'
    }
})