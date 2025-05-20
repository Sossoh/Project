let currentBookIndex = 0;
const bookImages = ['book1.png', 'book2.png', 'book3.png', 'book4.png'];
function renderBooks() {
  const container = document.querySelector('.book-carousel');
  container.innerHTML = '';

  bookImages.forEach((img, i) => {
    const div = document.createElement('div');
    div.className = 'book-item' + (i === currentBookIndex ? ' active' : '');
    div.style.backgroundImage = `url('${img}')`;

    // 마우스 오버 이벤트
    div.addEventListener('mouseenter', () => {
      if (i !== currentBookIndex) {
        // 선택된 책에 shrink 클래스 추가해서 축소 애니메이션 토글
        const activeBook = container.querySelector('.book-item.active');
        if (activeBook) activeBook.classList.add('shrink');
      }
    });

    // 마우스 아웃 이벤트
    div.addEventListener('mouseleave', () => {
      if (i !== currentBookIndex) {
        const activeBook = container.querySelector('.book-item.active');
        if (activeBook) activeBook.classList.remove('shrink');
      }
    });

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
