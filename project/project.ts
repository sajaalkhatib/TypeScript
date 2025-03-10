interface Task {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    states: string;
}

let tasks: Task[] = [];

function addTask(): void {
    const title = (document.getElementById('taskInput') as HTMLInputElement).value.trim();
    const startDate = (document.getElementById('startDate') as HTMLInputElement).value;
    const endDate = (document.getElementById('endDate') as HTMLInputElement).value;

    if (!title || !startDate) {
        alert('Task title and start date are required!');
        return;
    }

    const newTask: Task = {
        id: Date.now(),
        title: title,
        startDate: startDate,
        endDate: endDate || 'Not Set', 
        states: 'To Do'
    };

    tasks.push(newTask);
    displayTasks();
    saveTasks();  // تأكد من حفظ المهام بعد إضافتها
}

function displayTasks(): void {
    const taskList = document.getElementById('taskList') as HTMLTableSectionElement;
    taskList.innerHTML = ''; 

    tasks.forEach((task) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.startDate}</td>
            <td>${task.endDate}</td>
            <td>${task.states}</td>
        `;
        taskList.appendChild(row);
    });
}

function saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }
}

window.onload = loadTasks;