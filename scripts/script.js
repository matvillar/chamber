// const lastModify = document.getElementById('last-modify');

// document.getElementById('year').textContent = new Date().getFullYear();
// function lastEdit() {
//   lastModify.textContent = document.lastModified;
// }

// lastEdit();

const lastUpdate = document.getElementById('date');
const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.querySelectorAll('.menu li').forEach(n =>
  n.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
  })
);

document.getElementById('year').textContent = new Date().getFullYear();
function lastEdit() {
  lastUpdate.textContent = document.lastModified;
}

lastEdit();
