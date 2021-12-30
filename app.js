function onReady(){
  const createToDoList = document.getElementById('createToDoList');
  const newListName = document.getElementById('newListName');
  const toDoLists = document.getElementById('toDoLists');

  createToDoList.addEventListener('submit',() => {
    //stop submit from refreshing page
    event.preventDefault();

    //get the text for the list
    let listName = newListName.value;

    //create a new List div
      let listCard = document.createElement('div');
      //add class to list div cards
      listCard.classList.add('col-md-4','card','listName');
      //turn div into a node
      let newListCard = document.createTextNode(listName);
    //name the new card/div
      listCard.appendChild(newListCard);

    //add a form to listCard
      

    //attach the new card to the toDoLists
    toDoLists.appendChild(listCard);


    //empty the input
    newListName.value = '';
  });

}

window.onload = function(){
  onReady();
}
