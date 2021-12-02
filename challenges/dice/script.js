const roll = document.document.getElementById("roll");
const result = document.getElementsById("gamearea");



let score = 0;

document.document.getElementById("roll").addEventListener('click', function () {
    score = Math.floor(Math.random() * 20);
    document.getElementsById("gamearea").innerHTML=(`total score ${score}`)};