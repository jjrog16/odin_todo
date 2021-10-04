// Holds a list of projects
const projectContainer = document.querySelector(".project-container");

const allProjectsModule = (() => {
  let _projects = [];

  // Project highlighted in the main console and the
  // one that the user wants to view
  let _currentProjectHighlighted = 0;

  /**
   * Gets a specific project
   * @param {*} id ID of project 
   * @returns 
   */
  function getProjectName(id){
    return _projects[id].projectName;
  }

  /**
   * Gets all items in projects
   * @returns All contents of projects
   */
  function getAllProjects() {
    return _projects;
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
   * Update or Insert task into project array
   * @param {*} id 
   * @param {*} task 
   */
  function upsert(id, task) {
    _projects[id].tasks.push(task);
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

  function getCurrentProjectHighlighted() {
    return _currentProjectHighlighted;
  }

  return {
    getProjectName,
    addProjects,
    deleteProject,
    setCurrentProjectHighlighted,
    getCurrentProjectHighlighted
  }

})();

// const displayControllerModule = (() => {
  
//   function selectProject(id) {
//     let selected = document.getElementById(id);
//     selected.addEventListener("click", (() => {
//       // I am selecting a different item than what is currently highlighted
//       if(allProjectsModule.getCurrentProjectHighlighted != id) {
//         let previouslySelected = document.querySelector(`#${allProjectsModule.getCurrentProjectHighlighted()}`);
//         previouslySelected.style.backgroundColor = "black";
//         previouslySelected.style.color = "white";
//       }
//       allProjectsModule.setCurrentProjectHighlighted(id);
//       selected.style.backgroundColor = "white";
//       selected.style.color = "black";
//     }))
 
//   }

//   return {
//     selectProject
//   }

// })();

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

    this.saveProject(this.project.id, this.project.name);

    newProject.addEventListener("click", (() => {
      // Check to see the value is of a truely highlighted project
      let isValidProjectHighlighted = allProjectsModule.getCurrentProjectHighlighted() != 0;
      console.log(allProjectsModule.getCurrentProjectHighlighted());
      // I am selecting a different item than what is currently highlighted
      if(isValidProjectHighlighted && allProjectsModule.getCurrentProjectHighlighted != this.project.id) {
        let previouslySelected = document.getElementById(allProjectsModule.getCurrentProjectHighlighted());
        previouslySelected.style.backgroundColor = "black";
        previouslySelected.style.color = "white";
      }
      allProjectsModule.setCurrentProjectHighlighted(this.project.id);
      newProject.style.backgroundColor = "white";
      newProject.style.color = "black";
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