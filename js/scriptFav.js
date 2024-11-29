// Função para adicionar o módulo aos favoritos no localStorage
function addFavorito(modulo, link) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    // Adiciona o módulo com seu link
    if (!favoritos.some(item => item.nome === modulo)) {
        favoritos.push({ nome: modulo, link: link });
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
}

// Função para remover o módulo dos favoritos no localStorage
function removeFavorito(modulo) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos = favoritos.filter(item => item.nome !== modulo);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Evento para a estrela do módulo "Numeros e Operações"
document.getElementById("estrela").addEventListener('click', () => {
    const estrela = document.getElementById('estrela');
    const modulo = 'Numeros e Operações';  // Nome do módulo para identificar no armazenamento local
    const link = '../html/ConteudoMatematica.html';  // Link do módulo para ser adicionado aos favoritos

    if (estrela.src.includes('estrela_apagada.png')) {
        estrela.src = '../img/estrela_acesa.png';  // Troca para a estrela acesa
        addFavorito(modulo, link);  // Adiciona ao armazenamento local
    } else {
        estrela.src = '../img/estrela_apagada.png';  // Troca para a estrela apagada
        removeFavorito(modulo);  // Remove do armazenamento local
    }
});

// Evento para a estrela do módulo "Noções e Conceitos"
document.getElementById("estrela1").addEventListener('click', () => {
    const estrela = document.getElementById('estrela1');
    const modulo = 'Noções e Conceitos';  // Nome do módulo para identificar no armazenamento local
    const link = '../html/ConteudoModulo.html';  // Link do módulo para ser adicionado aos favoritos

    if (estrela.src.includes('estrela_apagada.png')) {
        estrela.src = '../img/estrela_acesa.png';  // Troca para a estrela acesa
        addFavorito(modulo, link);  // Adiciona ao armazenamento local
    } else {
        estrela.src = '../img/estrela_apagada.png';  // Troca para a estrela apagada
        removeFavorito(modulo);  // Remove do armazenamento local
    }
});
