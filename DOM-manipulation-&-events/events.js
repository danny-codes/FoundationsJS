const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World');

// btn.addEventListener('click', () => {
//     alert('Hello World');
// })

function alertFunction() {
    alert('Hey you did it!');
}

btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    console.log(e);
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})