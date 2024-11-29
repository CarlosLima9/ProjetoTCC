function carregarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const listaFavoritos = document.getElementById('favoritos-list');
    
    // Verifica se há favoritos
    if (favoritos.length === 0) {
        listaFavoritos.innerHTML = '<li>Você ainda não favoritou nenhum módulo.</li>';
    } else {
        // Exibe os favoritos com seus links
        listaFavoritos.innerHTML = favoritos.map(modulo => {
            return `<li><a href="${modulo.link}">${modulo.nome}</a></li>`;
        }).join('');
    }
}

// Carregar os favoritos ao carregar a página
window.onload = carregarFavoritos;