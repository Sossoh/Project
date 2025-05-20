// script.js
let currentBookIndex = 0;
const bookImages = ['book1.png', 'book2.png', 'book3.png', 'book4.png'];

function renderBooks() {
  const container = document.querySelector('.book-carousel');
  container.innerHTML = '';
  bookImages.forEach((img, i) => {
    const div = document.createElement('div');
    div.className = 'book-item' + (i === currentBookIndex ? ' active' : '');
    div.style.backgroundImage = `url('${img}')`;
    div.onclick = () => {
      if (i === currentBookIndex) {
        window.location.href = 'book.html';
      } else {
        currentBookIndex = i;
        renderBooks();
      }
    };
    container.appendChild(div);
  });
}

function nextBook() {
  currentBookIndex = (currentBookIndex + 1) % bookImages.length;
  renderBooks();
}

function prevBook() {
  currentBookIndex = (currentBookIndex - 1 + bookImages.length) % bookImages.length;
  renderBooks();
}

window.onload = renderBooks;


function renderBooks() {
  const container = document.querySelector('.book-carousel');
  container.innerHTML = '';
  bookImages.forEach((img, i) => {
    const div = document.createElement('div');
    div.className = 'book-item' + (i === currentBookIndex ? ' active' : '');
    div.style.backgroundImage = `url('${img}')`;
    div.onclick = () => {
      if (i === currentBookIndex) {
        localStorage.setItem('selectedBookIndex', i);
        window.location.href = 'book.html';
      } else {
        currentBookIndex = i;
        renderBooks();
      }
    };
    container.appendChild(div);
  });
}

function nextBook() {
  currentBookIndex = (currentBookIndex + 1) % bookImages.length;
  renderBooks();
}

function prevBook() {
  currentBookIndex = (currentBookIndex - 1 + bookImages.length) % bookImages.length;
  renderBooks();
}

window.onload = renderBooks;

