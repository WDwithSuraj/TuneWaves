import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Checkbox, Text, Image, VStack, HStack, Switch } from '@chakra-ui/react';

import Error from './Error';
import Success from './Success';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      name: name,
      password: password,
      gender: gender,
      isAdmin: isAdmin,
    };

    try {
      const response = await fetch('http://localhost:8080/tuneWaves/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
console.log(data);
      if (response.ok) {
        setResponseMessage('Sign-up successful!');
     
        <Success />
      
      } else {
        setResponseMessage(` ${data.message}`);
     <Error />

      }
    } catch (error) {
      setResponseMessage('An error occurred while signing up.');
    }
  };

  return (
    <Box
      backgroundImage="url('/loginAndsignuppic.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column" 
    >
      <Text color="white"  fontSize={"25px"}>Register</Text>
      <HStack spacing={6} alignItems="flex-start">
        <VStack mt={20} alignItems="flex-start">
          
          <Button
            variant="outline"
            size="lg"
            color="white"
            leftIcon={<Image src="/download (1).png" mr={5} boxSize={10} />}
            onClick={() => console.log('Sign Up with Google')}
          >
            Sign Up with Google
          </Button>
       
          <Button
            variant="outline"
            size="lg"
            color="white"
            leftIcon={<Image src="/download.png" boxSize={10} mr={5} />}
            onClick={() => console.log('Sign Up with Twitter')}
          >
            Sign Up with Twitter
          </Button>
        </VStack>
        <h2 color='white'>OR</h2>
        <Box p={8} ml={100} rounded="md" shadow="lg" maxWidth="400px" width="100%" style={{ backdropFilter: 'blur(5px)' }}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>
                <Text color="white" placeholder={"Your Email"}>Email:</Text>
              </FormLabel>
              <Input type="email" color={'white'} value={email} onChange={(e) => setEmail(e.target.value)} required />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Text color="white">Name:</Text>
              </FormLabel>
              <Input type="text"  color={'white'} value={name} onChange={(e) => setName(e.target.value)} required />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Text color="white">Password:</Text>
              </FormLabel>
              <Input type="password" color={'white'}  value={password} onChange={(e) => setPassword(e.target.value)} required />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Text color="white">Gender:</Text>
              </FormLabel>
              <Input type="text" color={'white'} value={gender} onChange={(e) => setGender(e.target.value)} required />
            </FormControl>
           
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="admin-switch" mb="0">
                <Text color="white">Admin:</Text>
              </FormLabel>
              <Switch id="admin-switch" colorScheme="white" isChecked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
            </FormControl>
            <Button type="submit" m={"10"} bg={"gray"} colorScheme="white">
              Sign Up
            </Button>
          </form>
          {responseMessage && <Text color="white">{responseMessage}</Text>}
        </Box>
      </HStack>
    </Box>
  );
}

export default Signup;
