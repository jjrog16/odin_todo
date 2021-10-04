import { Project, allProjectsModule } from "./projects";

const taskContainer = document.querySelector(".task-container");

const tasksModule = (() =>{ 
  let _tasks = [];


})();

class Task {

  // The static property
  static #lastCount = 0;

  // The instance property using the class fields proposal syntax
  // Note I didn't initialize it with 1, that's a bit misleading.
  taskCounter;

  constructor() {
    this.taskCounter = ++Task.#lastCount;
    this.id = this.taskCounter;
    this.taskName;
    this.date = new Date;
  }

  createTask() {
    // Create individual item
    let taskItem = document.createElement("div");
    taskItem.setAttribute("class", "task-item");

    // Left side button div holder
    let divTaskLeft = document.createElement("div");
    divTaskLeft.setAttribute("class", "task-left");

    // radio button
    let btnCleared = document.createElement("input");
    btnCleared.setAttribute("type", "radio");
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
    let divTaskName = document.createElement("div");
    divTaskName.setAttribute("class", "task-name");
    divTaskName.appendChild(document.createTextNode("New Task"))

    // Task Date
    let divTaskDate = document.createElement("div");
    divTaskDate.setAttribute("class", "task-date");
    divTaskDate.appendChild(document.createTextNode("New Date"))


    // Task bottom
    let divTaskBottom = document.createElement("div");
    divTaskBottom.setAttribute("class", "task-bottom");

    // Task delete
    let btnDeleteTask = document.createElement("div");
    btnDeleteTask.setAttribute("class", "delete-task");
    btnDeleteTask.appendChild(document.createTextNode("Delete"));

    // Append to parents
    divTaskLeft.appendChild(btnCleared);

    divTaskTop.appendChild(divTaskName);
    divTaskTop.appendChild(divTaskDate);

    divTaskBottom.appendChild(btnDeleteTask);

    divTaskHolder.appendChild(divTaskTop);
    divTaskHolder.appendChild(divTaskBottom);

    divTaskContents.appendChild(divTaskLeft);
    divTaskContents.appendChild(divTaskHolder);

    taskContainer.appendChild(divTaskContents);

  }
}

export {
  Task
}