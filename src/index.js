// import css stylesheet
import './style.css';
// import icon images
import reload from './assets/reload.png';
import move from './assets/vertical-dots.png';
import add from './assets/plus.png';
// import modules

// icons
const reloadIcon = new Image();
reloadIcon.src = reload;

const moveIcon = new Image();
moveIcon.src = move;

const addIcon = new Image();
addIcon.src = add;

// Create the to do list HTML structure
const todoContainer = document.getElementById('todo-list');
const todoContent = document.createElement('div');
todoContent.classList.add('task-content');
const todoTitle = document.createElement('h2');
todoTitle.classList.add('task-title');
todoTitle.textContent = 'Today\'s To Do';
const todoInput = document.createElement('div');
todoInput.classList.add('task-input');
todoInput.innerHTML = '<input type="text" id="input-to-do" placeholder="Add to your list..." />';
const addButton = document.createElement('button');
addButton.classList.add('add-button');
addButton.innerHTML = '';
addButton.appendChild(addIcon);
todoInput.appendChild(addButton);
todoTitle.appendChild(reloadIcon);
todoContent.appendChild(todoTitle);
todoContent.appendChild(todoInput);
todoContent.innerHTML += '<ul id="list-container"><!-- <li class="checked">task1</li> --></ul>';
todoContainer.appendChild(todoContent);

document.addEventListener('DOMContentLoaded', () => {
  // Create the to do list functionality
  const inputBox = document.getElementById('input-to-do');
  const inputListContainer = document.getElementById('list-container');
  const addButton = document.querySelector('.add-button');
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.style.display = 'none';
  // eslint-disable-next-line no-undef
  todoContent.appendChild(errorMessage);

  addButton.addEventListener('click', () => {
    if (inputBox.value === '') {
      errorMessage.textContent = 'Please enter a task!';
      errorMessage.style.display = 'block';
    } else {
      const li = document.createElement('li');
      li.textContent = inputBox.value;
      inputListContainer.appendChild(li);
      inputBox.value = ''; // Clear the input field after adding the task
      errorMessage.style.display = 'none'; // Hide the error message
    }
  });
});