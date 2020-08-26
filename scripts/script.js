const board = document.getElementById('board');
const reset = document.getElementById('reset');
const resize = document.getElementById('resize');

resize.addEventListener('click', changeSize);

function gridMaker(size) {
    if (isNaN(size) || size == '') {
        alert("Enter a valid number");
    } else if (size > 600) {
        alert("Enter a number smaller than 600");
    } else {
        board.style.setProperty('--grid-size', size);
        for (i = 0; i < Math.pow(size, 2); i++) {
            cell = document.createElement('div');
            board.appendChild(cell).className = 'white';
            draw(cell);
            clean(cell);
        }
    }
}

function draw(square) {
    square.addEventListener('mouseover', () => {
        square.classList.remove('white');
        square.classList.add('black');
    });
};

function clean(square) {
    reset.addEventListener('click', () => {
        square.classList.remove('black');
        square.classList.add('white');
    });
};

function changeSize() {
    let newSize = prompt("", "Enter a number smaller than 600");
    gridMaker(newSize);
}

gridMaker(16);