const gridSize = 600;
let cellsLength = 16;

const origColor = '#000000';
const origMode = 'black';

let currentColor = origColor;
let currentMode = origMode;

function setColor(newColor) {
    activateBtn(newColor);
    currentMode = newColor;
}

const rgbBtn = document.querySelector("#rgb-btn");
rgbBtn.onclick = () => setColor('rainbow');
const original = document.querySelector("#black-btn");
original.onclick = () => setColor('black');
const eraser = document.querySelector("#eraser-btn");
eraser.onclick = () => setColor('eraser');


const easArea = document.querySelector("#eas-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


/* */
sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
easArea.style.width = easArea.style.height = `${gridSize}px`;

/* */
function createGridCells(cellsLength) {
    const numOfCells = (cellsLength * cellsLength);
    const widthOrHeight = `${(gridSize / cellsLength) }px`;
    for (let i = 0; i < numOfCells; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");
        easArea.appendChild(gridCell);
        gridCell.addEventListener('mouseover', setBgColor);
        gridCell.addEventListener('mousedown', setBgColor);
    }
}


/* This sets what color will be when the mode is set */
function setBgColor(e) {
    
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
        const ranR = Math.floor(Math.random() * 256);
        const ranG = Math.floor(Math.random() * 256);
        const ranB = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${ranR}, ${ranG}, ${ranB})`;
    } else if (currentMode === 'black') {
        this.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        this.style.backgroundColor = '#FFFFFF';
  }
}

function activateBtn(newColor) {
    if (currentMode === 'rainbow') {
      rgbBtn.classList.remove('active');
    } else if (currentMode === 'black') {
      original.classList.remove('active');
    } else if (currentMode === 'eraser') {
      eraser.classList.remove('active');
    }
  
    if (newColor === 'rainbow') {
      rgbBtn.classList.add('active');
    } else if (newColor === 'black') {
      original.classList.add('active');
    } else if (newColor === 'eraser') {
      eraser.classList.add('active');
    }
  }

/* Function to be called that deletes the Etch-A-Sketch */
function remGridCells () {
    while (easArea.firstChild) {
        easArea.removeChild(easArea.firstChild);
    }
}

const delSketchBtn = document.querySelector("#del-btn");
delSketchBtn.addEventListener("click", delSketch);

function delSketch() {
    remGridCells ();
    createGridCells (16);
}



slider.oninput = function () {
    cellsLength = this.value;
    sliderValue.textContent = `${this.value} x ${this.value} (Resolution)`;
    remGridCells ();
    createGridCells (this.value);
}


createGridCells(16);
