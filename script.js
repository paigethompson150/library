

let myLibrary = [
  {id:'123',title:'The Hobbit', author:'J.R.R Tolkien', year:'1994'},
  {id:'345',title:'Lord of The Rings', author:'J.R.R Tolkien', year:'1993'},
];


//for now, display the existing library.

function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.display = function(){
  let bookBox = document.createElement('div');
  let bookTitle = document.createElement('h3');
  let bookAuthor = document.createElement('h4');
  let bookYear = document.createElement('h4');

  bookTitle.textContent = this.title;
  bookAuthor.textContent = this.author; 
  bookYear.textContent = this.year; 

  bookBox.append(bookTitle, bookAuthor, bookYear);
  bookBox.className = 'bookItem';
  const element = document.getElementById("bookContainer");
  element.prepend(bookBox);
}

const addBook = (ev)=>{
  ev.preventDefault(); //stop form from submitting

  const book = document.getElementById('bookName').value; 
  const author = document.getElementById('author').value; 
  const year = document.getElementById('year').value; 
  const entry = new Book(book, author, year);
  /*let book = {
    id: Date.now(),
    title: document.getElementById('bookName').value,
    author: document.getElementById('author').value,
    year: document.getElementById('year').value
    }*/

  myLibrary.push(entry);
  document.forms[0].reset(); //clear form for next entry
  closeForm();

    //display
  console.log('added', entry);
  console.log(myLibrary[0])
  entry.display();
}



/*pop-up form from https://www.w3schools.com/howto/howto_js_popup_form.asp */
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//listen for user submit
let button = document.getElementById('submit');
button.addEventListener('click', addBook);

for (var i = 0; i < myLibrary.length; i++){
  myLibrary[i].display;
}