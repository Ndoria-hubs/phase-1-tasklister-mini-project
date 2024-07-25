document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // references
  const taskForm = document.getElementById('create-task-form')
  const taskInput = document.getElementById('new-task-description')
  const submitTask = document.getElementById('submitTask')
  const taskList = document.getElementById('tasks')

  // event listeners
  submitTask.addEventListener('click', (event) => {
    event.preventDefault()
    const taskItem = document.createElement('li')
    taskItem.innerHTML = taskInput.value
    taskList.appendChild(taskItem)
    taskInput.value = '';

    // add a delete button to each task
    delButton = document.createElement('button');
    delButton.innerHTML = ' X '
    taskItem.appendChild(delButton)
    // add event fro delButton
    delButton.addEventListener('click', (event) => {
      // event.target.parentNode.remove();
      event.preventDefault()
      taskItem.remove();
    })


  })



});
