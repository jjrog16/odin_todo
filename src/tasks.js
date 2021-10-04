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
    this.taskCounter = ++Project.#lastCount;
    this.id = this.taskCounter;
    this.taskName;
    this.date = new Date;
  }

  createTask() {
    // Create individual item
    let taskItem = document.createElement("div");
    taskItem.setAttribute("class", "task-item");

    // radio button
    let btnCleared = document.createElement("input");
    btnCleared.setAttribute("type", "radio");
    btnCleared.setAttribute("class", "radio-button");

    // Task contents
    let divTaskContents = document.createElement("div");
    divTaskContents.setAttribute("class", "task-contents");

    // Task top
    let divTaskTop = document.createElement("div");
    divTaskTop.setAttribute("class", "task-top");

    // Task name
    let divTaskName = document.createElement("div");
    divTaskName.setAttribute("class", "task-name");

    // Task Date
    let divTaskDate = document.createElement("div");
    divTaskDate.setAttribute("class", "task-date");

    // Task bottom
    let divTaskBottom = document.createElement("div");
    divTaskBottom.setAttribute("class", "task-bottom");

    // Task delete
    let btnDeleteTask = document.createElement("div");
    btnDeleteTask.setAttribute("class", "delete-task");

    // Append to parents
    divTaskTop.appendChild(divTaskName);
    divTaskTop.appendChild(divTaskDate);

    divTaskBottom.appendChild(btnDeleteTask);

    divTaskContents.appendChild(btnCleared);
    divTaskContents.appendChild(divTaskTop);
    divTaskContents.appendChild(divTaskBottom);

    taskContainer.appendChild(divTaskContents);

  }
}

export {
  Task
}