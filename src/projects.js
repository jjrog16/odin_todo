// Holds a list of projects
const projectContainer = document.querySelector(".project-container");

const allProjectsModule = (()=>{

  // TODO: Save each new project as its own
  let _projects = {};

  function getProjects(){
    return _projects;
  }

  function addProjects(id, name, tasks) {
    _projects.id = id;
    _projects.name = name;
    _projects.tasks = tasks;

    console.log(_projects);
  }

  return {
    getProjects,
    addProjects
  }

})();

class Project {
  projects = {};

  // The static property
  static #lastCount = 0;

  // The instance property using the class fields proposal syntax
  // Note I didn't initialize it with 1, that's a bit misleading.
  projectCounter;

  constructor() {
    // Increment and assign
    this.projectCounter = ++Project.#lastCount;

    this.projects.id = this.projectCounter;
    this.projects.name = `Project ${this.projectCounter}`;
    this.projects.tasks = {};
  }
  
  createProject(){
    // Create individual items
    let newProject = document.createElement("div");
    newProject.setAttribute("class", "project-item");

    // Name of each project being added to the list
    let projectName = document.createTextNode(`Project ${this.projectCounter}`);

    // Button to delete project
    let btnDeleteProject = document.createElement("div");
    btnDeleteProject.setAttribute("class", "project-delete");
    btnDeleteProject.appendChild(document.createTextNode("x"));

    this.saveProject(this.projects.id, this.projects.name, this.projects.tasks)

    newProject.appendChild(projectName);
    newProject.appendChild(btnDeleteProject);

    // Set the content
    projectContainer.appendChild(newProject);
  }

  saveProject(id, name, tasks) {
    allProjectsModule.addProjects(id, name, tasks);
  }

  deleteProject() {

  }
}

export {
  Project
}