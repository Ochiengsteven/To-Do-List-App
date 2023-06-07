// import './style.css';

const tasks = [
  {
    description: 'task 1',
    done: false,
    id: 1,
  },
  {
    description: 'task 2',
    done: true,
    id: 1,
  },
  {
    description: 'task 3',
    done: false,
    id: 1,
  },
];

const renderTasks = () => {
  const todoList = document.getElementById('todo-list');
  const todoContainer = document.createElement('div');
  todoContainer.classList.add('list-container');
  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const list = document.createElement('ul');
    list.innerHTML = `<li><label for="todo"><input type="checkbox"  name="todo" placeholder="Enter tasks" />${task.description}</label></li>`;
    todoContainer.appendChild(list);
    todoList.appendChild(todoContainer);
  });
};

document.addEventListener('DOMContentLoaded', renderTasks);