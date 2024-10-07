
// Função para formatar o valor para R$
function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

const carrinho = [];
const itensCarrinhoElement = document.getElementById('itens-carrinho');
const totalElement = document.getElementById('total');

// Função para atualizar o carrinho na tela
function atualizarCarrinho() {
    itensCarrinhoElement.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item-carrinho');
        itemElement.innerHTML = `
            <p>${item.nome}</p>
            <p>Preço: ${formatarMoeda(item.preco)}</p>
            <button class="remover-item" data-index="${index}">Remover</button>
        `;
        itensCarrinhoElement.appendChild(itemElement);
        total += item.preco;
    });

    totalElement.textContent = `Total: ${formatarMoeda(total)}`;
}

// Função para adicionar produto ao carrinho
document.querySelectorAll('.add-carrinho').forEach(button => {
    button.addEventListener('click', function() {
        const nome = this.getAttribute('data-nome');
        const preco = parseFloat(this.getAttribute('data-preco'));

        carrinho.push({ nome, preco });
        atualizarCarrinho();
    });
});

// Função para remover produto do carrinho
itensCarrinhoElement.addEventListener('click', function(event) {
    if (event.target.classList.contains('remover-item')) {
        const index = event.target.getAttribute('data-index');
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }
});

// Finalizar compra
document.getElementById('finalizar-compra').addEventListener('click', function() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada com sucesso!');
        carrinho.length = 0;
        atualizarCarrinho();
    }
});
