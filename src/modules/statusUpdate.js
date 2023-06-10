/* eslint-disable no-undef */
// statusUpdates.js
export function updateTaskStatus(index, completed) {
  tasks[index].completed = completed;
  saveData();
}

export function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  renderTasks();
  saveData();
}
