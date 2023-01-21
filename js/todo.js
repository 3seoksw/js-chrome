const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list")

function painTODO(newTODO) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(span)
    span.innerText = newTODO
    todoList.appendChild(li)
}

function handleTODOSubmit(event) {
    event.preventDefault()
    const newTODO = todoInput.value
    todoInput.value = ""
    painTODO(newTODO)
}

todoForm.addEventListener("submit", handleTODOSubmit)
