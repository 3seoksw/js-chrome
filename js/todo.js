const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let todos = []

function saveTODOs() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deletionBtn(event) {
    const li = event.target.parentElement
    li.remove()
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    saveTODOs()
}

function deletionBtn2(event) {
    const btn = event.target.parentElement 
    const li = btn.parentElement
    li.remove()
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    saveTODOs()
}

function paintTODO(newTODO) {
    const li = document.createElement("li")
    li.setAttribute("class", "todosLi")
    li.id = newTODO.id

    const span = document.createElement("span")
    span.innerText = newTODO.text
    li.appendChild(span)

    const btn = document.createElement("button")
    const iTag = document.createElement("i")
    iTag.setAttribute("class", "fa-regular fa-trash-can")
    btn.appendChild(iTag)
    btn.setAttribute("id", "delBtn")
    btn.addEventListener("click", deletionBtn)
    iTag.addEventListener("click", deletionBtn2)
    li.appendChild(btn)

    todoList.appendChild(li)
}

function handleTODOSubmit(event) {
    event.preventDefault()
    const newTODO = todoInput.value
    todoInput.value = ""

    const todoObj = {
        text: newTODO,
        id: Date.now()
    }
    todos.push(todoObj)
    paintTODO(todoObj)
    saveTODOs()
}

todoForm.addEventListener("submit", handleTODOSubmit)

const savedTODOs = localStorage.getItem(TODOS_KEY)

if (savedTODOs != null) {
    const parsedTODOs = JSON.parse(savedTODOs)
    todos = parsedTODOs
    parsedTODOs.forEach(paintTODO)
}
