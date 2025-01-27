const parentContainer = document.querySelector('#container');

const numberBtn = document.querySelector('#numberBtn');

const fragment = document.createDocumentFragment();

const gridBounds = parentContainer.getBoundingClientRect();

parentContainer.style.backgroundColor = 'white';

function createGrid(size) {
    let calculatedMagicalNumber = 480 / size;
    let number = parseFloat(calculatedMagicalNumber);

    parentContainer.innerHTML = '';


    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${number}px`;
        cell.style.height = `${number}px`;
        parentContainer.style.overflow = 'hidden';
        fragment.appendChild(cell);

    }
    parentContainer.append(fragment);
}

function createPixel(x, y) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.left = `${x - 2.5}px`;
    pixel.style.top = `${y - 2.5}px`;

    fragment.appendChild(pixel);
    parentContainer.append(fragment);

    setTimeout(() => {
        pixel.remove();
    }, 30000);
};

createGrid(16);

parentContainer.addEventListener('mouseover', (e) => {
    if (
        e.clientX >= gridBounds.left &&
        e.clientX <= gridBounds.right &&
        e.clientY >= gridBounds.top &&
        e.clientY <= gridBounds.bottom
    ) {
    createPixel(e.clientX, e.clientY);

    }

    // const x = e.clientX - gridBounds.left;
    // const y = e.clientY - gridBounds.top;
    // createPixel(x, y);

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