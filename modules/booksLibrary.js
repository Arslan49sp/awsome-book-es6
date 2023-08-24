class Library {
  constructor() {
    this.books = this.getBooksFromLocalStorage() || this.getDefaultBooks();
  }

  getBooksFromLocalStorage = () => JSON.parse(localStorage.getItem('Library'));

  getDefaultBooks = () => [
    {
      title: 'Clean Code A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
    },
    { title: 'JavaScript The Good Parts', author: 'Douglas Crockford' },
  ];

  initializeLocalStorage() {
    const storedData = this.getBooksFromLocalStorage();
    if (storedData === null) {
      localStorage.setItem('Library', JSON.stringify(this.getDefaultBooks()));
    }
  }

  updateLocalStorage() {
    localStorage.setItem('Library', JSON.stringify(this.books));
  }

  showBooks() {
    const booksContainer = document.querySelector('#booksContainer');
    booksContainer.innerHTML = '';

    for (let i = 0; i < this.books.length; i += 1) {
      const book = this.books[i];

      const bookWrapper = document.createElement('div');
      bookWrapper.classList.add('bookContent');

      const bookInfo = document.createElement('div');
      bookInfo.classList.add('bookInfo');

      const bookTitle = document.createElement('p');
      bookTitle.classList.add('bookTitle');
      bookTitle.textContent = `${book.title}`;

      const by = document.createElement('p');
      by.classList.add('by');
      by.textContent = 'by';

      const bookAuthor = document.createElement('p');
      bookAuthor.classList.add('bookAuthor');
      bookAuthor.textContent = `${book.author}`;

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('buttonContainer');

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('removeBtn');
      removeBtn.dataset.index = i;

      bookInfo.appendChild(bookTitle);
      bookInfo.appendChild(by);
      bookInfo.appendChild(bookAuthor);
      buttonContainer.appendChild(removeBtn);
      bookWrapper.appendChild(bookInfo);
      bookWrapper.appendChild(buttonContainer);

      booksContainer.appendChild(bookWrapper);

      removeBtn.addEventListener('click', () => this.removeBook(i));
    }
  }

  addData(title, author) {
    const newBook = {
      title,
      author,
    };
    this.books.push(newBook);
    this.updateLocalStorage();
    this.showBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.updateLocalStorage();
    this.showBooks();
  }
}

export default Library;
