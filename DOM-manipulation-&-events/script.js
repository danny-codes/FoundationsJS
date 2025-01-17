const container = document.querySelector("#container");

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Text-content';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
const body = document.querySelector('body');
container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement('div');
div.setAttribute('style', 'border: 2px black; background-color: pink;')

const h1 = document.createElement('h1');
h1.textContent = 'I am in a div';
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
div.appendChild(p);

container.appendChild(div);
