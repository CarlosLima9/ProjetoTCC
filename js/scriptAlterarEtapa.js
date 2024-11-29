        const escolaridadeDiv = document.getElementById('escolaridade');
        const listaOpcoes = document.getElementById('listaOpcoes');
        
        document.getElementById('alterarEtapa').addEventListener('click', function(event) {
            event.preventDefault(); // impede o comportamento padrão do link
            listaOpcoes.style.display = listaOpcoes.style.display === 'block' ? 'none' : 'block'; // Alterna a visibilidade da lista
        });

        // Fecha a lista se clicar fora dela
        document.addEventListener('click', function(event) {
            if (!escolaridadeDiv.contains(event.target) && !listaOpcoes.contains(event.target)) {
                listaOpcoes.style.display = 'none'; // Esconde a lista
            }
        });