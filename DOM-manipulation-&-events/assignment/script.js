const link = document.querySelector('a');
link.textContent = 'Our Homepage';
link.href = '';

const sect = document.querySelector('section');

const para = document.createElement('p');
para.textContent = 'I am a very interesting paragraph.';
sect.appendChild(para);

const text = document.createTextNode(
    ' - very good resource.',
);

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara);

// sect.removeChild(linkPara);

// linkPara.remove(); 

// linkPara.parentNode.removeChild(linkPara);

// para.style.color = 'blue';
// para.style.padding = '10px';
// para.style.textAlign = 'center';

para.setAttribute('class', 'highlight');