let taskbutton = document.getElementById("addTaskButton")
     

    taskbutton.addEventListener("click", function () {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.innerHTML = taskText + '<button class="removeTaskButton">Sil</button>';
        taskList.appendChild(newTask);
        taskInput.value = "";

        // Silmə funskiyası əlavə etmək üçün
        const removeButtons = document.getElementsByClassName("removeTaskButton");
        for (let i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener("click", function () {
                this.parentElement.remove();
            });
        }
    }
});
