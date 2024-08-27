// const body = document.querySelector("#idPavadinimas")
// const body = document.querySelector(".klasesPavadinimas")
// const body = document.querySelector("elementasPavadinimas")

const body = document.querySelector("body") 
const hex = document.querySelector(".hex")
const btn = document.querySelector("button")

function generateColor() {

}


btn.addEventListener("click", ()=> {
const randomColor = Math.random().toString(16).slice(2,8)

// console.log(randomColor);

hex.innerHTML = "#" + randomColor

body.style.backgroundColor = "#" + randomColor

})

