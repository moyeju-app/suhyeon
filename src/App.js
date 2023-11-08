import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import start from "./Component/Start";
import Resumes from "./Component/Resumes";
import Introduce from "./Component/Introdu";
import Project from "./Component/Project";
import Career from "./Component/Career";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        박수현의 PORTFOLIO
      </header>

      <div className="container">
        <nav>
          <Link to={"/resume"}>이력서</Link>
          <Link to={"/introduce"}>자기소개서 </Link>
          <Link to={"/project"}>프로젝트 </Link>
          <Link to={"/career"}>기타 경력</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" Component={start} />
            <Route path="/resume" Component={Resumes} />
            <Route path="/introduce" Component={Introduce} />
            <Route path="/project" Component={Project} />
            <Route path="/career" Component={Career} />
          </Routes>
        </main>
      </div>
      <footer>
        <i>
          연락처 : 010-9979-XXXX
          <br />
          이메일 : qwerty@naver.com
        </i>
      </footer>
    </BrowserRouter>
  );
}

export default App;
 