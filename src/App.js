

import { Routes, Route } from "react-router-dom";
import Main from "./component/main/index.jsx";
import Login from "./component/login/login/login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
