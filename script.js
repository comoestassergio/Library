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
    mainSection.classList.add("dimmed")
    cancelBtn.addEventListener("click", function(){
        popUp.classList.remove("visible")
        mainSection.classList.remove("dimmed")
    })
})

isRead.addEventListener("change", checkBoxValue())


submitBtn.addEventListener("click", function(){
    pushBook(createBook(), books)
    popUp.classList.remove("visible")
    mainSection.classList.remove("dimmed")
    console.log(books)
    bookGridAddBook()
    clearInput()
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
    isRead.value === "true" ? isRead.value = "Finished" :
    isRead.value = "Not finished yet"
}


function bookGridAddBook() {
    const bookCard = document.createElement("div")
    bookCard.classList.add("book-card")
    const bookTitle = document.createElement("p")
    const bookAuthor = document.createElement("p")
    const bookPages = document.createElement("p")
    const readStatus = document.createElement("p")
    const closeBtn = document.createElement("button")

    bookTitle.classList.add("card__title")
    bookAuthor.classList.add("card__author")
    bookPages.classList.add("card__pages")
    readStatus.classList.add("card__read")
    closeBtn.classList.add("book-card__close-btn")

    const lastBook = books[books.length-1]

    bookTitle.textContent = lastBook.title
    bookAuthor.textContent = lastBook.author
    bookPages.textContent = `${lastBook.pages} pages`
    readStatus.textContent = lastBook.isRead

    bookCard.dataset.id = books.indexOf(lastBook)
    closeBtn.dataset.id = books.indexOf(lastBook)


    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(readStatus)
    bookCard.appendChild(closeBtn)
    mainSection.appendChild(bookCard)

    closeBtn.addEventListener("click", function(){
        if (closeBtn.dataset.id === bookCard.dataset.id){
            bookCard.style.display = "none";
            let deletedBook = books.splice(books[bookCard.dataset.id], 1)
            console.log(books)
        }
    })
}

function clearInput() {
    titleForm.value = null
    authorForm.value = null
    pagesForm.value = null
    isRead.value = false
}