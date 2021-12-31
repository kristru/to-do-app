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
      listCard.classList.add('col-md-4','card','listName');
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
        let taskInput = document.createElement('input');
        taskInput.type = 'text';
        let taskSubmit = document.createElement('button');
        taskSubmit.type = 'submit';
        let submitButton = document.createTextNode('add task');
        taskSubmit.appendChild(submitButton);
        console.log(taskForm + taskInput);

        //attach elements to form
        taskForm.appendChild(taskInput);
        taskForm.appendChild(taskSubmit);

        listCard.appendChild(taskForm);
        console.log('form for card '+ listNameId);

        //let form = document.createElement('input');
        //form.type = 'text';
        //console.log(form);





    //empty the input
    newListName.value = '';
  });

}

window.onload = function(){
  onReady();
}
