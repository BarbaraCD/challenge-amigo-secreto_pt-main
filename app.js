let amigos = [];  // Lista de amigos
let sorteioRealizado = false;  // Controle para saber se o sorteio foi feito

// Função para validar e adicionar o amigo
function adicionarAmigo(event) {
    event.preventDefault();  // Impede o envio do formulário

    const nome = document.getElementById('amigo').value.trim();

    // Valida o nome
    if (!nome) {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome à lista e atualiza a lista na tela
    amigos.push(nome);
    atualizarListaAmigos();
    document.getElementById('amigo').value = '';  // Limpa o campo de input
}

// Função para atualizar a lista exibida na tela
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

// Função para sortear os amigos e exibir o resultado
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

    // Embaralha os amigos (usando o algoritmo de Fisher-Yates)
    let sorteio = [...amigos];
    embaralharArray(sorteio);

    // Exibe todos os sorteios de uma vez
    resultado.innerHTML = sorteio.map((amigo, index) => {
        return `${amigos[index]} → ${sorteio[index]}`;
    }).join('<br>');

    sorteioRealizado = true;  // Marca o sorteio como realizado
}

// Função para embaralhar o array (algoritmo de Fisher-Yates)
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Adiciona evento ao campo de input para permitir pressionar Enter para adicionar amigo
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo(event);  // Passa o evento para prevenir comportamento padrão
    }
});

// Adiciona evento ao botão de adicionar amigo
document.querySelector('.button-add').addEventListener('click', function(event) {
    adicionarAmigo(event);  // Passa o evento para prevenir comportamento padrão
});

// Adiciona evento ao botão de iniciar sorteio
document.querySelector('.button-draw').addEventListener('click', sortearAmigos);
