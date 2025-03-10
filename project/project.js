var tasks = [];
function addTask() {
    var title = document.getElementById('taskInput').value.trim();
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    if (!title || !startDate) {
        alert('Task title and start date are required!');
        return;
    }
    var newTask = {
        id: Date.now(),
        title: title,
        startDate: startDate,
        endDate: endDate || 'Not Set',
        states: 'To Do'
    };
    tasks.push(newTask);
    displayTasks();
    saveTasks(); // تأكد من حفظ المهام بعد إضافتها
}
function displayTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(function (task) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(task.title, "</td>\n            <td>").concat(task.startDate, "</td>\n            <td>").concat(task.endDate, "</td>\n            <td>").concat(task.states, "</td>\n        ");
        taskList.appendChild(row);
    });
}
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    var storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }
}
window.onload = loadTasks;
