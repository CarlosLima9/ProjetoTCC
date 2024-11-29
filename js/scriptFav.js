document.querySelectorAll('.estrela').forEach(estrela => {
    estrela.addEventListener('click', function () {
        // Encontra o link dentro do botão "Iniciar" associado à estrela
        const link = this.closest('.conteudo-direita').querySelector('a').getAttribute('href');
        
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []; // Pega os favoritos do localStorage

        // Verifica se o conteúdo já está favoritado
        if (favoritos.includes(link)) {
            // Se já está favoritado, remove da lista
            favoritos = favoritos.filter(item => item !== link);
            this.src = '../img/estrela_apagada.png'; // Troca a estrela para apagada
        } else {
            // Caso contrário, adiciona aos favoritos
            favoritos.push(link);
            this.src = '../img/estrela_acesa.png'; // Troca a estrela para acesa
        }

        // Atualiza os favoritos no localStorage
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    });
});


// Função para carregar o estado da estrela baseado no que está no localStorage
window.onload = () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    // Itera sobre todas as estrelas e atualiza o estado delas
    document.querySelectorAll('.estrela').forEach(estrela => {
        const link = estrela.dataset.link;
        if (favoritos.includes(link)) {
            estrela.src = '../img/estrela_acesa.png'; // Marca a estrela como acesa
        }
    });
};


