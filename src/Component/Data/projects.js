import Project1 from "../Project/Project1";
import Project1_1 from "../Project/Project1_1";
import Project2 from "../Project/Project2";
import "../CSS/Project.css";

const projects = [
  {
    tab: "프로젝트1",
    content: <Project1></Project1>,
  },
  {
    tab: "프로젝트1 사후검증",
    content: <Project1_1></Project1_1>,
  },
  {
    tab: "프로젝트2",
    content: <Project2></Project2>,
  },
];

export default projects;
