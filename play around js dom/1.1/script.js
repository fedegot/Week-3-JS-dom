const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
const listInput = document.querySelector(".list-input");

// text.style.color = "red";

// text.classList.add(`change`)

changeColor.addEventListener(`click`, function() {
    text.classList.toggle(`change`)
})

const userList = document.querySelectorAll(`.name-list li`)
/////////////////////////
const score = document.getElementById(`#score`);
const lose = document.getElementsById(`#lscore`);
const total = document.getElementsByClassName(`.totscore2`);




////////////////////////////////////////////

<div id="counter">o</div>
<button id="reset">reset</button>
javascript

var count=0

document.getElementById("counter").onclick=function(){
    count=count+1;
    this.innerHTML=count}

document.getElementById("reset").onclick=function(){
    count=0
    document.getElementById("counter").innerHTML=count;
}


////////////////////////////////////////////////

<div id="counter">o</div>
<button id="reset">reset</button>
javascript

var count=0

document.getElementsByClassName(`score`).onclick=function(){
    count=count+1;
    this.innerHTML=count}

document.getElementById("reset").onclick=function(){
    count=0
    document.getElementById("counter").innerHTML=count;
}

