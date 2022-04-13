import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import User from "./views/user";


function App() {
  return (
    <div className="App bg-slate-50">
      <div className="w-full h-20 bg-black">

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:user" element={<User />} />
        {/* <Route path="users/:user/:repo/commits" element={<Commit />} /> */}
      </Routes>
    </div>
  );
}

export default App;
