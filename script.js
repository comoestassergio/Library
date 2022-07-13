const addBookBtn = document.querySelector(".add-book-btn")
const section = document.querySelector("#main__section")
const popUp = document.querySelector(".pop-up")

addBookBtn.addEventListener("click", function(){
    popUp.classList.add("visible")
})