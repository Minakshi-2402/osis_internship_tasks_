document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;


        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = function() {
            li.classList.toggle('completed');
            document.getElementById('completedTasks').appendChild(li);
            this.style.display = 'none'; 
        };

        li.appendChild(completeButton);
        document.getElementById('pendingTasks').appendChild(li);
        
        taskInput.value = ''; // Clear the input
    }
});
