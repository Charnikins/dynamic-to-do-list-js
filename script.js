// Wait for the DOM to fully load  
document.addEventListener('DOMContentLoaded', () => {  
    const addButton = document.getElementById('add-task-btn');  
    const taskInput = document.getElementById('task-input');  
    const taskList = document.getElementById('task-list');  

    // Load tasks from localStorage  
    loadTasks();  

    // Attach event listeners  
    addButton.addEventListener('click', addTask);  
    taskInput.addEventListener('keypress', (event) => {  
        if (event.key === 'Enter') {  
            addTask();  
        }  
    });  

    // Function to load tasks from localStorage  
    function loadTasks() {  
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];  
        tasks.forEach(task => addTaskToDOM(task));  
    }  

    // Function to add a new task  
    function addTask() {  
        const taskText = taskInput.value.trim(); // Get input value  
        if (taskText === "") {  
            alert("Please enter a task."); // Alert if empty  
            return;  
        }  

        addTaskToDOM(taskText); // Add to DOM  
        saveTask(taskText); // Save to localStorage  
        taskInput.value = ''; // Clear input field  
    }  

    // Function to add a task to the DOM  
    function addTaskToDOM(taskText) {  
        const li = document.createElement('li'); // Create <li> element  
        li.textContent = taskText; // Set text content  

        const removeButton = document.createElement('button'); // Create remove button  
        removeButton.textContent = "Remove";  
        removeButton.className = 'remove-btn';  
        removeButton.onclick = () => removeTask(li, taskText); // Attach remove function  

        li.appendChild(removeButton); // Append button to <li>  
        taskList.appendChild(li); // Append <li> to task list  
    }
