// Create function createGrid()
function createGrid(gridSize){
    // Calculate the grid's size
    const squareSide = (container.offsetWidth - 2) / gridSize;

    // Create a NxN square divs using nested loop
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement('div');

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
    const gridSize = prompt('Enter a number between 1-100');
    
    // Check if user cancelled input
    if (gridSize === null) return;

    // Check if input is not a number
    else if (isNaN(gridSize)) alert('Your input is not a number!');

    // Check if input is higher than 100 or less than 1
    else if (gridSize > 100 || gridSize < 1) {
        // Tell user it is invalid input
        alert('Please provide a valid input!');
        return;
    }
    // Delete existing squares within container
    deleteGrid();

    // Create a new grid
    createGrid(parseInt(gridSize));
    
}


function deleteGrid() {
    // Get all grid squares
    let gridSquares = document.querySelectorAll('.grid-square');
    // Delete all grid squares
    gridSquares.forEach(div => div.remove());
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