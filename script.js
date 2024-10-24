let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    if (task !== "") {
        tasks.push(task);
        taskInput.value = '';
        displayTasks();
    } else {
        alert('Please enter a task.');
    }
}

function removeLastTask() {
    if (tasks.length > 0) {
        tasks.pop();
        displayTasks();
    } else {
        alert('No tasks to remove.');
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(li);
    });
}
