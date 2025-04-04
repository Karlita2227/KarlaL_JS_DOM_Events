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
  
    const darkModeButton = document.getElementById("dark-mode-button")
    darkModeButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.querySelector("body");
    body.classList.toggle('dark-mode');
    if(document.getElementById('dark-mode-button').innerText==="Toggle Dark Mode") {
    document.getElementById('dark-mode-button').innerText="Toggle Light Mode"
    } else{
      document.getElementById('dark-mode-button').innerText="Toggle Dark Mode"
    }
  }

let globalVar1 = "Hello"; 
  globalVar2 = "World"; 
  
  function myFunction() {
    console.log(globalVar1); 
    console.log(globalVar2); 
  }
  
  myFunction(); 
  console.log(globalVar1); 
  console.log(globalVar2);
  
  const addTask = document.getElementById("taskInput");

  function addListItem() {
    
    const parentList = document.getElementById("taskList");
  
    const listItem = document.createElement("li");

    listItem.textContent = "New Item";
  
    parentList.appendChild(listItem);
  }
  
