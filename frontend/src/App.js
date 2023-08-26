
import "./App.css";
import { Admin } from "./Admin/Admin";
import Home from "./screens/home";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { AllRoutes } from "./AllRoutes";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <>
     

      <AllRoutes />
    </>




  );
}

export default App;
