import "./style.css";
import { Project, allProjectsModule } from "./projects";

console.log("hello world!");

const btnAddProject = document.querySelector(".add-project");
btnAddProject.addEventListener("click",createNewProject)


function createNewProject() {
  console.log("Button clicked");
  let createdProject = new Project;
  createdProject.createProject();
}
