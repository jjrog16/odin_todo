const taskContainer = document.querySelector(".task-container");

let removableTaskContainer;

const taskDisplayModule = (() =>{ 
  
  function createTaskView(id, taskName, date) {
    // Create individual item
    let taskItem = document.createElement("div");
    taskItem.setAttribute("class", "task-item");

    // Left side button div holder
    let divTaskLeft = document.createElement("div");
    divTaskLeft.setAttribute("class", "task-left");

    // checkbox button
    let btnCleared = document.createElement("input");
    btnCleared.setAttribute("type", "checkbox");
    btnCleared.setAttribute("class", "radio-button");

    // Task contents
    let divTaskContents = document.createElement("div");
    divTaskContents.setAttribute("class", "task-contents");

    // Task Holder
    let divTaskHolder = document.createElement("div");
    divTaskHolder.setAttribute("class", "task-holder");

    // Task top
    let divTaskTop = document.createElement("div");
    divTaskTop.setAttribute("class", "task-top");

    // Task name
    let inputTaskName = document.createElement("input");
    inputTaskName.setAttribute("class", "task-name");
    inputTaskName.setAttribute("id", `task${id}`);
    inputTaskName.addEventListener("change", updateTask);

    // // Task Date
    // let divTaskDate = document.createElement("div");
    // divTaskDate.setAttribute("class", "task-date");
    // divTaskDate.appendChild(document.createTextNode(`${date.toLocaleDateString("en-US")}`));

    // Task bottom
    let divTaskBottom = document.createElement("div");
    divTaskBottom.setAttribute("class", "task-bottom");

    // Task delete
    let btnDeleteTask = document.createElement("div");
    btnDeleteTask.setAttribute("class", "delete-task");
    btnDeleteTask.appendChild(document.createTextNode("Delete"));

    // Append to parents
    divTaskLeft.appendChild(btnCleared);

    divTaskTop.appendChild(inputTaskName);
    // divTaskTop.appendChild(divTaskDate);

    divTaskBottom.appendChild(btnDeleteTask);

    divTaskHolder.appendChild(divTaskTop);
    divTaskHolder.appendChild(divTaskBottom);

    divTaskContents.appendChild(divTaskLeft);
    divTaskContents.appendChild(divTaskHolder);

    removableTaskContainer.appendChild(divTaskContents);
    taskContainer.appendChild(removableTaskContainer);
    //taskContainer.appendChild(divTaskContents);
  }

  function initRemovableTaskContainer() {
    removableTaskContainer = document.createElement("div");
    removableTaskContainer.setAttribute("class", "removable");
  }

  function clearTaskScreen() {
    let removable = document.querySelector(".removable");
    if(removable) {
      removable.remove();
    }
  }

  function updateTask(e) {
    // Take the change event (adding a new name value) and update the name of the task
    let updatedName = e.target.value;

    console.log(updatedName)
  }

  return {
    createTaskView,
    clearTaskScreen,
    initRemovableTaskContainer
  }


})();

class Task {

  // The static property
  static #lastCount = 0;

  // The instance property using the class fields proposal syntax
  // Note I didn't initialize it with 1, that's a bit misleading.
  taskCounter;

  constructor(passedId = null, passedName = null) {
    if(passedId == null) {
      this.taskCounter = ++Task.#lastCount;
      this.id = this.taskCounter;
      this.taskName = "";
    } else {
      this.id = passedId;
      this.taskName = passedName;
    }
    
  }

  init() {
    taskDisplayModule.createTaskView(this.id, this.taskName);
  }

}

export {
  Task,
  taskDisplayModule
}