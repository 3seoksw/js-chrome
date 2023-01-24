const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list")
const todoSelectDiv = document.getElementById("select")
const todoSelect = todoSelectDiv.querySelector("#select select")

const TODOS_KEY = "todos"

let todos = []

function saveTODOs() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function checkboxChecker(todo) {
    const TODO_ID = todo.id
    const li = document.getElementById(TODO_ID)
    const input = li.firstChild

    if (todo.completed === true) {
        input.checked = true
    }
    else {
        input.checked = false
    }
}

function checkboxEvent(event) {
    const checker = event.target.checked
    const li = event.target.parentElement

    if (checker === true) {
        event.target.checked = true
        todos.find(todo => todo.id === parseInt(li.id)).completed = true
        saveTODOs()
    }
    else {
        event.target.checked = false
        todos.find(todo => todo.id === parseInt(li.id)).completed = false
        saveTODOs()
    }
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

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.setAttribute("id", "todo-checkbox")
    li.appendChild(checkbox)

    const span = document.createElement("span")
    span.setAttribute("id", "todo-span")
    span.innerText = newTODO.text
    li.appendChild(span)

    const btn = document.createElement("button")
    const iTag = document.createElement("i")
    iTag.setAttribute("class", "fa-regular fa-trash-can")
    btn.appendChild(iTag)
    btn.setAttribute("id", "delBtn")

    checkbox.addEventListener("click", checkboxEvent)
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
        id: Date.now(),
        completed: false
    }
    todos.push(todoObj)
    paintTODO(todoObj)
    saveTODOs()
}

function filterTODOs(event) {
    console.log(event)
}

todoForm.addEventListener("submit", handleTODOSubmit)
todoSelect.addEventListener("select", filterTODOs)

const savedTODOs = localStorage.getItem(TODOS_KEY)

if (savedTODOs != null) {
    const parsedTODOs = JSON.parse(savedTODOs)
    todos = parsedTODOs
    parsedTODOs.forEach(paintTODO)
    parsedTODOs.forEach(checkboxChecker)
}
