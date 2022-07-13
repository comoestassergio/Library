const addBookBtn = document.querySelector(".add-book-btn")
const popUp = document.querySelector(".pop-up")
const cancelBtn = document.querySelector(".cancel-btn")

addBookBtn.addEventListener("click", function(){
    popUp.classList.add("visible")
    cancelBtn.addEventListener("click", function(){
        popUp.classList.remove("visible")
    })
})