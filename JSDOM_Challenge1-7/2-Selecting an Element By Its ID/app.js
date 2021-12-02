const heading = document.getElementById("heading");
const input = document.getElementById("input");
const button = document.getElementById("button");


button.addEventListener("click", () => {
heading.style.color = "red"
})
//  CAMBIARE COLORE A ROSSO DOPO UN CLICK


button.addEventListener("click", () => {
    heading.style.color = input.value
    })
// WRITE THE NAME OF THE COLOR E CHANGE AFTER THE CLICK