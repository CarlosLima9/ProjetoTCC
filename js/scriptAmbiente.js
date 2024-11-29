window.onload = () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const listaFavoritos = document.getElementById('lista-favoritos');

    // Verifica se há favoritos
    if (favoritos.length === 0) {
        listaFavoritos.innerHTML = '<li>Nenhum conteúdo favoritado ainda.</li>';
    } else {
        // Limpar a lista antes de adicionar novos itens
        listaFavoritos.innerHTML = '';

        // Adicionar cada conteúdo favoritado à lista
        favoritos.forEach(favorito => {
            // Criar um item de lista para o favorito
            const item = document.createElement('li');
            
            // Criar o link
            const link = document.createElement('a');
            link.href = favorito; // Link do favorito
            link.textContent = favorito; // Aqui vamos colocar o título, mas é necessário pegar esse título da página

            // Fazendo uma requisição para pegar o título da página favorita
            fetch(favorito)
                .then(response => response.text())
                .then(data => {
                    // Extrair o título da página usando regex
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'text/html');
                    const pageTitle = doc.querySelector('title').textContent;

                    // Definir o texto do link como o título da página
                    link.textContent = pageTitle;

                    // Adicionar o link ao item de lista
                    item.appendChild(link);
                    listaFavoritos.appendChild(item);
                })
                .catch(err => {
                    console.error('Erro ao buscar o título da página:', err);
                    // Caso haja erro, podemos exibir o link padrão
                    link.textContent = favorito;
                    item.appendChild(link);
                    listaFavoritos.appendChild(item);
                });
        });
    }
};
