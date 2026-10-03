let todoIndex = 1

function addTodo() {
    // read the contents of the input box
    // create a new todo on the html dom 
    // step 1 - create a new div
    // step 2 - insert the new div into a parent div
    // clear the input box

    const element = document.getElementById("todoInput");
    const todo = element.value;
    element.value = "";

    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", "todo" + todoIndex);

    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = todo;
    todoDiv.appendChild(todoSpan);

    const todoButton = document.createElement("button");
    todoButton.innerHTML = "delete todo";
    todoButton.setAttribute("onclick", "deleteTodo(" + todoIndex + ")");

    todoDiv.appendChild(todoButton);

    document.getElementById("todos").appendChild(todoDiv);

    todoIndex = todoIndex + 1;
}

function deleteTodo(index) {
    const divElement = document.getElementById("todo" + index);
    divElement.parentElement.removeChild(divElement);
    // alternatively -> document.getElementById("todos").removeChild(divElement);
}