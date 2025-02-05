<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Amigo Secreto Sorteio</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: #f7f7f7;
            color: #333;
            padding: 20px;
        }

        h1, h2, h3 {
            color: #2c3e50;
        }

        h1 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 30px;
        }

        h2 {
            font-size: 2rem;
            margin-top: 20px;
        }

        h3 {
            font-size: 1.6rem;
            color: #3498db;
        }

        .content {
            max-width: 900px;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        p {
            font-size: 1.1rem;
            margin-bottom: 15px;
        }

        ul {
            list-style-type: disc;
            margin-left: 20px;
        }

        code {
            background-color: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }

        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 1rem;
            color: #777;
        }

        .link {
            color: #3498db;
            text-decoration: none;
        }

        .link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <div class="content">
        <h1>Amigo Secreto - Sorteio Online</h1>

        <p>Bem-vindo ao projeto de <strong>Amigo Secreto</strong>! Este repositório contém um aplicativo simples para realizar sorteios de amigo secreto de forma divertida e interativa.</p>

        <h2>Funcionalidades</h2>
        <ul>
            <li><strong>Adicionar Amigos:</strong> O usuário pode adicionar amigos à lista de sorteio.</li>
            <li><strong>Sortear Amigo Secreto:</strong> Realiza um sorteio aleatório de todos os amigos adicionados e exibe quem tirou quem.</li>
            <li><strong>Validação:</strong> O sistema valida se o nome não está vazio e não é repetido antes de adicionar à lista.</li>
            <li><strong>Exibição de Resultados:</strong> Após o sorteio, todos os amigos e seus respectivos amigos secretos são exibidos na tela.</li>
        </ul>

        <h2>Como Usar</h2>
        <p>Para utilizar o sorteio de amigo secreto, siga os seguintes passos:</p>
        <ol>
            <li><strong>Adicionar Amigos:</strong> No campo de texto, insira o nome de um amigo e clique em "Adicionar". Repita o processo até adicionar todos os amigos.</li>
            <li><strong>Realizar Sorteio:</strong> Clique no botão "Sortear Amigo Secreto" para ver os resultados do sorteio.</li>
        </ol>

        <h3>Estrutura do Projeto</h3>
        <p>O projeto é composto pelos seguintes arquivos:</p>
        <ul>
            <li><code>index.html</code>: Contém a estrutura da página web.</li>
            <li><code>style.css</code>: Arquivo de estilos para a formatação da página.</li>
            <li><code>app.js</code>: Contém toda a lógica JavaScript para realizar o sorteio e manipulação da lista de amigos.</li>
        </ul>

        <h3>Exemplo de Uso</h3>
        <p>Exemplo de como adicionar amigos e realizar o sorteio:</p>
        <ul>
            <li><strong>Adicionar Amigo:</strong> João</li>
            <li><strong>Adicionar Amigo:</strong> Maria</li>
            <li><strong>Sortear Amigo Secreto:</strong> João → Maria, Maria → João</li>
        </ul>

        <h2>Licença</h2>
        <p>Este projeto está sob a licença MIT. Veja o arquivo <code>LICENSE</code> para mais informações.</p>

        <div class="footer">
            <p>Projeto desenvolvido por <strong><a href="https://github.com/seu-usuario" class="link" target="_blank">Seu Nome</a></strong>.</p>
        </div>
    </div>

</body>
</html>
