const navBtnAll = document.querySelectorAll(".header__mobile-gamburg-btn");
const navBtnOpen = navBtnAll[1];
const navBtnClose = navBtnAll[0];

const navMenu = document.querySelector('.header__mobile-nav');

navBtnOpen.addEventListener('click', () => {
    navMenu.classList.remove('d-none');
    navMenu.classList.add('d-block');
});

navBtnClose.addEventListener('click', () => {
    navMenu.classList.remove('d-block');
    navMenu.classList.add('d-none');
});