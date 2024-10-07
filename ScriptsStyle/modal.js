// Abrir modal ao clicar no botão "Entrar"
const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeButton = document.querySelector('.close');


loginButton.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
});

// Fechar modal ao clicar no "X"
closeButton.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
});
// Fechar o modal se o usuário clicar fora dele (no overlay)
modalOverlay.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
});
// Alternar entre Login e Registro
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginTab.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
});
