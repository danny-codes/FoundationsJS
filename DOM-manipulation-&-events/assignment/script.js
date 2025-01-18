const link = document.querySelector('a');
link.textContent = 'Our Homepage';
link.href = '';

const sect = document.querySelector('section');

const para = document.createElement('p');
para.textContent = 'I am a very interesting paragraph.';
sect.appendChild(para);