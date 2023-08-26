import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Components/Navbar';
function App() {
  return (
  <div>
    <ChakraProvider>
      <Navbar />
    {/* <Login /> */}
        <Signup/>
    </ChakraProvider>
      
  </div>
  );
}

export default App;
