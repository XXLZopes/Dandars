const menuIconEl = document.getElementById('mobileMenuIcon');
const mobileNavEl = document.getElementById('mobileNav');
const closeNavEl = document.getElementById('closeNav');


menuIconEl.addEventListener('click', ()=> {
    menuIconEl.style.display = 'none';
    closeNavEl.style.display = 'flex';
    setTimeout(()=> {
        mobileNavEl.style.transform = 'translateX(0)';
    }, 0)
})

closeNavEl.addEventListener('click', ()=> {
    closeNavEl.style.display = 'none';
    menuIconEl.style.display = 'initial';
    mobileNavEl.style.transform = 'translateX(-200vw)';
})