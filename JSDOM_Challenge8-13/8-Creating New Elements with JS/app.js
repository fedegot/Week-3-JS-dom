// const submit = document.getElementById("submit")

// submit.onclick = function (event) {
//     let node = document.createElement("li");
    
// }



    document.querySelector('#submit').addEventListener('click', function () {
      let input = document.querySelector('#input');
      let list = document.querySelector('#list'); 
      
      let item = document.createElement('li'); // create li node
      let itemText = document.createTextNode(input.value); // create text node
      
      item.appendChild(itemText); // append text node to li node
      list.appendChild(item); // append li node to list
      
      input.value = ""; // clear input
    });




    document.querySelector('#showhide-btn').addEventListener('click', function () {
        let input = document.querySelector('#input');
        let list = document.querySelector('#list'); 
        
        // let item = document.createElement('li'); // create li node
        // let itemText = document.createTextNode(input.value); // create text node
        
        // item.removeChild(itemText); // append text node to li node
        list.removeChild(item); // append li node to list
        
        input.value = ""; // clear input
      });
   
 