// Holds a list of projects
const projectContainer = document.querySelector(".project-container");

const allProjectsModule = (() => {
  let _projects = [];

  // Project highlighted in the main console and the
  // one that the user wants to view
  let _currentProjectHighlighted = 0;

  function getProject(id){
    return _projects[id];
  }

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

  /**
   * Sets the current project in view of the user
   * @param {*} id The id of the project selected
   */
  function setCurrentProjectHighlighted(id) {
    _currentProjectHighlighted = id;
  }

  return {
    getProject,
    addProjects,
    deleteProject,
    setCurrentProjectHighlighted
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
  
  createProject(){
    // Create individual items
    let newProject = document.createElement("div");
    newProject.setAttribute("class", "project-item");
    newProject.setAttribute("id", `${this.projectCounter}`);

    // Name of each project being added to the list
    let projectName = document.createTextNode(`Project ${this.projectCounter}`);

    // Button to delete project
    let btnDeleteProject = document.createElement("div");
    btnDeleteProject.setAttribute("class", "delete-project");
    btnDeleteProject.appendChild(document.createTextNode("x"));

    btnDeleteProject.addEventListener("click", (() => {
        this.deleteProject(this.project.id)
    }));

    this.saveProject(this.project.id, this.project.name, this.project.tasks)

    newProject.addEventListener("click", (() => {
      allProjectsModule.getProject(this.project.id);
    }))

    newProject.appendChild(projectName);
    newProject.appendChild(btnDeleteProject);

    // Set the content
    projectContainer.appendChild(newProject);
  }

  saveProject(id, name) {
    allProjectsModule.addProjects(id, name);
  }

  deleteProject(id) {
    allProjectsModule.deleteProject(id);
    document.getElementById(id).remove();
    console.log(`Project ${id} deleted`)
  }
}

export {
  Project,
  allProjectsModule
}