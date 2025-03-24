let todos = JSON.parse(localStorage.getItem('todos')) || [];
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Load saved todos on startup
renderTodos();

