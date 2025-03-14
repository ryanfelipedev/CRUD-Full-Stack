// Pegar evento de Submit

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();


    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const errorMsg = document.getElementById('error-msg');

    errorMsg.style.display = 'none';
    errorMsg.textContent = '';


    if (usuario === '' || senha === '') {
        errorMsg.textContent = 'Por favor, preencha os campos!';
        errorMsg.style.display = 'block';
    } else if (usuario === 'ryanfelipe2004' && senha === '250101') {
        window.location.href = 'cadastro_produto.html';
    } else {
        errorMsg.textContent = 'Usuário ou senha incorretos!';
        errorMsg.style.display = 'block';
    }
    
})


document.getElementById('usuario').addEventListener('focus', function(){
    const errorMsg = document.getElementById('error-msg')
    errorMsg.style.display = 'none';
    errorMsg.textContent = '';
})

document.getElementById('senha').addEventListener('focus', function(){
    const errorMsg = document.getElementById('error-msg')
    errorMsg.style.display = 'none';
    errorMsg.textContent = ''
})