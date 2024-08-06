const humbur = document.querySelector('#hum');
humbur.addEventListener('click',()=>{
const links = document.querySelector('.pages');
const parent = document.querySelector('#pp');
const thex = document.getElementById('thex');
thex.style.position = "fixed";
thex.style.top = "0";
thex.style.left = "40%";
thex.style.zIndex = "2";

if(links.style.display !== "none"){links.style.display = "none"}
if(links.style.display === "none"){
    links.style.display = "flex";
    links.offsetHeight;
    links.style.opacity = "1";
    links.style.transform = "translateX(0)";
    links.style.flexDirection = "column";
    links.style.width = "50%";
    links.style.height = "100vh";
    links.style.position = "fixed";
    links.style.top = "0";
    humbur.style.display = "none";
    thex.style.display = "block";
    
    }
if(thex.style.display !== "none"){
thex.addEventListener('click',()=>{
const link1 = document.querySelector('.pages');
link1.style.display = "none"; 
thex.style.display = "none";  
humbur.style.display = "block"; 
link1.style.opacity = "0";


    })
    }
})


