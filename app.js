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
    let deleteBtn = document.createElement('button');
    //create value
    let btnValue = document.createTextNode('Delete Task');
    deleteBtn.appendChild(btnValue);
    //set the input's type to checkbox
    checkbox.type = "checkbox";
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

    deleteBtn.addEventListener("click", event =>{
      newLi.remove('li');
    });

  });

}


window.onload = function() {
//  alert("The window has loaded!");
  onReady();
};
