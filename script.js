

let myLibrary = [];

function Book(){
  //the constructor..
  //user's input from JS will come here, and a new book Object will be created

}



const addBook = (ev)=>{
  ev.preventDefault(); //stop form from submitting
  let book = {
    id: Date.now(),
    title: document.getElementById('bookName').value,
    author: document.getElementById('author').value,
    year: document.getElementById('year').value
    }
    myLibrary.push(book);
    document.forms[0].reset(); //clear form for next entry
    closeForm();
    //display
    console.log('added', {myLibrary});
    console.log(myLibrary[0])
    
}

/*pop-up form from https://www.w3schools.com/howto/howto_js_popup_form.asp */
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let button = document.getElementById('submit');
button.addEventListener('click', addBook);