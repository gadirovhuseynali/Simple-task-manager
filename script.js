document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
  
    // Show the splash screen for 3 seconds
    setTimeout(() => {
      splashScreen.style.display = 'none';
      mainContent.style.display = 'block';
    }, 3000);
  
    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', handleTaskClick);
  
    function addTask(e) {
      e.preventDefault();
  
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">X</button>
      `;
  
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  
    function handleTaskClick(e) {
      if (e.target.classList.contains('delete')) {
        deleteTask(e.target);
      } else if (e.target.tagName === 'SPAN') {
        toggleTaskComplete(e.target);
      }
    }
  
    function deleteTask(deleteButton) {
      const taskItem = deleteButton.parentElement;
      taskList.removeChild(taskItem);
    }
  
    function toggleTaskComplete(taskSpan) {
      const taskItem = taskSpan.parentElement;
      taskItem.classList.toggle('completed');
    }
  });
  