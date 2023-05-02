const pageInput = document.querySelector('#page-input');
const limitInput = document.querySelector('#limit-input');
const requestButton = document.querySelector('#request-button');
const imageList = document.querySelector('#image-list');

const lastPage = localStorage.getItem('lastPage');
const lastLimit = localStorage.getItem('lastLimit');
if (lastPage && lastLimit) {
  makeRequest(lastPage, lastLimit);
}

requestButton.addEventListener('click', () => {
  const page = parseInt(pageInput.value);
  const limit = parseInt(limitInput.value);
  let errorMessage = '';

  if (isNaN(page) || page < 1 || page > 10) {
    errorMessage += 'Номер страницы вне диапазона от 1 до 10\n';
  }
  if (isNaN(limit) || limit < 1 || limit > 10) {
    errorMessage += 'Лимит вне диапазона от 1 до 10\n';
  }
  if (errorMessage) {
    alert(errorMessage);
    return;
  }

  makeRequest(page, limit);
});

function makeRequest(page, limit) {
  localStorage.setItem('lastPage', page);
  localStorage.setItem('lastLimit', limit);

  const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      imageList.innerHTML = '';
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = item.download_url;
        img.width = 300;
        imageList.appendChild(img);
      });
    })
    .catch(error => console.error(error));
}
