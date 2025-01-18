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