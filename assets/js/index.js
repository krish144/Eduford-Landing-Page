let menu=document.getElementById('menu-icon');

let close=document.getElementById('close-icon');

let navbar=document.getElementById('navbar');

menu.addEventListener('click',()=>{
    navbar.style.right="0%"
})

close.addEventListener('click',()=>{
    navbar.style.right="-200px"
})
