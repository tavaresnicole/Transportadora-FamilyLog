async function mostraCidades() {
    fetch('./data/cidades.json')
        .then(response => response.json())
        .then(data => {
            const lista = document.querySelector('.cidades');
            data.forEach(cidade => {
                const item = document.createElement('li');
                item.className = 'listaCidades';
                item.textContent = cidade;
                lista.appendChild(item);
            });
        });
}
mostraCidades();

async function mostraVeiculos() {
    fetch('./data/veiculos.json')
        .then(resposta => resposta.json())
        .then(dados => {
            const ul = document.querySelector('ul');
            dados.forEach(veiculo => {
                const li = document.createElement('li');
                li.innerHTML = `${veiculo.veiculo} - ${veiculo.qtd} unidades.`;
                ul.appendChild(li);
            })
        })
}
mostraVeiculos();

function scrollPage(x, y) {
    window.scrollBy(x, y)
}

function cotacaoFrete() {
    const prazo = document.querySelector('select');
    const valorPrazo = Number(prazo.options[prazo.selectedIndex].value);
    const peso = Number(document.querySelector('input').value);

    let pesoTabela = 0;

    if (peso <= 5) {
        pesoTabela = 30;
    } else if (peso > 5 && peso <= 50) {
        pesoTabela = 55;
    } else if (peso > 50 && peso <= 100) {
        pesoTabela = 100;
    } else {
        document.querySelector('.orcamento').innerHTML = `Poxa, sua mercadoria passa de 100kg. Entre em contato conosco para encontrarmos uma solução!`
        return
    }

    if (peso == 0) {

    }
    const valor = (pesoTabela + valorPrazo) / 1.5;

    document.querySelector('.orcamento').innerHTML = `Seu frete fica por apenas R$${valor.toFixed(2)}!`
}

document.getElementById('button').disabled = true;
document.querySelector('.peso').addEventListener("input", function (event) {
    let peso = Number(document.querySelector('input').value);
    if (peso !== 0) {
        document.getElementById('button').disabled = false;
    } else {
        document.getElementById('button').disabled = true;
    }
})


function mostraFuncionarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resposta => resposta.json())
        .then(dados => {
            const li = document.querySelector('.funcionarios');
            dados.forEach(funcionario => {
                const lista = document.createElement('li');
                lista.className = 'listaFuncionarios';
                lista.innerHTML = `Nome: ${funcionario.name}, E-mail: ${funcionario.email} e Site: ${funcionario.website}`
                li.appendChild(lista);
            })
        })
}
mostraFuncionarios()

