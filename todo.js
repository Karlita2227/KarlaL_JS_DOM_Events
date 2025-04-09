
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");



addTaskButton.addEventListener("click",addTask);


taskList.addEventListener("click", itemComplete);



function itemComplete(e){
    e.target.classList.toggle("itemComplete")
}

function createListItem(taskText){
    const listItem = document.createElement('li');
    const listSpan = document.createElement('span')
    listSpan.innerHTML = taskText;
    listItem.appendChild(listSpan);
    return listItem

}

function addTask(){
   
    const taskText = taskInput.value;
    const listItem = createListItem(taskText);
    taskList.appendChild(listItem);
    taskInput.value = "";

}