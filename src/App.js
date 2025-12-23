import { Routes, Route } from "react-router-dom";
import Main from "./component/main/index.jsx";
import Login from "./component/login/login.jsx";
import About from "./component/main/about.jsx";
import Nudeshade from "./component/main/nudeshade.jsx";
import Gloss from "./component/main/gloss.jsx";

function App() {
  return (
    <>  
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
       <Route path="/about" element={<About />} />
       <Route path="/nudeshade" element={<Nudeshade />} />
       <Route path="/gloss" element={<Gloss />} />
    </Routes>
    </>
  );
}

export default App;
