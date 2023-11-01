const menuIconEl = document.getElementById('mobileMenuIcon');
const mobileNavEl = document.getElementById('mobileNav');
const closeNavEl = document.getElementById('closeNav');


menuIconEl.addEventListener('click', ()=> {
    menuIconEl.style.display = 'none';
    mobileNavEl.style.transform = 'translateX(0)';
})

closeNavEl.addEventListener('click', ()=> {
    menuIconEl.style.display = 'initial';
    mobileNavEl.style.transform = 'translateX(-101vw)';
})