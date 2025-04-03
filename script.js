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
 directionEl.innerText = `lorem ipsum ${e.code}`;

});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));

console.log(getRandomInt(1));

console.log(Math.random());

function countRabbits() {
    for(let i = 1; i<= 3; i++){
        alert("Rabbit number" + i);
    }
}

greetingH1.addEventListener("click", countRabbits)

function greet(){
    alert("Hello!")
}

const greetingH1 = document.querySelector("#greeting");

greetingH1.onclick = greet;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});