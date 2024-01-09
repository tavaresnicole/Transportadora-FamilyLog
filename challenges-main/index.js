async function mostraCidades() {
    fetch('./data/cidades.json')
        .then(response => response.json())
        .then(data => {
            const lista = document.querySelector('.cidades');
            data.forEach(cidade => {
                const item = document.createElement('li');
                item.textContent = cidade;
                lista.appendChild(item);
            });
        });
}

mostraCidades();


//mostre os veiculos da transportadora na tela

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

// orce o frete de acordo com o peso e o prazo de entrega
//a tabela de valores está abaixo

// peso:
// até 100kg - R$ 100,00
// até 50kg - R$ 55,00
// até 5kg - R$ 30,00

// prazo:
// no mesmo dia - R$ 100,00
// em até 3 dias - R$ 55,00
// em até 7 dias - R$ 30,00
// em até 1 mes - R$ 10,00

// some os valores e divida por 1,5 para obter o valor final e mostre na tela após 

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
    } else{
        document.querySelector('.orcamento').innerHTML = `Poxa, sua mercadoria passa de 100kg. Entre em contato conosco para encontrarmos uma solução!`
        return
    }
    const valor = (pesoTabela + valorPrazo) / 1.5;

    document.querySelector('.orcamento').innerHTML = `Seu frete fica por apenas R$${valor.toFixed(2)}!`
} 