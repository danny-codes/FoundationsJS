let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    alert('Mouse clicked');
});

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);
console.log(clickEvent.isTrusted);

let clickMouseEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 150,
    clientY: 150
});