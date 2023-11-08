import { useState } from "react";
import intro_ from "./Data/intro";
import "./CSS/Introduces.css";

function Intro_duce() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="introduce">
      {intro_.map((a, index) => (
        <button onClick={contentChange} value={index}>
          {a.tab}
        </button>
      ))}

      {intro_[index].content}
    </div>
  );
}

export default Intro_duce;
