const photosContainer = document.querySelector('.photos');
const descriptionContainer = document.querySelector('.description');

fetch('https://your-backend-api.com/photos')
  .then(response => response.json())
  .then(photos => {
    photos.forEach(photo => {
      const photoElement = document.createElement('div');
      photoElement.classList.add('photo');
      photoElement.style.backgroundImage = `url(${photo.imageUrl})`;
      photosContainer.appendChild(photoElement);
    });
  });

fetch('https://your-backend-api.com/descriptions')
  .then(response => response.json())
  .then(descriptions => {
    descriptions.forEach(description => {
      const descriptionHtml = `<p>${description.text}</p>`;
      document.querySelector('.description').innerHTML = descriptionHtml;
    });
  });