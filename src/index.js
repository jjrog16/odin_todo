import "./style.css";
import { Project, allProjectsModule } from "./projects";
import { Task } from "./tasks";

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
  let createdTask = new Task;
  createdTask.createTask();
}