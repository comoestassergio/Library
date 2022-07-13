const addBookBtn = document.querySelector(".add-book-btn")
const popUp = document.querySelector(".pop-up")
const cancelBtn = document.querySelector(".cancel-btn")
const submitBtn = document.querySelector("#submit-btn")
const titleForm = document.querySelector(".title-form")
const authorForm = document.querySelector(".author-form")
const pagesForm = document.querySelector(".pages-form")
const isRead = document.querySelector(".checkbox")
const mainSection = document.querySelector("#main__section")

const books = []

const Book = {
    title: this.title,
    author: this.author,
    pages: this.pages,
    isRead: this.isRead,
    info: function() {
        return `${this.title}, ${this.author}, ${this.pages}`
    }
}

addBookBtn.addEventListener("click", function(){
    popUp.classList.add("visible")
    cancelBtn.addEventListener("click", function(){
        popUp.classList.remove("visible")
    })
})

isRead.addEventListener("change", checkBoxValue())


submitBtn.addEventListener("click", function(){
    pushBook(createBook(), books)
    popUp.classList.remove("visible")
    console.log(books)
    bookGridOn()
    bookGridAddBook()
})

function createBook(){
    const newBook = Object.create(Book)
    newBook.title = titleForm.value
    newBook.author = authorForm.value
    newBook.pages = pagesForm.value
    newBook.isRead = isRead.value
    return newBook
}

function pushBook(book, arr){
    arr.push(book)
}

function checkBoxValue() {
    isRead.value === "true" ? isRead.value = false :
    isRead.value = true
}


function bookGridAddBook() {
    const bookCard = document.createElement("div")
    bookCard.classList.add("book-card")
    const bookTitle = document.createElement("p")
    const bookAuthor = document.createElement("p")
    const bookPages = document.createElement("p")
    const readStatus = document.createElement("p")

    bookTitle.textContent = books[0].title
    bookAuthor.textContent = books[0].author
    bookPages.textContent = books[0].pages
    readStatus.textContent = books[0].isRead

    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(readStatus)
    mainSection.appendChild(bookCard)
}