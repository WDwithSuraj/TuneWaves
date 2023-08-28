
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { IconButton, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password
    };

    try {
      const response = await fetch('https://cute-lime-sweatpants.cyclic.app/tuneWaves/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      const data = await response.json();
      console.log(data);
      localStorage.setItem('user', data.user.name)
      if (response.ok) {
        setResponseMessage('Login successful!');
        openSuccessAlert();
        localStorage.setItem('token', data.token);

        setTimeout(() => {
          data.user.isAdmin ? navigate("/admin") : navigate("/")
        }, 1000)
        setEmail('');
        setPassword('');
      } else {
        setResponseMessage(`Error: ${data.message}`);
        openErrorAlert();
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      setResponseMessage('An error occurred while logging in.');
      openErrorAlert();
      setEmail('');
      setPassword('');
    }
  };

  const openSuccessAlert = () => {
    setIsSuccessAlertOpen(true);
    setTimeout(() => {
      setIsSuccessAlertOpen(false);
    }, 3000);
  };

  const openErrorAlert = () => {
    setIsErrorAlertOpen(true);
  };

  const closeErrorAlert = () => {
    setIsErrorAlertOpen(false);
  };

  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      height="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      {/* Left half */}
      <Box flex="1" pt={81} pl={160} pb={189} h={"100vh"} background={"#3A2619"} >

        <Box style={{ display: "flex" }}>
          <a href="./">  <img
            src="Musiclogo.png"
            alt="Logo"

            // onClick={()=>{navigate("/")}}
            style={{ width: '90px', height: 'auto', position: 'absolute', top: -6, left: 15 }}
          /></a>
          <a href="./"><h4 style={{ marginTop: "30px", fontFamily: "Fantasy", position: 'absolute', top: -8, left: 68, color: '#d5d5d5' }}>TuneWaves</h4></a>
        </Box>
        <img width={"72%"} src="/Badshah.png" alt="" />
        <b>
          <h2 style={{ textAlign: "center", marginRight: "120px", fontSize: "25px", color: "#FFFFFF" }}>All Your Music.</h2>
          <h2 style={{ textAlign: "center", marginRight: "120px", fontSize: "20px", color: "#f6e630" }}>Anytime,anywhere</h2>
        </b>
      </Box>

      {/* Right half */}
      <Box pl={110} mt={0} height={"420px"} marginRight={"138px"} marginTop={"-150px"} rounded="lg" maxWidth="600px" width="70%" style={{ backdropFilter: 'blur(5px)', fontFamily: "sans-serif" }}>
        <h4 style={{ position: "absolute", top: -80, right: -84, fontSize: "13px" }}>Don't have a TuneWave account yet? <button onClick={() => navigate("/signup")} style={{ border: "1px solid gray", borderRadius: "13px", padding: " 5px 12px" }}>Sign Up</button></h4>


        <b style={{ textAlign: "center", fontSize: "30px", marginLeft: "20px", pl: "60px", paddingTop: "300px" }}>  <h1 >Welcome to TuneWave.</h1></b>
        <p style={{ marginTop: "-6px", marginLeft: "80px", fontSize: "18px" }}>Login with your Email address</p>

        <form onSubmit={handleSubmit} style={{ paddingLeft: "110px", paddingTop: "30px", marginTop: "30px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}>

          <FormControl>

            <Input type="email" borderColor={"gray"} textAlign={"center"} borderRadius={"20px"} w={"300px"} mb={"25px"} placeholder='Email' color="gray" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormControl>
          <FormControl>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                textAlign={"center"}
                borderColor={"gray"}
                borderRadius={"20px"}
                w={"300px"}
                mb={"15px"}
                placeholder='Password'
                color="gray"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  marginLeft={"-36"}
                  onClick={() => setShowPassword(!showPassword)}
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  variant="ghost"
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>




          <p style={{ color: "gray", fontSize: "13px", marginTop: "25px" }}>By selecting ‘Continue’, you agree to MusicWaves’s Terms of Service and Privacy Policy.</p>
          <Button type="submit" fontSize={"xl"} p={"20px 60px 20px 60px"} ml={"65"} mb={"25px"} mt="8" bg="#2BC5B4" colorScheme="white">
            Login
          </Button>
        </form>
        {responseMessage && <Text color="white">{responseMessage}</Text>}
      </Box>


      <AlertDialog isOpen={isSuccessAlertOpen} onClose={closeErrorAlert}>
        <AlertDialogOverlay >
          <AlertDialogContent bg="#2BC5B4" color="white" borderRadius="md">
            <AlertDialogHeader>Success</AlertDialogHeader>
            <AlertDialogBody>Login successful!</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <AlertDialog isOpen={isErrorAlertOpen} onClose={closeErrorAlert}>
        <AlertDialogOverlay>
          <AlertDialogContent bg="#2BC5B4" color="white" borderRadius="md" paddingTop="20">
            <AlertDialogHeader>Please try again</AlertDialogHeader>
            <AlertDialogBody>{responseMessage}</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={closeErrorAlert}>Close</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export default Login;
