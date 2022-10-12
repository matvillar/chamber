// const lastModify = document.getElementById('last-modify');

// document.getElementById('year').textContent = new Date().getFullYear();
// function lastEdit() {
//   lastModify.textContent = document.lastModified;
// }

// lastEdit();

const lastUpdate = document.getElementById('date');

document.getElementById('year').textContent = new Date().getFullYear();
function lastEdit() {
  lastUpdate.textContent = document.lastModified;
}

lastEdit();
