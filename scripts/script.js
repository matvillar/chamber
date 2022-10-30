const dateHeader = document.getElementById('dateHeader');
const lastUpdate = document.getElementById('date');
const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

// Current Date Header
let date = new Date();

// Create a list of names for the months and weekdays
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

// return a formatted date
dateHeader.innerHTML = `${weekday[date.getDay()]}, ${
  months[date.getMonth()]
} ${date.getDate()} ${date.getFullYear()}`;

// Burger Menu
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
