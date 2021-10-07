import "./style.css";
import { Project, allProjectsModule, projectDisplayControllerModule } from "./projects";
import { Task, taskDisplayModule } from "./tasks";

const projectContainer = document.querySelector(".project-container");

// Load Projects and Tasks to the main view
const loadProjectsTasksModule = (() => {

})();

// Creates listeners for the buttons on the main page
const btnListenersModule = (() => {
  // New Project button
  const btnAddProject = document.querySelector(".sidebar .add-item");
  btnAddProject.addEventListener("click", createNewProject);

  // Add task button
  const btnAddTask = document.querySelector(".main-bottom .add-item");
  btnAddTask.addEventListener("click", createNewTask);

  /**
   * Create a new project and have it loaded in the sidebar
   */
  function createNewProject() {
    console.log("New Project clicked");
    let project = new Project;
    project.init();
    allProjectsModule.saveProject(project);
  }

  taskDisplayModule.initRemovableTaskContainer();

  function createNewTask() {
    console.log("New Task clicked");

    console.log(`You created a new task and the project is: ${projectDisplayControllerModule.getCurrentProjectHighlighted()}`);

    // Only add a task if there is a project
    if(projectContainer.childNodes.length > 0 & projectDisplayControllerModule.getIsHighlightedStatus()) {
      let createdTask = new Task;
      createdTask.init();

      // Save the task to the current project
    }
  }
})();

loadProjectsTasksModule
btnListenersModule
