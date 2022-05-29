/** @type {HTMLElement} */

let mainArea = document.querySelector('.main-area');

let gridSlider = function(){
    x = document.getElementById('size').value;
    return parseInt(x)
}


let divGenerator = function(){
    gridSize = gridSlider();
    divNumber = gridSize*gridSize
    divWidth = (800/gridSize - 2)
    for (let i = 0; i < divNumber; i++){
        div = document.createElement('div');
        div.className = 'square'
        div.style.flex = `1 1 ${divWidth}px`
        div.style.border = '1px solid #e0e0e0'
        mainArea.appendChild(div);
    }
}

let slider = document.getElementById('size')

slider.addEventListener('mouseup', function(){
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
      }
    divGenerator();
    let square = document.getElementsByClassName('square')
    let squareList = Array.from(square);
    squareList.forEach(square =>{
        square.addEventListener('mouseover', function(){
        square.style.background = 'black'
    })
})
});

