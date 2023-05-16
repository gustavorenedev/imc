const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const calculateButton = document.querySelector("#calculate");
const messageElement = document.querySelector("#message");

let name
let age 
let weight 
let height 

weightInput.addEventListener("change", (event) => {
    weight = event.target.value
    console.log(height)
})
 
heightInput.addEventListener("change", (event) => {
    height = event.target.value
})
 
calculateButton.addEventListener("click", (event) => {
    event.preventDefault()
 
    const imc = weight / (height*height)
 
    if(imc < 18.5){
        messageElement.textContent = "Abaixo do peso ideal"
    }else if (imc >= 18.5 && imc <= 24.9){
        messageElement.textContent = "Peso ideal"
    }else if (imc >= 25 && imc <= 29.9){
        messageElement.textContent = "Sobrepeso"
    }else if (imc >= 30 && imc <= 34.9){
        messageElement.textContent = "Obesidade I"
    }else if (imc >= 35 && imc <= 39.9){
        messageElement.textContent = "Obesidade II"
    }else if (imc >= 40){
        messageElement.textContent = "Obesidade III"
    }
})