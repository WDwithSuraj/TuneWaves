import "./App.css";
import { Admin } from "./Admin/Admin";
import Home from "./screens/home";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { AllRoutes } from "./AllRoutes";

function App() {
  return (
    <>
      <Navbar />

      <AllRoutes />
    </>
  );
}

export default App;
