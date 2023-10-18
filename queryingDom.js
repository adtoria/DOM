// store our reference to some element in a variable
const ele1 = document.querySelector('p'); // grabs the first p tag it comes across
console.log(ele1);

const element2 = document.querySelector('.error');
// . represents class
// selecting error class here
console.log(element2);

const element3 = document.querySelector('div.error');
// a div with 'error' class
console.log(element3);

const element4 = document.querySelector('body > h1');
console.log(element4);

// grab multiple elements
const paras = document.querySelectorAll('p'); // gets a reference to all the p tags
console.log(paras);
paras.forEach(para => {
    console.log(para);
});
// it looks like an array, but it's not
console.log(paras[2]);

// grab all errors
const errors = document.querySelectorAll('.error');
console.log(errors);

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const moreErrors = document.getElementsByClassName('error');
console.log(moreErrors);
console.log(moreErrors[1]);
// forEach method is not valid for HTMLCollection unlike NodeList ------->
// moreErrors.forEach(error => {
//     console.log(error);
// });

// get elements by their tag name
const element5 = document.getElementsByTagName('p');
console.log(element5);