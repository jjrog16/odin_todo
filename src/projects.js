import { Task, taskDisplayModule } from "./tasks";

// Holds a list of projects
const projectContainer = document.querySelector(".project-container");

const allProjectsModule = (() => {
  let _projects = [];

  // TODO: Debug where values are being saved for tasks
  let testTask = {
    id: 1,
    taskName: "Bother Jess"
  }

  let testProject = {
    id: 69,
    projectName: "Project 69",
    tasks: [testTask]
  }

  _projects.push(testProject)

  // Project highlighted in the main console and the
  // one that the user wants to view
  let _currentProjectHighlighted = 0;
  let _isHighlighted = false;

  /**
   * Adds project object to project array
   * @param {*} id Project id of new project
   * @param {*} name Name of the project
   */
  function addProjects(id, name) {
    const newProject = {
      id : id,
      projectName : name,
      tasks : []
    }

    _projects.push(newProject);
  }

  /**
   * Removes project from array
   * @param {*} id Project id to be removed
   */
  function deleteProject(id) {
    _projects.splice(id, 1);
  }

  function getProject(id) {
    let projectRetrieved = _projects.find(project => project.id == id);
    return projectRetrieved
  }

  function getCurrentProjectHighlighted() {
    return _currentProjectHighlighted;
  }

  /**
   * Sets the current project in view of the user
   * @param {*} id The id of the project selected
   */
  function setCurrentProjectHighlighted(id) {
    _currentProjectHighlighted = id;
  }

  function getIsHighlightedStatus() {
    return _isHighlighted;
  }

  function setIsHighlightedStatus(status) {
    _isHighlighted = status;
  }

  return {
    addProjects,
    deleteProject,
    setCurrentProjectHighlighted,
    getCurrentProjectHighlighted,
    getIsHighlightedStatus,
    setIsHighlightedStatus,
    getProject
  }
})();

const projectDisplayControllerModule = (() => {

  let rememberLastSelected;

  /**
   * Highlights the project in the project sidebar and deselects other projects.
   * @param {*} project The project being selected
   */
  function _selectProject(project, projectId) {

    // Check to see if the value has been assigned yet. if not, then immediately assign.
    if(allProjectsModule.getCurrentProjectHighlighted() == 0) {
      allProjectsModule.setCurrentProjectHighlighted(projectId);
      allProjectsModule.setIsHighlightedStatus(false);
    }
    
    // I am selecting a different item than what is currently highlighted
    if(allProjectsModule.getCurrentProjectHighlighted != projectId) {

      let previouslySelected = document.getElementById(`project${allProjectsModule.getCurrentProjectHighlighted()}`);

      // Check to see if you have a property. If you do then change it
      if(previouslySelected != null) {
        previouslySelected.style.backgroundColor = "black";
        previouslySelected.style.color = "white";
        rememberLastSelected = previouslySelected ;
      }
      
    }

    allProjectsModule.setCurrentProjectHighlighted(projectId);
    project.style.backgroundColor = "white";
    project.style.color = "black";
    allProjectsModule.setIsHighlightedStatus(true);
  }

  /**
   * Deletes project from allProjectModule and removes it from the UI
   * @param {*} id 
   */
  function _deleteProject(id) {

    console.log(`Status before delete -> ${allProjectsModule.getIsHighlightedStatus()}`)

    // Remove the project from all projects
    allProjectsModule.deleteProject(id);

    // Remove project from the view
    document.getElementById(`project${id}`).remove();

    allProjectsModule.setIsHighlightedStatus(false);

    console.log(`Status after delete -> ${allProjectsModule.getIsHighlightedStatus()}`);

  }

  /**
   * Creates an individual entry for a Project
   */
  function createProjectView(projectId) {
    // Create individual projects
    let newProject = document.createElement("div");
    newProject.setAttribute("class", "project-item");
    newProject.setAttribute("id", `project${projectId}`);

    // Name of each project being added to the list
    let projectName = document.createTextNode(`Project ${projectId}`);
    
    newProject.addEventListener("click", (() => {
      // Select the project you just clicked
      _selectProject(newProject, projectId);

      // Get the list of tasks of that project
      let tasksToLoad = allProjectsModule.getProject(projectId)

      // Clear the screen of the previous tasks
      taskDisplayModule.clearTaskScreen();

      // Load the objects with the contents of the old tasks
      for(task in tasksToLoad.tasks) {
        let loadedTask = new Task(task.id, task.taskName);
        loadedTask.init();
        console.log(`Task ${tasksToLoad} loaded`);
      }
      
      
      console.log(`Project ${projectId} clicked`)
    }))
    
    newProject.appendChild(projectName);

    // Button to delete project
    let btnDeleteProject = document.createElement("div");
    btnDeleteProject.setAttribute("class", "delete-project");
    btnDeleteProject.appendChild(document.createTextNode("x"));

    btnDeleteProject.addEventListener("click", (() => {
        _deleteProject(projectId);
    }));

    newProject.appendChild(btnDeleteProject);

    // Set the content
    projectContainer.appendChild(newProject);
  }
  
  /**
   * Saves the project to the allProjectsModule so all projects are stored
   * @param {*} id ID of the project made
   * @param {*} name Name of the project
   */
  function saveProject(id, name) {
    allProjectsModule.addProjects(id, name);
  }
  
  return {
    createProjectView,
    saveProject
  }

})();

class Project {
  project = {};

  // The static property
  static #lastCount = 0;

  // The instance property using the class fields proposal syntax
  // Note I didn't initialize it with 1, that's a bit misleading.
  projectCounter;

  constructor() {
    // Increment and assign
    this.projectCounter = ++Project.#lastCount;

    this.project.id = this.projectCounter;
    this.project.name = `Project ${this.projectCounter}`;
  }

  init() {
    projectDisplayControllerModule.createProjectView(this.project.id);
    projectDisplayControllerModule.saveProject(this.project.id, this.project.name);
  }

}

export {
  Project,
  allProjectsModule
}