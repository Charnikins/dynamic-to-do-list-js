// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    // Select the relevant DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if the input is empty
            return; // Exit the function
        }

        // Create a new list item
        const li = document.createElement('li'); // Create new <li> element
        li.textContent = taskText; // Set its text content to taskText

        // Create a remove button
        const removeButton = document.createElement('button'); // Create new <button> element
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Add class for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove the <li> from taskList
        };

        // Append the remove button to the list item
        li.appendChild(removeButton); // Add button to the <li>
        
        // Append the list item to the task list
        taskList.appendChild(li); // Add the <li> to the task list

        // Clear the task input field
        taskInput.value = ""; // Reset the input field to empty
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask on button click
    taskInput.addEventListener('keypress', function (event) {
        // Allow tasks to be added by pressing the "Enter" key
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter key is pressed
        }
    });
});
