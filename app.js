function onReady(){
  const createToDoList = document.getElementById('createToDoList');
  const newListName = document.getElementById('newListName');
  const toDoLists = document.getElementById('toDoLists');

  createToDoList.addEventListener('submit',() => {
    //stop submit from refreshing page
    event.preventDefault();

    //get the text for the list
      let listName = newListName.value;

    //create a new listCard div
      let listCard = document.createElement('div');
      //add class to listCard
      listCard.classList.add('col-md-4','card','p-2','listName');
      //create a unique id for the listCard
      let listNameId = Math.floor(Math.random() * 100);
      //add created id to listCard
      listCard.setAttribute('id',listNameId);


    //turn newListCard into a node
      let newListCard = document.createTextNode(listName);
    //name newListCard
      listCard.appendChild(newListCard);


    //attach the new card to the toDoLists
      toDoLists.appendChild(listCard);


    //create taskForm for the newListCard
        //create a form element
        let taskForm = document.createElement('form');
        //set the attributes to the form
        taskForm.setAttribute('id','list-'+ listNameId + '-tasks');

        //create the form input
        let taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.id = 'task-form-'+listNameId;

        //create the form button
        let taskSubmit = document.createElement('button');
        taskSubmit.type = 'submit';
        let submitButton = document.createTextNode('add task');
        taskSubmit.appendChild(submitButton);

        //create a ul for the tasks to attach
        let taskList = document.createElement('ul');

        //attach elements to form
        taskForm.appendChild(taskInput);
        taskForm.appendChild(taskSubmit);
        listCard.appendChild(taskForm);
        listCard.appendChild(taskList);


        //task form functionality
        taskForm.addEventListener('submit',() => {
          //stop submit from refreshing page
          event.preventDefault();
          //create a variable for tasks
          let taskValue = taskInput.value;
          console.log(taskValue);
          //create a task name node to attach to ul
          let newTask = document.createElement('li');
          //get the value of task
          let taskName = document.createTextNode(taskValue);
          //attach the node to list ul
          taskList.appendChild(newTask);
          //attach task value to li
          newTask.appendChild(taskName);
          //empty the input
          taskInput.value = '';

        });





    //empty the input
    newListName.value = '';
  });

}

window.onload = function(){
  onReady();
}
