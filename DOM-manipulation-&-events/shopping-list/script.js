const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    let inputValue = input.value;
    input.value = '';
    let li = document.createElement('li');
    let span = document.createElement('span');
    let btn = document.createElement('button');
    li.appendChild(span);
    li.appendChild(btn);
    span.textContent = inputValue;
    btn.textContent = 'Delete';
    list.appendChild(li);
    btn.addEventListener('click', () => {
        li.remove();
    })
    input.focus();
});

