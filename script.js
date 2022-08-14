

let myLibrary = [
  {id:'123',title:'The Hobbit', author:'J.R.R Tolkien', year:'1994'},
  {id:'345',title:'Lord of The Rings', author:'J.R.R Tolkien', year:'1993'},
];

function changeColor(el){
  console.log('test');
  console.log(el.classList);
  //traverse up each parentNode
  //if (el.classList.contains('active')){
 //   el.classList.remove('active');
 // }
//else{
 //   el.classList.add('active');
 // }
}


//for now, display the existing library.

function Book(id, title, author, year){
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.display = function(){
  let bookBox = document.createElement('div');
  let bookTitle = document.createElement('h2');
  let bookAuthor = document.createElement('h3');
  let bookYear = document.createElement('h3');
  let bookId = document.createElement('span');
  /*button creation */
  let bookButton = document.createElement('label')
  bookButton.className = 'switch';
  let buttonCheckBox = document.createElement('input');
  buttonCheckBox.type = 'checkbox';
  let buttonSlider = document.createElement('span');
  buttonSlider.className = 'slider';
  buttonSlider.classList.add('round');
  /* SVG creation */
  let newSVG = document.createElement('svg');
  newSVG.className = 'svgButton';
  newSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"/></svg>'
  


  bookButton.append(buttonCheckBox, buttonSlider);

  bookTitle.textContent = this.title;
  bookAuthor.textContent = this.author; 
  bookYear.textContent = this.year; 
  /*bookId.textContent = this.id;
  bookId.className = 'hidden';*/

  bookBox.append(bookButton, newSVG, bookTitle, bookAuthor, bookYear /*bookId*/);
  bookBox.className = 'bookItem';
  const element = document.getElementById("bookContainer");
  element.prepend(bookBox);

  /*remove div*/
  newSVG.onclick = function(){
    this.parentElement.remove(this.bookBox);
  };

  /*change color of div when read*/
  buttonSlider.onclick = function(){
    console.log('test');
    if (this.parentElement.parentElement.classList.contains('read')){
      console.log('already read');
      this.parentElement.parentElement.classList.remove('read');
    }
    else {
      console.log('read');
      this.parentElement.parentElement.classList.add('read');
    }
    
  }
}

const addBook = (ev)=>{
  ev.preventDefault(); //stop form from submitting

  const id = Date.now();
  const book = document.getElementById('bookName').value; 
  const author = document.getElementById('author').value; 
  const year = document.getElementById('year').value; 
  const entry = new Book(id, book, author, year);
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




