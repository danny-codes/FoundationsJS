const parentContainer = document.querySelector('#container');

const numberBtn = document.querySelector('#numberBtn');

const fragment = document.createDocumentFragment();

parentContainer.style.backgroundColor = 'white';

function createGrid(size) {
    let calculatedMagicalNumber = 480 / size;
    let number = parseFloat(calculatedMagicalNumber);

    parentContainer.innerHTML = '';


    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${number}px`;
        cell.style.height = `${number}px`;
        // cell.style.backgroundColor = 'aqua';
        parentContainer.style.overflow = 'hidden';
        parentContainer.appendChild(cell);

    }
}

function createPixel(x, y) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.left = `${x - 2.5}px`;
    pixel.style.top = `${y - 2.5}px`;

    parentContainer.appendChild(pixel);

    setTimeout(() => {
        pixel.remove();
    }, 30000);
};

createGrid(16);

parentContainer.addEventListener('mouseover', (e) => {
    createPixel(e.clientX, e.clientY);
    const containerChildren = parentContainer.children;
    for (let child of containerChildren) {
        child.classList.add('hover-effect');
    }
});

parentContainer.addEventListener('mouseout', () => {
    const containerChildren = parentContainer.children;
    for (let child of containerChildren) {
        child.classList.remove('hover-effect');
    }
});

numberBtn.addEventListener('click', () => {
    let inputPrompt = prompt("What's your number of squares per side? (4, 8, 16, 32, 64, etc ...)");
    let inputNum = parseInt(inputPrompt);
    console.log(inputNum);
    console.log(typeof(inputNum));
    if (isNaN(inputNum) || inputNum < 1 || inputNum > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    createGrid(inputNum);
});

parentContainer.appendChild(fragment);