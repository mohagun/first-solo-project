const humburgur = document.querySelector('#hum');
humburgur.addEventListener('click',()=>{
    const gridcont = document.querySelector('.grid-container');
    gridcont.classList.toggle('navexpand');
    const nav = document.querySelector('nav');
    nav.classList.toggle('hide-nav');
})