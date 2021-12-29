function onReady(){
  const createToDoList = document.getElementById('createToDoList');
  const newListName = document.getElementById('newListName');
  const toDoLists = document.getElementById('toDoLists');

  createToDoList.addEventListener('submit',() => {
    //stop submit from refreshing page
    event.preventDefault();

    //get the text
    let listName = newListName.value;

    //create a new List li
    let listsLi = document.createElement('li');

    //create a form for tasks

    //set the List's li to input
    listsLi.textContent = listName;
    //attach the form to the List li

    //attach the List li to the ul
    toDoLists.appendChild(listsLi);


    //empty the input
    newListName.value = '';
  });

}

window.onload = function(){
  onReady();
}
