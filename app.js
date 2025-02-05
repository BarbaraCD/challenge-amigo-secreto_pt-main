let amigos = [];  
let sorteioRealizado = false;  

function adicionarAmigo(event) {
    event.preventDefault();  

    const nome = document.getElementById('amigo').value.trim();

    if (!nome) {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    document.getElementById('amigo').value = ''; 
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigos() {
    const resultado = document.getElementById('resultado');

    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    if (sorteioRealizado) {
        alert('O sorteio já foi realizado.');
        return;
    }

    let sorteio = [...amigos];
    embaralharArray(sorteio);

    resultado.innerHTML = sorteio.map((amigo, index) => {
        return `${amigos[index]} → ${sorteio[index]}`;
    }).join('<br>');

    sorteioRealizado = true;  
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo(event);  
    }
});

document.querySelector('.button-add').addEventListener('click', function(event) {
    adicionarAmigo(event); 
});


document.querySelector('.button-draw').addEventListener('click', sortearAmigos);
