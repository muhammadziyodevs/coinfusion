document.getElementById('burger').addEventListener('click', function() {
  document.getElementById('menu').classList.toggle('active');
  const burgerIcon = this.querySelector('i');
  burgerIcon.classList.toggle('fa-bars');
  burgerIcon.classList.toggle('fa-times');
});

document.addEventListener('scroll', function() {
const nav = document.querySelector('nav');
const header = document.querySelector('header');

const headerHeight = header.offsetHeight;
const scrollPosition = window.scrollY;

if (scrollPosition > headerHeight) {
  nav.classList.add('scrolled');
} else {
  nav.classList.remove('scrolled');
}
});
