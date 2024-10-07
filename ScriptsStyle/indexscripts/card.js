let currentCard = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
let autoSlideInterval;

function createIndicators() {
    const indicatorContainer = document.createElement('div');
    indicatorContainer.classList.add('indicator-container');
    
    for (let i = 0; i < totalCards; i++) {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (i === 0) {
            indicator.classList.add('active'); // O primeiro card está ativo no início
        }
        indicatorContainer.appendChild(indicator);
    }

    document.querySelector('.container').appendChild(indicatorContainer);
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentCard) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function showCard(index) {
    const carousel = document.querySelector('.carousel');
    
    // Garantir que o índice não ultrapasse o número de cards
    if (index >= totalCards) {
        currentCard = 0; // Volta ao primeiro card
    } else if (index < 0) {
        currentCard = totalCards - 1; // Vai para o último card
    } else {
        currentCard = index;
    }

    // Atualizar o deslocamento da 'carousel' para mostrar o card correto
    const offset = -currentCard * 100; // Deslocamento com base no número do card
    carousel.style.transform = `translateX(${offset}%)`;

    // Atualizar os indicadores de posição (bolinhas)
    updateIndicators();
}

function nextCard() {
    showCard(currentCard + 1);
}

function prevCard() {
    showCard(currentCard - 1);
}

// Função para iniciar a troca automática de cards
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextCard();
    }, 5000); // Troca o card a cada 5 segundos
}

// Função para parar a troca automática de cards
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Iniciar o carrossel com o primeiro card
showCard(0);
createIndicators(); // Criar os indicadores (bolinhas)
startAutoSlide(); // Iniciar a troca automática

// Parar o auto-slide ao passar o mouse sobre os botões (opcional, mas útil)
document.querySelector('.prev').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.next').addEventListener('mouseenter', stopAutoSlide);

// Retomar o auto-slide quando o mouse sair dos botões
document.querySelector('.prev').addEventListener('mouseleave', startAutoSlide);
document.querySelector('.next').addEventListener('mouseleave', startAutoSlide);
