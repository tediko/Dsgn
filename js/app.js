/* HAMBURGER MENU BUTTON */
const nav = document.querySelector('.header__nav');
let isOpen = false;

const openMenu = () => {
    if (isOpen) {
        nav.classList.remove('open');
        nav.classList.add('close');
        isOpen = false;
    } else {
        nav.classList.add('open');
        nav.classList.remove('close');
        isOpen = true;
    }
}

nav.addEventListener('click', openMenu);