myDiv.addEventListener('mousedown', () => {
    console.log('Mousedown event is triggered.')
})

myDiv.addEventListener('mouseup', () => {
    console.log('Mouseup event is triggered.')
})

myDiv.addEventListener('click', () => {
    console.log('Click event is triggered.')
})

myDiv.addEventListener('dblclick', () => {
    console.log('dblclick event is triggered.')
})

// myDiv.addEventListener('mousemove', () => {
//     console.log('mousemove event is triggered.')
// })

// element.onmousemove = mouseMoveEventHandler;
// ...
//  later, no longer use
// element.onmousemove = null;

let btn = document.querySelector('#btn');

let body = document.querySelector('body');

btn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

btn.addEventListener('mouseup', (e) => {
    let msg = document.createElement('p');
    body.appendChild(msg);
    switch (e.button) {
        case 0:
            msg.textContent = 'Left mouse button clicked';
            break;
        case 1:
            msg.textContent = 'Middle mouse button clicked';
            break;
        case 2:
            msg.textContent = 'Right mouse button clicked';
            break;
        case 3:
            msg.textContent = 'Browser back mouse button clicked';
            break;
        case 4:
            msg.textContent = 'Browser forward mouse button clicked';
            break;
        default:
            msg.textContent = `Unknown mouse button code ${event.button}`;
    }
});