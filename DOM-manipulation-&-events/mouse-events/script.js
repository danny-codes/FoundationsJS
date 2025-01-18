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

let btnKeys = document.querySelector('#btnKeys');

btnKeys.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

btnKeys.addEventListener('click', (e) => {
    let keys = [];

    if (e.shiftKey) keys.push('shift');
    if (e.ctrlKey) keys.push('ctrl');
    if (e.altKey) keys.push('alt');
    if (e.metaKey) keys.push('meta');

    let msg = document.querySelector('#messageKeys');
    msg.textContent = `Keys: ${keys.join('+')}`;
});

let track = document.querySelector('#track');

track.addEventListener('mousemove', (e) => {
    let log = document.querySelector('#log');
    log.innerHTML = `
    Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})`
});