/** @type {HTMLElement} */

let mainArea = document.querySelector('.main-area');

let divGenerator = function(){
    gridSize = parseInt(prompt('Size of your grid?'))
    divNumber = gridSize*gridSize
    divWidth = (800/gridSize - 2)
    for (let i = 0; i < divNumber; i++){
        div = document.createElement('div');
        div.className = 'square'
        div.style.flex = `1 1 ${divWidth}px`
        div.style.border = '1px solid black'
        mainArea.appendChild(div);
    }
}

divGenerator();

let square = document.getElementsByClassName('square')

let squareList = Array.from(square);

let randomColor = function(){
    return Math.floor(Math.random()*255)
}

squareList.forEach(square =>{
    square.addEventListener('mouseover', function(){
        square.style.background = 'black'
    })
})