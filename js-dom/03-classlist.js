const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс) додати
 * - remove(класс) видалити
 * - toggle(класс) перемекач
 * - replace(старыйКласс, новыйКЛасс) замінник
 * - contains(класс)
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);

// console.log(linkEl)
// const navEl = document.querySelector('.site-nav')
// console.log(navEl.linkEl);

// navEl.classList.toggle('fjnejnf')
// // navEl.classList.toggle('fjnejnf')

// navEl.classList.add('super-cool')
// // linkEl.classList.add('site-nav__link--current');

// navEl.classList.replace('super-cool', 'qwerty')

// const check = navEl.classList.contains('fjnejnf');

// console.log(check)

