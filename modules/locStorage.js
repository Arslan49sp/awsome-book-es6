class Storage {
  getBooksFromLocalStorage = () => JSON.parse(localStorage.getItem('Library'));

  setBooksToLocalStorage = (books) => localStorage.setItem('Library', JSON.stringify(books));
}

export default Storage;
