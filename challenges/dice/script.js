let list = [];
let sum = 0;
let button = document.getElementById("roll");
let write = document.getElementById("gamearea");
const pic = document.getElementById("dice1")

button.onclick=function (){
pic.style.background = "url('./pic/di.jpg') no-repeat center center";
let score = Math.floor(Math.random() * 6);
list.push(score);
sum += score;

write.innerHTML = sum;

if (sum >= 20){
write.innerHTML = (`congratulation last dice: ${score} and your total score is: ${sum}`), sum =0, list.length = 0;}
else if (score <= 1){
write.innerHTML = (`your last dice was: ${score} game over `), sum =0, list.length = 0;}
}