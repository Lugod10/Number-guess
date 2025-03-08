// Generar un número aleatorio entre 1 y 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("sumitButton").addEventListener("click", function(){
    let userNumber = parseInt(document.getElementById("userInput").value);
    let outputMessage = document.getElementById("outputMessage");

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        outputMessage.textContent = "Escribe un número entre el 1 y 100.";
        outputMessage.style.color = "red";
    } else if (userNumber === secretNumber) {
        outputMessage.textContent = "Bien, adivinaste el número.";
        outputMessage.style.color = "green";
    } else if (userNumber > secretNumber) {
        outputMessage.textContent = "Muy alto";
        outputMessage.style.color = "blue";
    } else {
        outputMessage.textContent = "Muy bajo";
        outputMessage.style.color = "blue";
    }
});