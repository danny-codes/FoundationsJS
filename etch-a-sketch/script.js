const parentContainer = document.querySelector('#container');

const fragment = document.createDocumentFragment();

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    // div.textContent = `Div ${i + 1}`;
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.textAlign = 'center'
    div.style.backgroundColor = 'violet';
    fragment.appendChild(div);
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

parentContainer.addEventListener('mouseover', (e) => {
    createPixel(e.clientX, e.clientY);
    const containerChildren = parentContainer.children;
    for (let child of containerChildren) {
        child.classList.add('hover-effect');
        // child.style.backgroundColor = 'yellow';
    }
});

parentContainer.addEventListener('mouseout', () => {
    const containerChildren = parentContainer.children;
    for (let child of containerChildren) {
        child.classList.remove('hover-effect');
    }
});

parentContainer.appendChild(fragment);