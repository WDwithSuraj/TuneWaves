import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8080/tuneWaves/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
console.log(data);
      if (response.ok) {
        setResponseMessage('Login successful!');
        openErrorAlert('Login Successful');
        localStorage.setItem('token', data.token);

      } else {
        setResponseMessage(`Error: ${data.message}`);
        openErrorAlert(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage('An error occurred while logging in.');
      openErrorAlert();
    }
  };

  const openErrorAlert = () => {
    setIsErrorAlertOpen(true);
  };

  const closeErrorAlert = () => {
    setIsErrorAlertOpen(false);
  };

  return (
    <Box
      backgroundImage="url('/loginpagepic1.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg="white" p={8} rounded="md" shadow="lg" maxWidth="400px" width="100%">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormControl>
          <FormControl>
            <FormLabel>Password:</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </FormControl>
          <Button type="submit">Login</Button>
        </form>
      </Box>

      {/* Error Alert Popup */}
      <AlertDialog isOpen={isErrorAlertOpen} onClose={closeErrorAlert}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Error</AlertDialogHeader>
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
