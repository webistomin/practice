var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggler');
var links = document.querySelector('.page-header__links');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

    navToggle.classList.remove('main-nav__toggler--closed');
    navToggle.classList.add('main-nav__toggler--opened');

    links.classList.remove('page-header__links--closed');
    links.classList.add('page-header__links--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

    navToggle.classList.add('main-nav__toggler--closed');
    navToggle.classList.remove('main-nav__toggler--opened');

    links.classList.add('page-header__links--closed');
    links.classList.remove('page-header__links--opened');
  }
});
