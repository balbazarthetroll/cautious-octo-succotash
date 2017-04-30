$(document).ready(function(){
  var toDoList = [];

  function ToDo(title, priority, dueDate, description, completionStatus){
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.completionStatus = completionStatus;
    this.deleteToDo = function(){
      toDoList.splice(toDoList.indexOf(this));
    }
  }

  function newToDoItem(){
    var newTitle, newPriority, newDueDate, newDescription, newCompletionStatus;
    newTitle = $("#taskName").val();
    newPriority = $("#priority").val();
    newDueDate = $("#dueDate").val();
    newDescription = $("#task-description").val();
    newCompletionStatus = $("#completion").val();
    toDoList.push(new ToDo(newTitle, newPriority, newDueDate, newDescription, newCompletionStatus));
    $("#to-do-list").append("<li><h3>"+newTitle+"</h3><p>"+newDescription+"</p><p>Due: "+newDueDate+"</p></li>");
  }

  function retrieveToDos(){
    /*toDoList.filter(function(a,b){

    })*/
    for (var i = 0; i < toDoList.length; i++) {
      $("#to-do-list").append("<li><h3>"+toDoList[i][newTitle]+"</h3><p>"+toDoList[i][newDescription]+"</p></li>");
    }
  }

    retrieveToDos();
  $("#submit").click(newToDoItem);
});
