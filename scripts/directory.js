const requestURL = 'https://matvillar.github.io/chamber/json/data.json';
const directorySection = document.querySelector('.directory-section');
const directoryCards = document.querySelector('.directory-cards');

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    const section = document.createElement('section');
    jsonObject['businessDir'].forEach(displayBusinessCards);
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
