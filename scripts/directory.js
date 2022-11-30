const requestURL = 'https://matvillar.github.io/chamber/json/data.json';
const directorySection = document.querySelector('.directory-section');
const directoryCards = document.querySelector('.directory-cards');
const directoryLists = document.querySelector('.directory-lists');
const circledMenu = document.getElementById('circledMenu');
const listMenu = document.getElementById('listMenu');

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    const section = document.createElement('section');
    jsonObject['businessDir'].forEach(displayBusinessCards);
    jsonObject['businessDir'].forEach(displayListCards);
  });

function displayBusinessCards(businessCard) {
  let directoryCard = document.createElement('div');
  let directoryImg = document.createElement('img');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let webLink = document.createElement('a');

  // setting attributes
  directoryCard.setAttribute('class', 'directory-card');
  directoryImg.setAttribute('src', businessCard.imageURL);
  directoryImg.setAttribute('loading', 'lazy');
  directoryImg.setAttribute('alt', businessCard.name);
  webLink.setAttribute('href', businessCard.url);
  //  append Childs

  directoryCard.appendChild(directoryImg);
  directoryCard.appendChild(address);
  directoryCard.appendChild(phone);
  directoryCard.appendChild(webLink);
  directoryCards.appendChild(directoryCard);
  directorySection.appendChild(directoryCards);
  // inner Html
  webLink.innerHTML = businessCard.url;
  address.innerHTML = businessCard.address;
  phone.innerHTML = businessCard.phone;
}

function displayListCards(listCards) {
  let directoryList = document.createElement('div');
  let companyName = document.createElement('p');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let webLink = document.createElement('a');
  // setting attributes
  directoryList.setAttribute('class', 'directory-list');
  webLink.setAttribute('href', listCards.url);
  // Append Childs
  directoryList.appendChild(companyName);
  directoryList.appendChild(address);
  directoryList.appendChild(phone);
  directoryList.appendChild(webLink);
  directoryLists.appendChild(directoryList);
  directorySection.appendChild(directoryLists);
  //Inner Html
  companyName.innerHTML = listCards.name;
  webLink.innerHTML = listCards.url;
  address.innerHTML = listCards.address;
  phone.innerHTML = listCards.phone;
}

circledMenu.addEventListener('click', () => {
  directoryLists.classList.add('d-none');
  directoryCards.classList.remove('d-none');
  circledMenu.classList.add('active');
  listMenu.classList.remove('active');
});
listMenu.addEventListener('click', () => {
  directoryCards.classList.add('d-none');
  directoryLists.classList.remove('d-none');
  circledMenu.classList.remove('active');
  listMenu.classList.add('active');
});
