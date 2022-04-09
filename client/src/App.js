import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import User from "./views/user";

function App() {
  return (
    <div className="App bg-slate-50">
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/users/:user" element={<User/>}/>
     </Routes>
    </div>
  );
}

export default App;
