//Recupero elementi del DOM

const resultGrid = document.getElementById('grid');
const playButton = document.querySelector('button');
const form = document.querySelector('form');
const squareNumber = 100;

//Faccio un ciclo for per creare la griglia

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    for(let i = 0; i < squareNumber; i++){
        num = i + 1;
    
        const content = createNode('div', 'square');

        content.innerText = num;

        resultGrid.appendChild(content);
    }
})