const benefit1 = document.getElementById('benefit-1');
const benefit2 = document.getElementById('benefit-2');
const benefit3 = document.getElementById('benefit-3');
const benefit4 = document.getElementById('benefit-4');
const member = document.getElementsByClassName('member');
// const member2 = document.querySelector('.member2');
// const member3 = document.querySelector('.member3');
// const member4 = document.querySelector('.member4');
const memberSelect = document.querySelectorAll('.new-membership input');

memberSelect.forEach((option) => {
  option.addEventListener('click', (e) => {
    if (e.target.value === '1') {
      member[0].classList.remove('d-none');
      member[1].classList.add('d-none');
      member[2].classList.add('d-none');
      member[3].classList.add('d-none');
    } else if (e.target.value === '2') {
      member[0].classList.add('d-none');
      member[1].classList.remove('d-none');
      member[2].classList.add('d-none');
      member[3].classList.add('d-none');
    } else if (e.target.value === '3') {
      member[0].classList.add('d-none');
      member[1].classList.add('d-none');
      member[2].classList.remove('d-none');
      member[3].classList.add('d-none');
    } else if (e.target.value) {
      member[0].classList.add('d-none');
      member[1].classList.add('d-none');
      member[2].classList.add('d-none');
      member[3].classList.remove('d-none');
    }
  });
});
