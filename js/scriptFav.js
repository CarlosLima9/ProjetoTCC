document.getElementById("estrela").addEventListener('click', () => {
    // Verifica se a estrela está apagada, se estiver, troca para a acesa
    const estrela = document.getElementById('estrela');
    
    if (estrela.src.includes('estrela_apagada.png')) {
        estrela.src = '../img/estrela_acesa.png';  // Troca para a imagem de estrela acesa
    } else {
        estrela.src = '../img/estrela_apagada.png';  // Caso contrário, volta para a apagada
    }
});
document.getElementById("estrela1").addEventListener('click', () => {
    // Verifica se a estrela está apagada, se estiver, troca para a acesa
    const estrela = document.getElementById('estrela1');
    
    if (estrela.src.includes('estrela_apagada.png')) {
        estrela.src = '../img/estrela_acesa.png';  // Troca para a imagem de estrela acesa
    } else {
        estrela.src = '../img/estrela_apagada.png';  // Caso contrário, volta para a apagada
    }
});