//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

  //Get the element with an id of onload
  let onLoadEl = document.getElementById("onload");
 
  //Add some HTML within the element we grabbed
  onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
 
 })

 //Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {

 // When a key is pressed, the element with the id of direction will show the message
 directionEl.innerText = `The Key you pressed is ${e.code}`;

});

let clickMe = document.getElementById("clickMe");
  clickMe.addEventListener("click", function(){
    clickMe.innerText = "You Clicked Me!";
  });

document.getElementById("randomColorBtn").addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 
    document.body.style.backgroundColor = randomColor; 
  }

  function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
   }
   


// document.addEventListener("DOMContentLoaded", function(){
//     let onLoadEl = document.getElementById("onload");
   
//     onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
//    })
// document.addEventListener("DOMContentLoaded", function(){
//     let onLoadEl = document.getElementById("onload");
   
//     onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
//    })

//    let directionEl = document.getElementById("clickMe");


//    document.addEventListener("click", function(e) {
//  directionEl.innerText = `lorem ipsum`;

// });

// function changeBackgroundColor() {
//     let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 
//     document.body.style.backgroundColor = randomColor; 
//   }
  
// function changeBtnStyle() {
//     const btn = document.querySelector(".cool-btn")
//     btn.classList.toggle("glow"); 
//    }
  
//     const darkModeButton = document.getElementById("dark-mode-button")
//     darkModeButton.addEventListener('click', toggleDarkMode);

// function toggleDarkMode() {
//     const body = document.querySelector("body");
//     body.classList.toggle('dark-mode');
//     if(document.getElementById('dark-mode-button').innerText==="Toggle Dark Mode") {
//     document.getElementById('dark-mode-button').innerText="Toggle Light Mode"
//     } else{
//       document.getElementById('dark-mode-button').innerText="Toggle Dark Mode"
//     }
//   }

//   document.addEventListener('click', changeBackgroundColor);

// let globalVar1 = "Hello"; 
//   globalVar2 = "World"; 
  
//   function myFunction() {
//     console.log(globalVar1); 
//     console.log(globalVar2); 
//   }
  
//   myFunction(); 
//   console.log(globalVar1); 
//   console.log(globalVar2);
  
//   const addTask = document.getElementById("taskInput");

//   function addListItem() {
//     const parentList = document.getElementById("taskList");
//     const listItem = document.createElement("li");
//     listItem.textContent = "New Item";
//     parentList.appendChild(listItem);
//   }

//   const listItem = document.getElementById("myListItem");
//   const taskText = "Updated Task Text"; 
//   listItem.textContent = taskText;

//   console.log(myListItem);

// addTask('Home');
// addTask('Second Page');
// addTask('Disneyland');
// addTask('Fun things to Do');

// const taskList = document.getElementById('taskList');

// console.log(taskList);

// const toggleButton = document.querySelector('.ToogleButton');

// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('green'); 
// });



