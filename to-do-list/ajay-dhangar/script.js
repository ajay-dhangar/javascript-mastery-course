document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
        taskInput.focus();
      }
    });

    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTaskBtn.click();
      }
    });

    function addTask(taskText) {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
      });

      const span = document.createElement("span");
      span.textContent = taskText;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        taskList.removeChild(li);
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(removeBtn);
      taskList.appendChild(li);
    }
  });
