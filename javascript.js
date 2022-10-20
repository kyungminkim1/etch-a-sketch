// Create function createGrid()
function createGrid(){
    // Create 16x16 (= 196) square divs using nested loop
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let gridSquare = document.createElement('div');

            // Assign a class to each div within container
            gridSquare.classList.add('grid-square');

            gridSquare.addEventListener('mouseenter', changeColor);
            //gridSquare.addEventListener('mouseleave', changeColor);

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


// Get reference to body
const body = document.querySelector('body');
// Create div
const container = document.createElement('div');
// Assign class 'container' to div
container.classList.add('container');
// Append div to body
body.appendChild(container);

createGrid();