function createListItem(taskText) {
    return result;
  }

let listItem = document.createElement('ul');

listItem.textContent = 'This is a list item';
listItem.textContent = 'Home';
listItem.textContent = 'Second Page';
listItem.textContent = 'Disneyland';
listItem.textContent = 'Fun Things to Do';

listItem.setAttribute('class', 'my-list-item'); 

console.log(listItem);

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('toggleButton')) {
    const listItem = event.target.parentNode;
    listItem.classList.toggle('completed');
  }
});
