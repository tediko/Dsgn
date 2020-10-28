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

/* CIRCLE PROGRESS BAR */
const boxes = document.querySelectorAll('.info__box');
boxes.forEach(box => {
    const circle = box.querySelector('[data-circle]');
    const count = box.querySelector('[data-count]');
    const progress = parseFloat(count.dataset.count);
    const initialProgressValue = parseFloat(window.getComputedStyle(circle).strokeDashoffset);
    let progressInterval;

    const maxSteps = 100;
    let step = 0;
    let stepValue = progress * (1 / 100);
    let finalProgress = 0;
    const delay = 3000 / maxSteps;
    
    progressInterval = setInterval(() => {
        if(step < progress) {
            step += stepValue;
            count.innerHTML = parseInt(step);
            if (progress > 100) {
                finalProgress = 630 - (step * 630) / progress;
            } else {
                finalProgress = initialProgressValue - (initialProgressValue * step) / 100;
            }
            circle.style.strokeDashoffset = finalProgress;
        } else {
            clearInterval(progressInterval);
        }
    }, delay);
})