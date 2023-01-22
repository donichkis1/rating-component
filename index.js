const mainContainer = document.querySelector(".container")
const thankContainer = document.querySelector(".container2")
const submitButton = document.getElementById("activate")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rating")

submitButton.addEventListener("click", () => {
    thankContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thankContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})

const container1 = document.querySelector(".container1")
const container2 = document.querySelector(".container2")
const submit = document.querySelector("activate")
const again = document.getElementById("rate-again")
const hating = document.getELementById("rating")
const hate = document.querySelectorAll(".rating")

submit.addEventListener("click", () => {
    container2.classList.remove("hidden")
    container1.style.display = "none";

})

again.addEventListener("click", () => {
    container2.classList.add("hidden")
    container1.style.display = "block"
})

hate.forEach((rate) => {
    hate.addEventListener("click", () => {
        hating.innerHtml = hate.innerHTML;
    })
})

