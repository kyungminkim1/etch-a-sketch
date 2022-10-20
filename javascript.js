// Create function createGrid()
function createGrid(gridSize){
    // Create 16x16 (= 196) square divs using nested loop
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement('div');

            // Calculate the grid's size
            const squareSide = container.offsetWidth / gridSize;

            // Override grid dimensions to maintain square grid
            gridSquare.setAttribute('style', `width: ${squareSide}px; height: ${squareSide}px`);

            // Assign a class to each div within container
            gridSquare.classList.add('grid-square');

            gridSquare.addEventListener('mouseenter', changeColor);

            // Append each div to container
            container.appendChild(gridSquare);
            }
        }
}

function changeColor(e) {
    if (this.style.backgroundColor === 'black') {
        this.style.backgroundColor = null;
    }
    else{
        this.style.backgroundColor = 'black';
    }
}

function linkButton() {
    const resizeBtn = document.querySelector('#resize-btn');
    resizeBtn.addEventListener('click', resizeGrid);
}

function resizeGrid() {
    // Get the new grid size from user
    const gridSize = parseInt(prompt('Enter a number between 1-100'));
    // Reset the grid size
    createGrid(gridSize);
}


// Get reference to body
const body = document.querySelector('body');
// Create div
const container = document.createElement('div');
// Assign class 'container' to div
container.classList.add('container');
// Append div to body
body.appendChild(container);

linkButton();