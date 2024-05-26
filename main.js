let menu = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.oneclick= () => {
    menu.classList.teggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}
const sr = ScrollReveal ({
    origin:top,
    distance:'40px',
    duration:2000,
    reset:true
});

