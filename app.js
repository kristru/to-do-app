function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;
    //create a new li
    let newLi = document.createElement('li');
    //create a new input
    let checkbox = document.createElement('input');
    //create a new input
    let deleteBtn = document.createElement('input');
    //set the input's type to checkbox
    checkbox.type = "checkbox";
    //set the input's type to button
    deleteBtn.type = "submit";
    //set deleteBtn text
    deleteBtn.value = "Delete Task";
    //set the title
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //attach the button to the li
    newLi.appendChild(deleteBtn);
    //attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';
  });

  toDoList.addEventListener('submit', event =>{
    //delete title of appended li
    document.getElementById('toDoList');
    toDoList.removeChild('newLi');
  });

  };
window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
