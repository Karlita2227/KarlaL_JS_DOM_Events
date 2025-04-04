//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

    //Get the element with an id of onload
    let onLoadEl = document.getElementById("onload");
   
    //Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   })

   //Get the element that will show our key code
let directionEl = document.getElementById("clickMe");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("click", function(e) {

 // When a key is pressed, the element with the id of direction will show the message
 directionEl.innerText = `lorem ipsum`;

});

function changeBackgroundColor() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 
    document.body.style.backgroundColor = randomColor; 
  }
  
function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
   }
  
  document.addEventListener('click', changeBackgroundColor); 

 