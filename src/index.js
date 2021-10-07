import "./style.css";
import { Project, allProjectsModule, projectDisplayControllerModule } from "./projects";
import { Task, taskDisplayModule } from "./tasks";

const projectContainer = document.querySelector(".project-container");

// Load Projects
const loadProjectsModule = (() => {

})();

// Creates listeners for the buttons on the main page
const btnListenersModule = (() => {
  const btnAddProject = document.querySelector(".sidebar .add-item");
  btnAddProject.addEventListener("click",createNewProject)

  const btnAddTask = document.querySelector(".main-bottom .add-item");
  btnAddTask.addEventListener("click", createNewTask);

  function createNewProject() {
    console.log("New Project clicked");
    let project = new Project;
    project.init();
  }

  taskDisplayModule.initRemovableTaskContainer();

  function createNewTask() {
    console.log("New Task clicked");

    // Only add a task if there is a project
    if(projectContainer.childNodes.length > 0 & allProjectsModule.getIsHighlightedStatus()) {
      console.log(`Status after delete -> ${allProjectsModule.getIsHighlightedStatus()}`)
      let createdTask = new Task;
      createdTask.init();
    }
  }
})();

loadProjectsModule
btnListenersModule
