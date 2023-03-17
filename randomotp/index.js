let inputEl = document.querySelector("input-el")
let btnEl = document.getElementById("btn-el")
 
function generateOtp(){
    let value = Math.floor(Math.random()*100000 + 10)
    inputEl.textContent = value
}
 
