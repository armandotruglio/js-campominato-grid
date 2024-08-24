//Recupero elementi del DOM

const resultGrid = document.getElementById('grid');
const playButton = document.querySelector('button');
const resultMode = document.getElementById('mode');
const form = document.querySelector('form');

//Faccio un ciclo for per creare la griglia

form.addEventListener('submit', function(event){
    event.preventDefault();

    const squareNumber = resultMode.value;
    console.log(squareNumber);
    
    for(let i = 0; i < squareNumber; i++){
        num = i + 1;
    
        const content = createNode('div', 'square');
    
        content.innerText = num;

        content.addEventListener('click', function(){
            console.log(content.innerText);
            content.classList.add('clicked');
        })

        content.classList.add('square-' + squareNumber);

        resultGrid.appendChild(content);
    }
})