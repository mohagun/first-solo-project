const hum = document.querySelector('#hum');
hum.addEventListener('click',()=>{
    const father = document.querySelector('.grid-cont');
    father.classList.toggle('nav-expand');
    const head = document.querySelector('header');
    head.classList.toggle('header');
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-class');
    nav.classList.toggle('side-nav');
    const main = document.querySelector('main');
    main.classList.toggle('main-class');
})
