let todos = JSON.parse(localStorage.getItem('todos')) || [];
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Load saved todos on startup
renderTodos();

// added todo function
function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    saveTodos();
    renderTodos();
    todoInput.value = '';
}

// Render Todo
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})">
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Toggle and delete function
function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

