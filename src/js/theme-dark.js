const refs = {
  htmlDark: document.querySelector('html'),
  iconBgc: document.querySelector('header__icon-sun'),
  darkBtn: document.querySelector('.header__theme'),
};

refs.darkBtn.addEventListener('click', onClickDarkBtn);
function onClickDarkBtn(e) {
  e.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClass();
}
function addDarkClass() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      refs.htmlDark.classList.add('dark');

      //змінити іконку або змінити колір іконки
      refs.iconBgc.classList.add('header__icon-sun--white');
    } else {
      refs.htmlDark.classList.remove('dark');
    }
  } catch (err) {}
}

addDarkClass();
