const list = document.getElementById("todoList")


document.getElementById("todo").onsubmit = function createTodo(event){
    event.preventDefault(event)
    const inputData = document.getElementById("inputTodo")
    const todoVal = inputData.value.trim()
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.className = "deleteBtn"
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.className = "todo-checkbox"
    if(todoVal !== ""){
        const li = document.createElement("li")
        li.className = "todoEle"
        li.textContent = todoVal
        li.appendChild(checkBox)
        li.appendChild(deleteBtn)
        list.appendChild(li)
        deleteBtn.onclick = ()=>{
            list.removeChild(li)
        }
        
        checkBox.onchange = () =>{
            if(checkBox.checked){
                li.classList.add("todoChecked")
            }else {
                li.classList.remove("todoChecked")
            }
        }
    }
    inputData.value = ""
}