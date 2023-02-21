const btnMenu = document.querySelector('.hamburger--stand');
const nav = document.querySelector('.nav__menu');
const footerYear = document.querySelector('.footer__year');

const handleMenu = () => {
  btnMenu.classList.toggle('is-active');
  document.body.classList.toggle('sticky-body');
  nav.classList.toggle('nav-active');
  nav.addEventListener('click', () => {
    if (nav.classList.contains('nav-active')) {
      nav.classList.remove('nav-active');
      document.body.classList.remove('sticky-body');
      btnMenu.classList.remove('is-active');
    }
  });
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();

btnMenu.addEventListener('click', handleMenu);
