// Selector
const form = document.querySelector('form');
const input = document.querySelector('.input');
const todoList = document.querySelector('.todo-list');

// Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // ToDo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // ToDo Items
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoDiv.appendChild(todoItem)
    // Complete & Delete Buttons
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn')
    completeBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    todoDiv.appendChild(completeBtn)
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    todoDiv.appendChild(deleteBtn)
    // Get ToDo Value
    const inputValue = input.value;
    todoItem.innerHTML = inputValue

    // Show Data
    todoList.appendChild(todoDiv)
    input.value = '';
})

todoList.addEventListener('click', function(e){
    const item = e.target;
    // console.log(item.classList[0]);
    if (item.classList[0]==='delete-btn') {
        item.parentElement.remove();
    }
    if (item.classList[0]==='complete-btn') {
        item.parentElement.classList.toggle('completed');
    }

})