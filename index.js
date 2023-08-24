import navConfiguration from './modules/navigationBar.js';
import Library from './modules/booksLibrary.js';
import showTime from './modules/displayDate.js';

document.addEventListener('DOMContentLoaded', () => {
  const booksCollection = new Library();
  booksCollection.initializeLocalStorage();

  // this will toggle section of the page.
  navConfiguration();

  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    booksCollection.addData(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  });

  booksCollection.showBooks();
});

// Displaying time using luxon library.
showTime();
setInterval(showTime, 1000);
