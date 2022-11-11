import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import Data from "./Data";
import Roomcreate from "./Roomcreate.js";
import Bookupdate from "./Bookupdate";


function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="main" element={<Data />} />
        <Route path="register" element={<Register />} />
        <Route path="createroom" element={<Roomcreate />} />
        <Route path="update/:ID" element={<Bookupdate />} />
    </Routes>
    </div>
  );
}

export default App;
