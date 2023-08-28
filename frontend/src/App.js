
import "./App.css";
import { Admin } from "./Admin/Admin";
import Home from "./screens/home";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { AllRoutes } from "./AllRoutes";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
// import Dummy from "./screens/Dummy";


function App() {
  return (
    <>
    {/* <Dummy/> */}
      <AllRoutes />
      {/* <Admin/> */}

    </>




  );
}

export default App;
