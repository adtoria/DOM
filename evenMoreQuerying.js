const link = document.querySelector('a');

console.log(link.getAttribute('href'));
// gets us the value of the href attribute

link.setAttribute('href', 'https://www.facebook.com');
link.innerText = 'Facebook';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');

msg.setAttribute('style', 'color: green;');
// if the attribute isn't present, js will create it itself