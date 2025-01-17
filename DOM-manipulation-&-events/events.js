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
    console.log(e.target);
});
