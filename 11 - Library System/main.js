

//Variables
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const submitInput = document.querySelector("#submit");
const bookList = document.querySelector("#book_list");
const deleteBook = document.querySelectorAll(".delete");

submitInput.addEventListener("click", (e) => {
    if(titleInput.value === "" || authorInput.value === "" || pagesInput.value === "") {
        alert("Please fill in all fields");
    } else {
    e.preventDefault();
    addInputsToDOMTable(titleInput.value, authorInput.value, pagesInput.value);
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    }
});



function addInputsToDOMTable(title, author, pages) {
    const newBook = document.createElement("tr");
    newBook.innerHTML = `
        <td>#</td>
        <td>${title}</td>
        <td>${author}</td>
        <td>${pages}</td>
        <td><button class="btn btn-dark btn-sm delete">Delete</button></td>
    `;
    bookList.appendChild(newBook);
}

//Event listener to remove book from table when button is clicked   
bookList.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
})
