document.addEventListener("DOMContentLoaded", function(){
    let onLoadEl = document.getElementById("onload");
   
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   })
document.addEventListener("DOMContentLoaded", function(){
    let onLoadEl = document.getElementById("onload");
   
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   })

   let directionEl = document.getElementById("clickMe");


   document.addEventListener("click", function(e) {

 directionEl.innerText = `lorem ipsum`;

});

function changeBackgroundColor() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 
    document.body.style.backgroundColor = randomColor; 
  }
  
function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); 
   }
  
document.addEventListener('click', changeBackgroundColor); 

function toggleDarkMode() {
    const body = body.querySelector("body");
    body.classList.toggle('dark-mode'); 
  }
  
  darkModeButton.addEventListener('click', toggleDarkMode); 

  console.log(darkModeButton)