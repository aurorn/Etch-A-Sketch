/* Size of the Grid */

const gridSize = 600;
let cellsLength = 16;

/* Const's for Etch a Sketch and Slider t */
const easArea = document.querySelector("#eas-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
/* */
sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
easArea.style.width = easArea.style.height = `${gridSize}px`;


/* This is the function that the mouseover calls to set the grid cell to black */
function setBgColor() {
    this.style.backgroundColor = "black";
}
/* */
function createGridCells(cellsLength) {
    const numOfCells = (cellsLength * cellsLength);
    const widthOrHeight = `${(gridSize / cellsLength) - 2}px`;
    for (let i = 0; i < numOfCells; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        easArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", setBgColor);

    }
}

/* */
function remGridCells () {
    while (easArea.firstChild) {
        easArea.removeChild(easArea.firstChild);
    }
}


createGridCells (16);
