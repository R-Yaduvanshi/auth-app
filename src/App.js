import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
