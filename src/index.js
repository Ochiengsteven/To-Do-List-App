/* eslint-disable no-use-before-define */
// import css stylesheet
import './style.css';
// import icon images
import reload from './assets/reload.png';
import move from './assets/vertical-dots.png';
import add from './assets/plus.png';

// import status updates methods
// eslint-disable-next-line no-unused-vars
import { updateTaskStatus, clearCompletedTasks } from './modules/statusUpdate.js';

// icons
const reloadIcon = new Image();
reloadIcon.src = reload;

const moveIcon = new Image();
moveIcon.src = move;

const addIcon = new Image();
addIcon.src = add;

// Create the to-do list HTML structure
const todoContainer = document.getElementById('todo-list');
const todoContent = document.createElement('div');
todoContent.classList.add('task-content');
const todoTitle = document.createElement('h2');
todoTitle.classList.add('task-title');
todoTitle.textContent = "Today's To Do";
const todoInput = document.createElement('div');
todoInput.classList.add('task-input');
todoInput.innerHTML = '<input type="text" id="input-to-do" placeholder="Add to your list..." />';
const addButton = document.createElement('button');
addButton.classList.add('add-button');
addButton.innerHTML = '';
const clearAll = document.createElement('p');
clearAll.classList.add('clear-all');
clearAll.textContent = 'Clear All Completed';
addButton.appendChild(addIcon);
todoInput.appendChild(addButton);
todoTitle.appendChild(reloadIcon);
todoContent.appendChild(todoTitle);
todoContent.appendChild(todoInput);
todoContent.innerHTML += '<ul id="list-container"></ul>';
todoContent.appendChild(clearAll);
todoContainer.appendChild(todoContent);

document.addEventListener('DOMContentLoaded', () => {
  // save and get data to local storage
  const saveData = () => {
    localStorage.setItem('data', JSON.stringify(tasks));
  };

  const getData = () => {
    const data = localStorage.getItem('data');
    if (data) {
      tasks = JSON.parse(data);
      renderTasks();
    }
  };

  // To-do list data
  let tasks = [];

  // Create the to-do list functionality
  const todoContent = document.querySelector('.task-content');
  const inputBox = document.getElementById('input-to-do');
  const inputListContainer = document.getElementById('list-container');
  const addButton = document.querySelector('.add-button');
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.style.display = 'none';
  todoContent.appendChild(errorMessage);

  // Function to render tasks on the list
  const renderTasks = () => {
    inputListContainer.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task.description;
      if (task.completed) {
        li.classList.add('checked');
      }
      const deleteButton = document.createElement('span');
      deleteButton.innerHTML = '\u2716';
      deleteButton.addEventListener('click', () => {
        deleteTask(index);
      });
      li.appendChild(deleteButton);
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', (e) => {
        updateTaskStatus(index, e.target.checked);
      });
      inputListContainer.appendChild(li);
    });
    saveData();
  };

  // Function to add a new task
  const addTask = () => {
    if (inputBox.value === '') {
      errorMessage.textContent = 'Please enter a task!';
      errorMessage.style.display = 'block';
    } else {
      const newTask = {
        description: inputBox.value,
        completed: false,
        index: tasks.length + 1,
      };
      tasks.push(newTask);
      inputBox.value = '';
      errorMessage.style.display = 'none';
      renderTasks();
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    tasks.splice(index, 1);
    tasks.forEach((task, i) => {
      task.index = i + 1;
    });
    renderTasks();
  };

  // Function to edit a task description
  // eslint-disable-next-line no-unused-vars
  /* const editTaskDescription = (index, newDescription) => {
    tasks[index].description = newDescription;
    renderTasks();
  }; */

  addButton.addEventListener('click', addTask);
  inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  inputListContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const index = Array.from(inputListContainer.children).indexOf(e.target);
      tasks[index].completed = !tasks[index].completed;
      /* tasks.forEach((task, i) => {
        task.index = i + 1;
      }); */
      renderTasks();
    }
  });// *required update for the task index after delete all completed tasks.

  const clearAllTasks = () => {
    tasks = tasks.filter((task) => !task.completed);
    renderTasks();
  };

  clearAll.addEventListener('click', clearAllTasks);

  getData();
});
