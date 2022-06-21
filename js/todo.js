const field = document.querySelector(".field");
const button = document.querySelector(".add");
const list = document.querySelector(".list");

function completeTask(event) {
  const target = event.target;
  if (target.checked) {
    target.parentElement.classList.add("done");
  } else {
    target.parentElement.classList.remove("done");
  }
}

function createTask(value) {
  const task = document.createElement("div");
  task.textContent = value;
  task.classList.add("createdTask");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.addEventListener("click", completeTask);
  check.classList.add("status");
  task.append(check);
  return task;
}

function addTask() {
  const newTask = createTask(field.value);
  if (field.value !== "") {
    list.appendChild(newTask);
  }
}

button.addEventListener("click", addTask);
