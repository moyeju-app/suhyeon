import Motive from "../Intro/Motive";
import Strengths from "../Intro/Strengths";
import Weakness from "../Intro/Weakness";

const intro = [
  {
    tab: "동기",
    content: <Motive></Motive>
  },
  {
    tab: "장점",
    content: <Strengths></Strengths>,
  },
  {
    tab: "단점",
    content: <Weakness></Weakness>,
  }
];

export default intro;
