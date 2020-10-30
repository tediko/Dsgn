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
const sectionTwo = document.querySelector('.kv');
const boxes = document.querySelectorAll('.info__box');
const optionsTwo = {
    threshold: 0.5
};

const animateProgress = () => {
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
}

const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            animateProgress();
            progressObserver.unobserve(sectionTwo);
        } else {
            console.log('maoo');
        }
    })
}, optionsTwo)

progressObserver.observe(sectionTwo);

/* HEADER FIXED ON SCROLL */
const header = document.querySelector('.header');
const body = document.querySelector('body');
const sectionOne = document.querySelector('.kv');
const options = {
    threshold: 0.15
}

const headerObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
       if (!entry.isIntersecting) {
           header.classList.add('active');
           body.style.paddingTop = '80px';
        } else {
            header.classList.remove('active');
            body.style.paddingTop = '0';
       }
   }) 
}, options)

headerObserver.observe(sectionOne);

/* TEAM SECTION ANIMATION ON SCROLL */
const teamSection = document.querySelectorAll('.team__box');
const teamOptions = {
    threshold: 0.5
};

const teamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    })
}, teamOptions)

teamSection.forEach(element => {
    teamObserver.observe(element);
})