document.querySelector('.filter-button').addEventListener('click', function() {
    const selectedCategory = document.getElementById('category-filter').value;
    const games = document.querySelectorAll('.game-card');

    games.forEach(game => {
        if (selectedCategory === 'todos' || game.classList.contains(selectedCategory)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
});
