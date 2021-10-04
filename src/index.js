import "./style.css";
import { Project } from "./projects";
import { Task } from "./tasks";

const projectContainer = document.querySelector(".project-container");

const btnAddProject = document.querySelector(".sidebar .add-item");
btnAddProject.addEventListener("click",createNewProject)

const btnAddTask = document.querySelector(".main-bottom .add-item");
btnAddTask.addEventListener("click", createNewTask);

function createNewProject() {
  console.log("New Project clicked");
  let createdProject = new Project;
  createdProject.createProject();
}

function createNewTask() {
  console.log("New Task clicked");

  // Only add a task if there is a project
  if(projectContainer.childNodes.length > 0) {
    let createdTask = new Task;
    createdTask.createTask();
  }
}