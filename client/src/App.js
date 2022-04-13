import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/home";
import User from "./views/user";


function App() {
  return (
    <div className="App bg-slate-50">
      <div className="flex w-full h-20 bg-black justify-center items-center">
      <Link to="/" className="text-white mr-10 hover:text-orange-500 text-3xl">HOME</Link>
      <Link to="/users/:user" className="text-white hover:text-orange-500 text-3xl">Detail User</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
