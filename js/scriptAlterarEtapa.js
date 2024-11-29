        const escolaridadeDiv = document.getElementById('escolaridade');
        const listaOpcoes = document.getElementById('listaOpcoes');
        const listaMaterias = document.getElementById('listaMaterias');

        document.getElementById('alterarMateria').addEventListener('click', function(event) {
            event.preventDefault();
            listaMaterias.style.display = listaMaterias.style.display === 'block' ? 'none' : 'block';
        });
        
        document.getElementById('alterarEtapa').addEventListener('click', function(event) {
            event.preventDefault();
            listaOpcoes.style.display = listaOpcoes.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function(event) {
            if (!escolaridadeDiv.contains(event.target) && !listaMaterias.contains(event.target)) {
                listaMaterias.style.display = 'none'; 
            }
        });

        
        document.addEventListener('click', function(event) {
            if (!escolaridadeDiv.contains(event.target) && !listaOpcoes.contains(event.target)) {
                listaOpcoes.style.display = 'none'; 
            }
        });