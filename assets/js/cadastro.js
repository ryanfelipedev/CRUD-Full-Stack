document.getElementById('cadastrar').addEventListener('click', (event)=>{
    event.preventDefault();

    // Capturar os valores dos inputs

    const nome = document.querySelector('.nome-input').value;
    const valor = document.querySelector('.valor-input').value
    const quantidade = document.querySelector('.quantidade-input').value

    if(!nome.trim() || !valor || !quantidade){
        document.getElementById('error-msg').textContent = 'Preencha todos os campos !';
        return;
    }

    document.getElementById('error-msg').textContent = '';

})

