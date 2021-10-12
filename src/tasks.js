import { allProjectsModule, projectDisplayControllerModule } from "./projects";

const taskDisplayModule = (() =>{ 
  const taskContainer = document.querySelector(".task-container");

  /**
   * Creates the holder view for all tasks
   */
  function initRemovableTaskContainer() {
    let removableTaskContainer = document.createElement("div");
    removableTaskContainer.setAttribute("class", "removable");
    taskContainer.appendChild(removableTaskContainer);
  }
  
  function createTaskView(task) {
    console.log(`Task created -> ${JSON.stringify(task)}`)
    console.log(`Task id: ${task.id}`);

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
    divTaskContents.setAttribute("id", `task${task.id}`);

    // Task Holder
    let divTaskHolder = document.createElement("div");
    divTaskHolder.setAttribute("class", "task-holder");

    // Task top
    let divTaskTop = document.createElement("div");
    divTaskTop.setAttribute("class", "task-top");

    // Task name
    let inputTaskName = document.createElement("input");
    inputTaskName.setAttribute("class", "task-name");
    //inputTaskName.setAttribute("id", `task${task.id}`);
    inputTaskName.setAttribute("value", task.taskName);
    // Save the new edited name to its project
    inputTaskName.addEventListener("change", (event) => {
      updateTask(event, task.id);
    });

    // Task bottom
    let divTaskBottom = document.createElement("div");
    divTaskBottom.setAttribute("class", "task-bottom");

    // Task delete
    let btnDeleteTask = document.createElement("div");
    btnDeleteTask.setAttribute("class", "delete-task");
    btnDeleteTask.appendChild(document.createTextNode("Delete"));
    btnDeleteTask.addEventListener("click", () => {
      let currentlySelectedProjectId = projectDisplayControllerModule.getCurrentProjectHighlighted();
      deleteTaskFromUI(currentlySelectedProjectId, task.id);
    });

    // Append to parents
    divTaskLeft.appendChild(btnCleared);

    divTaskTop.appendChild(inputTaskName);

    divTaskBottom.appendChild(btnDeleteTask);

    divTaskHolder.appendChild(divTaskTop);
    divTaskHolder.appendChild(divTaskBottom);

    divTaskContents.appendChild(divTaskLeft);
    divTaskContents.appendChild(divTaskHolder);

    // Redefining in this scope as a view already existing. 
    let removableTaskContainer = document.querySelector(".removable");
    removableTaskContainer.appendChild(divTaskContents);
    taskContainer.appendChild(removableTaskContainer);
  }

  /**
   * Removes task from project array and deletes the view
   * @param {*} projectId Project ID that is currently selected
   * @param {*} taskId Current Task ID
   */
  function deleteTaskFromUI(projectId, taskId) {
    allProjectsModule.deleteTaskInProject(projectId, taskId);
    document.getElementById(`task${taskId}`).remove();
  }

  /**
   * Saves the task to the project array
   * @param {Task} Task the Task being saved
   */
  function saveTaskView(task) {
    // Save the task to the project
    let projectId = projectDisplayControllerModule.getCurrentProjectHighlighted();
    let projectIdIndex = allProjectsModule.getProjectIdIndex(projectId);
    allProjectsModule.upsert(projectIdIndex, null, task);
  }

  /**
   * Clears the contents of the task screen
   */
  function clearTaskScreen() {
    let removable = document.querySelector(".removable");
    if(removable) {
      removable.remove();
    }
  }

  /**
   * Get index of the project in the array for upsert
   * @param {*} id ID of the project to find the index of 
   * @param {*} project Project currently in view of which you are retrieving the tasks
   * @returns array index location of the project
   */
   function getTaskIdIndex(id, project) {
    let taskRetrievedIndexLocation = project.projectTasks.findIndex(task => task.id == id);
    return taskRetrievedIndexLocation;
  }

  /**
   * Update the task name associated to a project
   * @param {*} e input field event change
   */
  function updateTask(e, taskId) {
    // Take the change event (adding a new name value) and update the name of the task
    let updatedTaskName = e.target.value;

    // Get the id of the project highlighted in view
    let myProjectId = projectDisplayControllerModule.getCurrentProjectHighlighted();
    console.log(`myProjectId: ${myProjectId}`);

    // Get the index of the project
    let locationOfProject = allProjectsModule.getProjectIdIndex(myProjectId);
    console.log(`locationOfProject: ${locationOfProject}`);

    // Get the index of the particular task in its index
    let locationOfTask = getTaskIdIndex(taskId, allProjectsModule.getProject(myProjectId));
    console.log(`locationOfTask: ${locationOfTask}`);

    allProjectsModule.upsert(locationOfProject, locationOfTask, updatedTaskName);
    
    console.log(`${allProjectsModule.getProject(myProjectId)}`);
  }

  return {
    createTaskView,
    clearTaskScreen,
    initRemovableTaskContainer,
    getTaskIdIndex,
    saveTaskView
  }


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
    this.taskName = "hi";
  }

  init() {
    // Pass the instance of the Task
    taskDisplayModule.createTaskView(this);
    taskDisplayModule.saveTaskView(this);
  }

}

export {
  Task,
  taskDisplayModule
}