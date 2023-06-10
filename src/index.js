import './style.css';
import reload from './assets/reload.png';
import move from './assets/vertical-dots.png';

const tasks = [
  {
    description: 'task 1',
    done: false,
    id: 1,
  },
  {
    description: 'task 2',
    done: true,
    id: 2,
  },
  {
    description: 'task 3',
    done: false,
    id: 3,
  },
];

const reloadIcon = new Image();
reloadIcon.src = reload;

const moveIcon = new Image();
moveIcon.src = move;

const renderTasks = () => {
  const todoList = document.getElementById('todo-list');
  const todoContainer = document.createElement('div');
  const taskTitle = document.createElement('li');
  taskTitle.classList.add('task-title');
  // eslint-disable-next-line quotes
  taskTitle.innerHTML = `<h5>Today's To Do</h5>`;
  taskTitle.append(reloadIcon);
  const addTask = document.createElement('li');
  addTask.classList.add('add-task');
  addTask.innerHTML = '<input type="text" name="todo" placeholder="Add to your list..." />';
  const clearTask = document.createElement('li');
  clearTask.classList.add('clear-task');
  clearTask.innerHTML = '<a href="#" onclick="">Clear all completed</a>';
  todoContainer.classList.add('list-container');
  todoList.innerHTML = '';
  todoContainer.appendChild(taskTitle);
  todoContainer.appendChild(addTask);

  tasks.forEach((task) => {
    const list = document.createElement('li');
    list.classList.add('task');
    list.innerHTML = `
    <label for="todo"><input type="checkbox"  name="todo" placeholder="Enter tasks" />${task.description}</label><img src="${moveIcon.src}" alt="Move">`;
    todoContainer.appendChild(list);
    todoList.appendChild(todoContainer);
  });
  todoContainer.append(clearTask);
};

document.addEventListener('DOMContentLoaded', renderTasks);