// Wait for the DOM to fully load  
document.addEventListener('DOMContentLoaded', () => {  
    const addButton = document.getElementById('add-task-btn');  
    const taskInput = document.getElementById('task-input');  
    const taskList = document.getElementById('task-list');  

    // Attach event listeners  
    addButton.addEventListener('click', addTask);  
    taskInput.addEventListener('keypress', (event) => {  
        if (event.key === 'Enter') {  
            addTask();  
        }  
    });  

    // Function to add a new task  
    function addTask() {  
        const taskText = taskInput.value.trim(); // Get input value  
        
        if (taskText === "") {  
            alert("Please enter a task."); // Alert if empty  
            return;  
        }  
        
        // Create a new li element  
        const li = document.createElement('li');  
        li.textContent = taskText; // Set the text content of the li to taskText  

        // Create a new button element for removing the task  
        const removeButton = document.createElement('button');  
        removeButton.textContent = "Remove";  
        removeButton.classList.add('remove-btn'); // Add the class 'remove-btn' to button  

        // Assign an onclick event to the remove button  
        removeButton.onclick = () => {  
            removeTask(li); // Call removeTask and pass the li  
        };  

        // Append the remove button to the li element  
        li.appendChild(removeButton);  
        // Append the li to the task list  
        taskList.appendChild(li);  
        // Clear the task input field  
        taskInput.value = '';  
    }  

    // Function to remove a task  
    function removeTask(taskItem) {  
        taskList.removeChild(taskItem); // Remove the li from taskList  
    }  
});
