const addTaskButton = document.querySelector(".add");

addTaskButton.addEventListener("click", () => {
  const task = document.getElementById("task-input").value;

  if (task.trim() === "") {
    alert("Please enter a task.");
    localStorage.clear(tasks, JSON.stringify(tasks));
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasks.length >= 10) {
    alert("You can't have more than 10 tasks.");
    return;
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("task-input").value = "";
  displayTask();

  if (tasks.length === 10) {
    addTaskButton.disabled = true;
  }
});
const displayTask = () => {
  let taskListDiv = document.querySelector(".task-list");
  taskListDiv.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");

    let acceptImg = document.createElement("img");
    acceptImg.src = "images/accept.png";

    let taskName = document.createElement("p");
    taskName.innerText = task;

    let removeImg = document.createElement("img");
    removeImg.src = "images/remove.png";
    removeImg.addEventListener("click", () => {
      removeTask(index);
    });

    taskTitle.append(acceptImg, taskName);
    taskDiv.append(taskTitle, removeImg);
    taskListDiv.appendChild(taskDiv);
  });
  document.querySelector(".task").addEventListener("click", () => {
    document.querySelector(".task-title").style.textDecoration = "line-through";
  });
};

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();

  document.querySelector(".add").disabled = false;
}

displayTask();

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  let isLineThrough = false;

  task.addEventListener("click", () => {
    const taskTitle = task.querySelector(".task-title");
    isLineThrough = !isLineThrough;

    if (isLineThrough) {
      taskTitle.style.textDecoration = "line-through";
    } else {
      taskTitle.style.textDecoration = "none";
    }
  });
});
