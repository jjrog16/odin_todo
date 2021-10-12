import { taskDisplayModule } from "./tasks";

/**
 * Module pertaining to managing all Projects
 */
const allProjectsModule = (() => {
  // Holds all Project objects
  let _projects = [];

  /**
   * Get the project from the _projects array
   * @param {*} id ID of the project to be retrieved
   * @returns {Project} Project object
   */
  function getProject(id) {
    let projectRetrieved = _projects.find(project => project.id == id);
    return projectRetrieved;
  }


  /**
   * Get index of the project in the array for upsert
   * @param {*} id ID of the project to find the index of 
   * @returns array index location of the project
   */
  function getProjectIdIndex(id) {
    let projectRetrievedIndexLocation = _projects.findIndex(project => project.id == id);
    return projectRetrievedIndexLocation;
  }

  function getTaskIdIndexFromProject(taskId) {
    let projectIdIndex = getProjectIdIndex(projectDisplayControllerModule.getCurrentProjectHighlighted());
    let taskRetrievedIndexLocation = _projects[projectIdIndex].projectTasks.findIndex(task => task.id == taskId);
    return taskRetrievedIndexLocation;
  }

  /**
   * Update or insert Tasks inside Projects
   * @param {*} projectIndex Index inside _projects array of where the project resides
   * @param {*} taskIndex Index inside projectTasks array of where the task resides
   * @param {*} value Value being updated
   */
  function upsert(projectIndex, taskIndex, value) {

    // If task ID and value are null, it's because we are adding a new task to the project, and the value is the Task
    if(taskIndex == null) {
      _projects[projectIndex].projectTasks.push(value);
    } else {
      _projects[projectIndex].projectTasks[taskIndex].taskName = value;
    }
  }

  /**
   * Updates the name of a project
   * @param {*} index Location of the project to update
   * @param {*} value The value of the name to update
   */
  function updateProjectName(index, value) {
    _projects[index].projectName = value;
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
   * 
   * @param {*} projectId ID of the project selected
   * @param {*} taskId ID of the task to be deleted
   */
  function deleteTaskInProject(projectId, taskId) {
    let projectIdIndex = getProjectIdIndex(projectId);
    let taskIdIndex = getTaskIdIndexFromProject(taskId);
    _projects[projectIdIndex].projectTasks.splice(taskIdIndex,1);
  }

  /**
   * Get the number of how many projects exists so that you know
   * the new project's starting ID
   * @returns length of the _projects array
   */
  function getProjectArrayLength() {
    return _projects.length
  }

  return {
    saveProject,
    deleteProject,
    getProject,
    getProjectArrayLength,
    getProjectIdIndex,
    upsert,
    deleteTaskInProject,
    updateProjectName
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
    if(getCurrentProjectHighlighted != projectId) {

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

    // Since this project is highlighted, begin loading the tasks view for that project
    loadProjectTasks(projectId);
  }

  /**
   * Deletes project from allProjectModule and removes it from the UI
   * @param {*} id 
   */
   function _deleteProjectFromUI(id) {

    console.log(`Status before delete -> ${getIsHighlightedStatus()}`)

    // Remove the project from all projects
    allProjectsModule.deleteProject(id);

    // Remove project from the view
    document.getElementById(`project${id}`).remove();

    setIsHighlightedStatus(false);

    console.log(`Status after delete -> ${getIsHighlightedStatus()}`);

  }

  /**
   * Load the tasks of a highlighted project
   * @param {*} id The ID of the project of which its tasks will be loaded to the Task View
   */
  function loadProjectTasks(id) {
    // Set the task view so that it is cleared and ready to showcase tasks
    taskDisplayModule.clearTaskScreen();
    taskDisplayModule.initRemovableTaskContainer();

    let retrievedProject = allProjectsModule.getProject(id);
    console.log(`Loading Project Tasks. Here is your project -> ${JSON.stringify(retrievedProject)}`)
    if(retrievedProject.projectTasks != null) {

      // Get every task associated with a project
      for(let i = 0; i < retrievedProject.projectTasks.length; i++) {
        taskDisplayModule.createTaskView(retrievedProject.projectTasks[i]);
      }
    }
  }

  /**
   * 
   * @returns The project ID of the highlighted project
   */
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
   * Creates an individual entry for a Project
   */
  function createProjectView(projectId) {
    // Create individual projects
    let newProject = document.createElement("div");
    newProject.setAttribute("class", "project-item");
    newProject.setAttribute("id", `project${projectId}`);

    let projectName = document.createElement("input");

    // Name of each project being added to the list
    projectName.setAttribute("value", `Project ${projectId}`);
    
    // Change name of the project once the user is done entering text
    projectName.addEventListener("change",(event) => {
      updateProjectNameFromView(event);
    })

    newProject.addEventListener("click", (() => {
      // Select the project you just clicked
      _selectProject(newProject, projectId);
      console.log(`Project ${projectId} clicked`);
      console.log(`${JSON.stringify(allProjectsModule.getProject(projectId))}`);
    }))
    
    //newProject.appendChild(projectName);
    
    // Button to delete project
    let btnDeleteProject = document.createElement("div");
    btnDeleteProject.setAttribute("class", "delete-project");
    btnDeleteProject.appendChild(document.createTextNode("x"));

    btnDeleteProject.addEventListener("click", (() => {
        _deleteProjectFromUI(projectId);
    }));

    newProject.appendChild(projectName);
    newProject.appendChild(btnDeleteProject);

    // Set the content
    projectContainer.appendChild(newProject);
  }


  /**
   * Takes an event change from the UI and saves the name
   * @param {*} e User Event change (from unclicking or clicking something else)
   */
  function updateProjectNameFromView(e) {
    let updatedProjectName = e.target.value;

    let myProjectId = getCurrentProjectHighlighted();
    let locationOfProject = allProjectsModule.getProjectIdIndex(myProjectId);
    allProjectsModule.updateProjectName(locationOfProject, updatedProjectName);
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

  // The static property
  static #lastCount = allProjectsModule.getProjectArrayLength();

  // The instance property using the class fields proposal syntax
  // Note I didn't initialize it with 1, that's a bit misleading.
  projectCounter;

  constructor() {
    // Increment and assign
    this.projectCounter = ++Project.#lastCount;

    this.id = this.projectCounter;
    this.projectName = `Project ${this.projectCounter}`;
    this.projectTasks = [];
  }

  init() {
    projectDisplayControllerModule.createProjectView(this.id);
    console.log(`The project has an ID of ${this.id}`);
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