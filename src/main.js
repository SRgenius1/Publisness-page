// MENU DESPLEGABLE 
const openBtn = document.getElementById('icon-open');
const aside = document.querySelector('.aside');
const closeBtn = document.querySelector('.aside-icon-close');

openBtn.addEventListener('click', () => {
    aside.classList.remove('inactive');
});

closeBtn.addEventListener('click', () => {
    aside.classList.add('inactive');
});

