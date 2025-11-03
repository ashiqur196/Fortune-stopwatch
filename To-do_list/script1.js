// ---------- To-Do List ----------
document.addEventListener("DOMContentLoaded", initializeTodoList);

function initializeTodoList() {
  const taskInput = document.getElementById("task-input");
  const addBtn = document.getElementById("add-btn");
  const taskList = document.getElementById("task-list");

  // Stop if any element is missing
  if (!taskInput || !addBtn || !taskList) return;

  // Load tasks from localStorage or initialize empty list
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Render all tasks
  function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
      const emptyState = document.createElement("div");
      emptyState.className = "empty-state";
      emptyState.textContent = "No tasks yet. Add one above!";
      taskList.appendChild(emptyState);
      return;
    }

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = "task-item";

      // Create elements individually instead of using innerHTML with template literals
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-checkbox";
      checkbox.checked = task.completed;

      const textSpan = document.createElement("span");
      textSpan.className = "task-text";
      textSpan.textContent = task.text;
      
      if (task.completed) {
        textSpan.style.textDecoration = "line-through";
        textSpan.style.opacity = "0.6";
      }

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";

      // Toggle completed status
      checkbox.addEventListener("change", e => {
        tasks[index].completed = e.target.checked;
        saveTasks();
        renderTasks();
      });

      // Delete task
      deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });

      li.appendChild(checkbox);
      li.appendChild(textSpan);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  // Add a new task
  function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
      alert("Please enter a task!");
      return;
    }

    tasks.push({ text, completed: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  }

  // Event listeners
  addBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", e => {
    if (e.key === "Enter") addTask();
  });

  // Initial render
  renderTasks();
}