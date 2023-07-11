import Book from './modules/book.js';
import timerFunction from './modules/functions.js';
import loadContent from './modules/navigation-menu.js';

window.addEventListener('load', new Book().displayItems());
timerFunction();

const addBtn = document.getElementById('add-btn');
const titleField = document.getElementById('title');
const authorField = document.getElementById('author');
addBtn.addEventListener('click', () => {
  if (titleField.value !== '' && authorField.value !== '') {
    const newBook = new Book(titleField.value, authorField.value);
    newBook.addBook();
    titleField.value = '';
    authorField.value = '';
  }
});

const listMenu = document.getElementById('list-menu');
const addMenu = document.getElementById('add-menu');
const contactMenu = document.getElementById('contact-menu');
listMenu.addEventListener('click', () => {
  loadContent('list-menu');
});
addMenu.addEventListener('click', () => {
  loadContent('add-menu');
});
contactMenu.addEventListener('click', () => {
  loadContent('contact-menu');
});