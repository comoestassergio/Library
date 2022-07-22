const main = {
    books: [],

    init: function(){
        this.cacheDom()
        this.connectButton(this.addBookBtn, this.openPopUp)
    },

    cacheDom: function() {
        this.addBookBtn = document.querySelector(".add-book-btn")
        this.popUp = document.querySelector(".pop-up")
        this.cancelBtn = document.querySelector(".cancel-btn")
        this.submitBtn = document.querySelector("#submit-btn")
        this.titleForm = document.querySelector(".title-form")
        this.authorForm = document.querySelector(".author-form")
        this.pagesForm = document.querySelector(".pages-form")
        this.isRead = document.querySelector(".checkbox")
        this.mainSection = document.querySelector("#main__section")
    },

    openPopUp: function(){
        main.popUp.classList.add("visible")
        main.mainSection.classList.add("dimmed")
        main.connectButton(main.cancelBtn, main.closePopUp)
        main.connectButton(main.submitBtn, function(){
            main.createBook(main.getInput())
            main.clearInput()
            main.closePopUp()
            main.renderBook(main.createBookCard())
        })
    },

    connectButton: function(button, action){
        button.addEventListener("click", action)
    },

    closePopUp: function(){
        main.popUp.classList.remove("visible")
        main.mainSection.classList.remove("dimmed")
    },

    getInput: function(){
        const bookTitle = main.titleForm.value
        const bookAuthor = main.authorForm.value
        const bookPages = main.pagesForm.value
        const readStatus = main.checkReadStatus()

        if (bookTitle.length > 0 && bookAuthor.length > 0 && bookPages.length > 0){
            return {bookTitle, bookAuthor, bookPages, readStatus}
        }
    },

    createBook: function(obj){
        main.books.push(obj)
        console.log(main.books)
    },

    clearInput: function(){
        main.titleForm.value = ""
        main.authorForm.value = ""
        main.pagesForm.value = ""
    },

    test: function(){
        console.log("test")
    },

    createBookCard: function(){
        const card = document.createElement("div")
        const cardTitle = document.createElement("p")
        const cardAuthor = document.createElement("p")
        const cardPages = document.createElement("p")
        const cardReadStatus = document.createElement("button")
        const cardRemoveBtn = document.createElement("button")

        card.classList.add("book-card")
        cardTitle.classList.add("book-card__title")
        cardAuthor.classList.add("book-card__author")
        cardPages.classList.add("book-card__pages")
        cardReadStatus.classList.add("book-card__read", "btn")
        cardRemoveBtn.classList.add("book-card__close-btn")


        card.dataset.id = main.books.indexOf(main.books[main.books.length - 1])
        cardTitle.dataset.id = card.dataset.id
        cardAuthor.dataset.id = card.dataset.id
        cardPages.dataset.id = card.dataset.id
        cardReadStatus.dataset.id = card.dataset.id
        cardRemoveBtn.dataset.id = card.dataset.id

        card.appendChild(cardTitle)
        card.appendChild(cardAuthor)
        card.appendChild(cardPages)
        card.appendChild(cardReadStatus)
        card.appendChild(cardRemoveBtn)

        return {card, cardTitle, cardAuthor, cardPages, cardReadStatus, cardRemoveBtn}
    },

    renderBook: function(bookCard){
        const currentBook = bookCard
        const lastBookAuthor = main.books[main.books.length - 1].bookAuthor
        const lastBookTitle = main.books[main.books.length - 1].bookTitle
        const lastBookPages = main.books[main.books.length - 1].bookPages
        const lastBookReadStatus = main.books[main.books.length - 1].readStatus

        currentBook.cardTitle.textContent = lastBookTitle
        currentBook.cardAuthor.textContent = lastBookAuthor
        currentBook.cardPages.textContent = lastBookPages
        currentBook.cardReadStatus.textContent = lastBookReadStatus

        this.mainSection.appendChild(currentBook.card)
    },

    checkReadStatus: function(){
        if (main.isRead.checked){
            return "Finished"
        }
        return "Not finished"
    }
}

main.init()





// // Data structure

// const books = []

// const Book = {
//     title: this.title,
//     author: this.author,
//     pages: this.pages,
//     isRead: this.isRead,
//     info: function() {
//         return `${this.title}, ${this.author}, ${this.pages}`
//     }
// }

// // Listening for clicks on Add Book button

// addBookBtn.addEventListener("click", function(){
//     popUp.classList.add("visible")
//     mainSection.classList.add("dimmed")
//     cancelBtn.addEventListener("click", function(){
//         popUp.classList.remove("visible")
//         mainSection.classList.remove("dimmed")
//     })
// })

// // Create a Book object and trigger book card creation

// submitBtn.addEventListener("click", function(){
//     let tempBook = createBook()
//     pushBook(tempBook, books)
//     commitToLocalStorage(books)
//     popUp.classList.remove("visible")
//     mainSection.classList.remove("dimmed")
//     bookGridAddBook()
//     clearInput()
// })

// // Create a book card


// function bookGridAddBook() {
//     const bookCard = document.createElement("div")
//     bookCard.classList.add("book-card")
//     const bookTitle = document.createElement("p")
//     const bookAuthor = document.createElement("p")
//     const bookPages = document.createElement("p")
//     const readStatus = document.createElement("button")
//     const closeBtn = document.createElement("button")

//     bookTitle.classList.add("card__title")
//     bookAuthor.classList.add("card__author")
//     bookPages.classList.add("card__pages")
//     readStatus.classList.add("card__read", "btn")
//     closeBtn.classList.add("book-card__close-btn")

//     const lastBook = books[books.length-1]

//     bookTitle.textContent = lastBook.title
//     bookAuthor.textContent = lastBook.author
//     bookPages.textContent = `${lastBook.pages} pages`
//     readStatus.textContent = lastBook.isRead

//     bookCard.dataset.id = books.indexOf(lastBook)
//     closeBtn.dataset.id = books.indexOf(lastBook)
//     readStatus.dataset.id = books.indexOf(lastBook)


//     bookCard.appendChild(bookTitle)
//     bookCard.appendChild(bookAuthor)
//     bookCard.appendChild(bookPages)
//     bookCard.appendChild(readStatus)
//     bookCard.appendChild(closeBtn)
//     mainSection.appendChild(bookCard)

//     readStatus.addEventListener("click", function(){
//         const currentBook = books[readStatus.dataset.id]

//         if (currentBook.isRead === "Not finished"){
//             currentBook.isRead = "Finished"
//         } else {
//             currentBook.isRead = "Not finished"
//         }

//         readStatus.textContent = currentBook.isRead
//     })

//     closeBtn.addEventListener("click", function(){
//         if (closeBtn.dataset.id === bookCard.dataset.id){
//             bookCard.style.display = "none";
//             let deletedBook = books.splice(books[bookCard.dataset.id], 1)
//             console.log(books)
//         }
//     })
// }

// window.onload = function(){
//     for (let i = 0; i < window.localStorage.length; i++){
//         let localStorageBook = JSON.parse(window.localStorage[i])
//         console.log(localStorageBook)

//         const bookCard = document.createElement("div")
//         bookCard.classList.add("book-card")
//         const bookTitle = document.createElement("p")
//         const bookAuthor = document.createElement("p")
//         const bookPages = document.createElement("p")
//         const readStatus = document.createElement("button")
//         const closeBtn = document.createElement("button")

//         bookTitle.classList.add("card__title")
//         bookAuthor.classList.add("card__author")
//         bookPages.classList.add("card__pages")
//         readStatus.classList.add("card__read", "btn")
//         closeBtn.classList.add("book-card__close-btn")

//         bookTitle.textContent = localStorageBook.title
//         bookAuthor.textContent = localStorageBook.author
//         bookPages.textContent = `${localStorageBook.pages} pages`
//         readStatus.textContent = localStorageBook.isRead


//         bookCard.appendChild(bookTitle)
//         bookCard.appendChild(bookAuthor)
//         bookCard.appendChild(bookPages)
//         bookCard.appendChild(readStatus)
//         bookCard.appendChild(closeBtn)
//         mainSection.appendChild(bookCard)

//         readStatus.addEventListener("click", function(){
//             const currentBook = books[readStatus.dataset.id]
    
//             if (currentBook.isRead === "Not finished"){
//                 currentBook.isRead = "Finished"
//             } else {
//                 currentBook.isRead = "Not finished"
//             }
    
//             readStatus.textContent = currentBook.isRead
//         })
    
//         closeBtn.addEventListener("click", function(){
//             if (closeBtn.dataset.id === bookCard.dataset.id){
//                 bookCard.style.display = "none";
//                 let deletedBook = books.splice(books[bookCard.dataset.id], 1)
//             }
//         })
//     }
// }

// // Utilities

// function createBook(){
//     const newBook = Object.create(Book)
//     newBook.title = titleForm.value
//     newBook.author = authorForm.value
//     newBook.pages = pagesForm.value
//     newBook.isRead = isRead.value
//     return newBook
// }

// function pushBook(book, arr){
//     arr.push(book)
// }

// function clearInput() {
//     titleForm.value = null
//     authorForm.value = null
//     pagesForm.value = null
// }

// function checkBoxValue(book) {
//     isRead.checked ? isRead.value = "Finished" :
//     isRead.value = "Not finished"

//     isRead.textContent = book.isRead

//     console.log(isRead.checked)
//     console.log(isRead.value)
// }

// function commitToLocalStorage(obj){
//     window.localStorage.setItem(books.indexOf(obj),  JSON.stringify(books[books.length-1]))
// }

// function getFromLocalStorage(obj) {
//     return JSON.parse(window.localStorage.getItem(books.indexOf(obj)))
// }

// function removeFromLocalStorage(obj){
//     window.localStorage.removeItem(books.indexOf(obj))
// }