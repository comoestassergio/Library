const addBookBtn = document.querySelector(".add-book-btn")
const popUp = document.querySelector(".pop-up")
const cancelBtn = document.querySelector(".cancel-btn")
const submitBtn = document.querySelector("#submit-btn")
const titleForm = document.querySelector(".title-form")
const authorForm = document.querySelector(".author-form")
const pagesForm = document.querySelector(".pages-form")
const isRead = document.querySelector(".checkbox")

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

isRead.addEventListener("change", function(){
    isRead.value === "true" ? isRead.value = false :
    isRead.value = true
    console.log(isRead.value)
})


submitBtn.addEventListener("click", function(){
    const newBook = Object.create(Book)
    newBook.title = titleForm.value
    newBook.author = authorForm.value
    newBook.pages = pagesForm.value
    newBook.isRead = isRead.value
    books.push(newBook)
    console.log(books)
})