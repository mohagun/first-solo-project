const hum = document.querySelector('#hum');
hum.addEventListener('click',()=>{
    const man = document.querySelector('main');
    const nav = document.querySelector('nav');
    const grid  = document.querySelector('.grid-father');
    const head = document.querySelector('header');
    const foot = document.querySelector('footer');
    grid.classList.toggle('navexp');
    man.classList.toggle('main');
    head.classList.toggle('header')
    foot.classList.toggle('footer');
    nav.classList.toggle('nav');
    nav.classList.toggle('hid-nav');
})