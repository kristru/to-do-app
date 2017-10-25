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
