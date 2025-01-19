let msg = document.querySelector('#message');

msg.addEventListener('keydown', (e) => {
    console.log(`${e.key} was pressed!, 
    code=${e.code}`);
})

msg.addEventListener("keypress", (e) => {
    console.log(`${e.key} was pressed!`);
});

msg.addEventListener("keyup", (e) => {
    console.log(`${e.key} was pressed!`);
});