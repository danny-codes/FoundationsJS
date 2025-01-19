function highlight(elem) {
    const bgColor = 'yellow';
    elem.style.backgroundColor = bgColor;

    let event = new CustomEvent('highlight', {
        detail: {
            backgroundColor: bgColor
        }
    });
    elem.dispatchEvent(event);
}

let div = document.querySelector('.note')

function addBorder(elem) {
    elem.style.border = "solid 1px red";
}

div.addEventListener('highlight', (e) => {
    addBorder(this);

    console.log(e.detail);
});

highlight(div);

// let event = new CustomEvent(eventType, options); 