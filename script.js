const myLibrary = [
  {
    id: '123', title: 'The Hobbit', author: 'J.R.R Tolkien', year: '1994',
  },
  {
    id: '345', title: 'Lord of The Rings', author: 'J.R.R Tolkien', year: '1993',
  },
];

function changeColor(el) {
  console.log(el.classList);
}

// for now, display the existing library.

class Book {
  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

Book.prototype.display = function () {
  const bookBox = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('h3');
  const bookYear = document.createElement('h3');
  const bookId = document.createElement('span');
  /* button creation */
  const bookButton = document.createElement('label');
  bookButton.className = 'switch';
  const buttonCheckBox = document.createElement('input');
  buttonCheckBox.type = 'checkbox';
  const buttonSlider = document.createElement('span');
  buttonSlider.className = 'slider';
  buttonSlider.classList.add('round');
  /* SVG creation */
  const newSVG = document.createElement('svg');
  newSVG.className = 'svgButton';
  newSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"/></svg>';

  bookButton.append(buttonCheckBox, buttonSlider);

  bookTitle.textContent = this.title;
  bookAuthor.textContent = this.author;
  bookYear.textContent = this.year;
  /* bookId.textContent = this.id;
  bookId.className = 'hidden'; */

  bookBox.append(bookButton, newSVG, bookTitle, bookAuthor, bookYear);
  bookBox.className = 'bookItem';
  const element = document.getElementById('bookContainer');
  element.prepend(bookBox);

  /* remove div */
  newSVG.onclick = function () {
    this.parentElement.remove(this.bookBox);
  };

  /* change color of div when read */
  buttonSlider.onclick = function () {
    if (this.parentElement.parentElement.classList.contains('read')) {
      this.parentElement.parentElement.classList.remove('read');
    } else {
      this.parentElement.parentElement.classList.add('read');
    }
  };
};

const checkValidity = () => {
  // Checks if user inputs are valid, before making the form disappear again.
  const book = document.getElementById('bookName');
  const author = document.getElementById('author');
  const year = document.getElementById('year');

  if (book.checkValidity() === false) {
    return false;
  }
  if (author.checkValidity() === false) {
    return false;
  }
  if (year.checkValidity() === false) {
    return false;
  }
  return true;
};

function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}

const addBook = () => {
  if (checkValidity()) {
    const id = Date.now();
    const book = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const entry = new Book(id, book, author, year);

    console.log('added');
    myLibrary.push(entry);
    document.forms[0].reset(); // clear form for next entry
    closeForm();

    // display
    entry.display();
  }
};
