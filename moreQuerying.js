const para = document.querySelector('p');
console.log(para.innerText);
// innerText is a property, not a method

para.innerText = 'i\'m the coolest person alive :D';
console.log(para.innerText);

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});

// to change the HTML of something:
const content = document.querySelector('.content');
//console.log(content.innerHTML);
content.innerHTML = '<h2>This is a new H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});