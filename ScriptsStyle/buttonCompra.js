let cartItemCount = 0;

document.getElementById('cartButton').addEventListener('click', () => {
    const cartPreview = document.getElementById('cartPreview');
    cartPreview.classList.toggle('hidden'); // Alterna entre mostrar e esconder o pop-up
});


document.getElementById('checkoutButton').addEventListener('click', () => {
    window.location.href = 'carrinho.html'; // Redireciona para a página do carrinho
});

// Simulação de adicionar um item ao carrinho
function addToCart() {
    cartItemCount++;
    document.getElementById('cartCount').textContent = cartItemCount;
    // Atualizar as informações do carrinho aqui
}
