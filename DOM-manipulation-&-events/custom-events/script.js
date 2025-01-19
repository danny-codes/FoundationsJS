function highlight(elem, callback) {
    const bgColor = 'yellow';
    elem.style.backgroundColor = bgColor;

    if (callback && typeof callback === 'function') {
        callback(elem);
    }
}

let note = document.querySelector('.note');
function addBorder(elem) {
    elem.style.border = "solid 1px red";
}

highlight(note, addBorder);

// let event = new CustomEvent(eventType, options); 