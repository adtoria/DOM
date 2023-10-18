const paras = document.querySelectorAll('p');

paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    if(para.textContent.includes('success')){
        para.classList.add('success');
    }
});

// how to toggle classes?
const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');
title.classList.toggle('test');
title.classList.toggle('test'); // very cool