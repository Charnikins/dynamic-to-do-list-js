// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving again
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        const taskTextTrimmed = taskText || taskInput.value.trim(); // Use provided taskText or input value

        // Check if the input is empty
        if (taskTextTrimmed === "") {
            alert("Please enter a task."); // Alert if the input is empty
            return; // Exit the function
        }

        // Create a new list item
        const li = document.createElement('li'); // Create new <li> element
        li.textContent = taskTextTrimmed; // Set its text content to taskTextTrimmed

        // Create a remove button
        const removeButton = document.createElement('button'); // Create new <button> element
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Add class for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove the <li> from taskList
            removeTaskFromStorage(taskTextTrimmed); // Remove from Local Storage
        };

        // Append the remove button to the list item
        li.appendChild(removeButton); // Add button to the <li>

        // Append the list item to the task list
        taskList.appendChild(li); // Add the <li> to the task list

        // Clear the task input field
        if (save) {
            taskInput.value = ""; // Reset the input field to empty
            saveTaskToStorage(taskTextTrimmed); // Save to Local Storage
        }
    }

    // Function to save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText); // Add the new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated array to Local Storage
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText); // Remove the task
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Update Local Storage
    }

    // Attach event listeners
    addButton.addEventListener('click', () => addTask()); // Call addTask on button click
    taskInput.addEventListener('keypress', function (event) {
        // Allow tasks to be added by pressing the "Enter" key
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter key is pressed
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
