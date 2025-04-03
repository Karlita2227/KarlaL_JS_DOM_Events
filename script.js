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

let randomColorBtn = document.querySelector("button");
    randomColorBtn.addEventListener("click", () => {
    document.body,style.backgroundColor = generateRandomColor ();
})

function generateRandomColor() {
    let randomColorBtn = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return generateRandomColor;
}

