window.onload=function(){
let textBox = document.getElementById('message');
textBox.addEventListener('keydown', (event) => {
    document.getElementById("eventResK1").innerHTML = (event.key);
    document.getElementById("eventResC1").innerHTML = (event.code);
    document.getElementById("eventResW1").innerHTML = (event.which);

});};
