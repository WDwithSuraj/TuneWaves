
import './App.css';
import { Admin } from './Admin/Admin';
import Home from './screens/home';
import { BrowserRouter  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     {/* <Admin/> */}
      <Home/>
    </BrowserRouter>
  );
}

export default App;
