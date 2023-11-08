import { useState } from "react";
import rusume from "./Data/resumes";
 
function Resumes() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id = "resume">
      {rusume.map((a, index) => (
        <button onClick={contentChange} value={index}>
          {a.tab}
        </button>
      ))}
      <br /> <br />
      {rusume[index].content}
    </div>
  );
}

export default Resumes;
