var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggler');
var pageHeader = document.querySelector('.page-header');
var pageContent = document.querySelector('.page-content');
var pageFooter = document.querySelector('.page-footer');
var pageRow = document.querySelector('.row');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

    navToggle.classList.remove('page-header__toggler--closed');
    navToggle.classList.add('page-header__toggler--opened');

    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');

    pageContent.classList.remove('page-content--closed');
    pageContent.classList.add('page-content--opened');

    pageFooter.classList.remove('page-footer--closed');
    pageFooter.classList.add('page-footer--opened');

    pageRow.classList.remove('row--closed');
    pageRow.classList.add('row--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

    navToggle.classList.add('page-header__toggler--closed');
    navToggle.classList.remove('page-header__toggler--opened');

    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');

    pageContent.classList.add('page-content--closed');
    pageContent.classList.remove('page-content--opened');

    pageFooter.classList.add('page-footer--closed');
    pageFooter.classList.remove('page-footer--opened');

    pageRow.classList.add('row--closed');
    pageRow.classList.remove('row--opened');
  }
});
