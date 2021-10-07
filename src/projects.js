import { taskDisplayModule } from "./tasks";

const allProjectsModule = (() => {
  let _projects = [];

  /**
   * Get the project from the _projects array
   * @param {*} id ID of the project to be retrieved
   * @returns {Project} 
   */
  function getProject(id) {
    let projectRetrieved = _projects.find(project => project.id == id);
    return projectRetrieved
  }

  /**
   * Adds project object to project array
   * @param {*} projectToSave Project being saved to allProjectsModule
   */
  function saveProject(projectToSave) {
    _projects.push(projectToSave);
  }

  /**
   * Removes project from array
   * @param {*} id Project id to be removed
   */
  function deleteProject(id) {
    _projects.splice(id, 1);
  }

  /**
   * Get the number of how many projects exists so that you know
   * the new project length's starting ID
   * @returns length of the _projects array
   */
  function getProjectArrayLength() {
    return _projects.length
  }

  return {
    saveProject,
    deleteProject,
    getProject,
    getProjectArrayLength
  }
})();

const projectDisplayControllerModule = (() => {
  // Holds a list of projects
  const projectContainer = document.querySelector(".project-container");  

  let rememberLastSelected;

  // Project highlighted in the main console and the
  // one that the user wants to view
  let _currentProjectHighlighted = 0;
  let _isHighlighted = false;

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

  /**
   * 
   * @returns Status regarding if a view is highlighted
   */
  function getIsHighlightedStatus() {
    return _isHighlighted;
  }

  /**
   * 
   * @param {*} status Boolean value to know if the status should be highlighted
   */
  function setIsHighlightedStatus(status) {
    _isHighlighted = status;
  } 

  /**
   * Highlights the project in the project sidebar and deselects other projects.
   * @param {*} project The project being selected
   */
  function _selectProject(project, projectId) {

    // Check to see if the value has been assigned yet. if not, then immediately assign.
    if(getCurrentProjectHighlighted() == 0) {
      setCurrentProjectHighlighted(projectId);
      setIsHighlightedStatus(false);
    }
    
    // I am selecting a different item than what is currently highlighted
    if(allProjectsModule.getCurrentProjectHighlighted != projectId) {

      let previouslySelected = document.getElementById(`project${getCurrentProjectHighlighted()}`);

      // Check to see if you have a property. If you do then change it
      if(previouslySelected != null) {
        previouslySelected.style.backgroundColor = "black";
        previouslySelected.style.color = "white";
        rememberLastSelected = previouslySelected ;
      }
      
    }

    setCurrentProjectHighlighted(projectId);
    project.style.backgroundColor = "white";
    project.style.color = "black";
    setIsHighlightedStatus(true);
  }

  /**
   * Deletes project from allProjectModule and removes it from the UI
   * @param {*} id 
   */
  function _deleteProject(id) {

    console.log(`Status before delete -> ${getIsHighlightedStatus()}`)

    // Remove the project from all projects
    allProjectsModule.deleteProject(id);

    // Remove project from the view
    document.getElementById(`project${id}`).remove();

    setIsHighlightedStatus(false);

    console.log(`Status after delete -> ${getIsHighlightedStatus()}`);

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

      // Clear the screen of the previous tasks
      taskDisplayModule.clearTaskScreen();
    
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
  
  
  return {
    createProjectView,
    setCurrentProjectHighlighted,
    getCurrentProjectHighlighted,
    getIsHighlightedStatus,
    setIsHighlightedStatus,
  }

})();

class Project {
  project = {};

  // The static property
  static #lastCount = allProjectsModule.getProjectArrayLength();

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
    console.log(`The project has an ID of ${this.project.id}`);
  }
}

/**
 * Only for debugging
 */
function testProject() {
  let test = new Project;
  test.init();
  allProjectsModule.saveProject(test);
}

testProject()

export {
  allProjectsModule,
  projectDisplayControllerModule,
  Project
}