/* eslint-disable no-use-before-define */
/* eslint-disable import/named */
import './style.css';
import { Project, allProjectsModule, projectDisplayControllerModule } from './projects';
import { Task, taskDisplayModule } from './tasks';

const projectContainer = document.querySelector('.project-container');

// Creates listeners for the buttons on the main page
const btnListenersModule = (() => {
  // New Project button
  const btnAddProject = document.querySelector('.sidebar .add-item');
  btnAddProject.addEventListener('click', createNewProject);

  // Add task button
  const btnAddTask = document.querySelector('.main-bottom .add-item');
  btnAddTask.addEventListener('click', createNewTask);

  /**
   * Create a new project and have it loaded in the sidebar
   */
  function createNewProject() {
    const project = new Project();
    project.init();
    allProjectsModule.saveProject(project);
  }

  taskDisplayModule.initRemovableTaskContainer();

  function createNewTask() {
    // Only add a task if there is a project
    const childNodesLength = projectContainer.childNodes.length > 0;
    const highlightedStatus = projectDisplayControllerModule.getIsHighlightedStatus();
    if (childNodesLength && highlightedStatus) {
      const createdTask = new Task();
      createdTask.init();

      // Save the task to the current project
    }
  }
})();

btnListenersModule();
