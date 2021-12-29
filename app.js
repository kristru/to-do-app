function onReady() {
 const toDos = [];
 const  addToDoForm = document.getElementById('addToDoForm');


 function createNewToDo() {
   const newToDoText = document.getElementById('newToDoText');
   if (!newToDoText.value) {return}

   toDos.push({
     title:newToDoText.value,
     complete: false
   });

   newToDoText.value = '';

   renderTheUI(toDos);
 }

addToDoForm.addEventListener('submit', event =>{
  event.preventDefault();
  createNewToDo();
});

function renderTheUI(toDos){
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', event => {
    // prevent 'submit' from refreshing the page(default behavior)
    event.preventDefault();
    // get the text
    let task = newToDoText.value;
    //create a new li
    let newLi = document.createElement('li');
    //create a new input/checkbox
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
    //set the task
    newLi.textContent = task;
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

  toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteBtn = document.createElement('button');
    checkbox.type = "checkbox";
    deleteBtn.textContent = ('Delete Task');

    newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', event =>{
      event.preventDefault();
      newLi.remove('li');
    });

    });
};


};


window.onload = function() {
  onReady();
};
