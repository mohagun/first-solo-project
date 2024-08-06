const hum = document.getElementById('hum');
hum.addEventListener('click',()=>{
    const gridcont = document.querySelector('#outer-grid-container');
    gridcont.classList.toggle('expandnav');
    const nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
    })