import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Checkbox, Text, Image, VStack, HStack } from '@chakra-ui/react';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [marketingMessages, setMarketingMessages] = useState(false);
  const [shareData, setShareData] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      name: name,
      password: password,
      gender: gender,
      date_of_birth: dob,
      marketing_messages: marketingMessages,
      share_data: shareData,
    };

    try {
      const response = await fetch('https://dark-blue-coral-tie.cyclic.cloud/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage('Sign-up successful!');
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage('An error occurred while signing up.');
    }
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
      flexDirection="column" /* Center items vertically */
    >
          <Text color="white" p={"15"} fontSize={"30px"}>Register</Text>
      <HStack spacing={6} alignItems="flex-start">
        <VStack mt={220} alignItems="flex-start">
          {/* Sign Up with Google Button */}
          <Button
            variant="outline"
            size="lg"
            color="white"
            leftIcon={<Image src="/download (1).png" mr={5} boxSize={10} />}
            onClick={() => console.log('Sign Up with Google')}
          >
            Sign Up with Google
          </Button>
          {/* Sign Up with Twitter Button */}
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
        <Box  p={8} ml={100} rounded="md" shadow="lg" maxWidth="400px" width="100%" style={{ backdropFilter: 'blur(5px)' }}>
      
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>
                <Text color="white"  placeholder={"Your Email"}>Email:</Text>
              </FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Text color="white">Name:</Text>
              </FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Text color="white">Password:</Text>
              </FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Text color="white">Gender:</Text>
              </FormLabel>
              <Input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Text color="white">Date of Birth:</Text>
              </FormLabel>
              <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
            </FormControl>
            <Checkbox color={'white'} colorScheme="white" isChecked={marketingMessages} onChange={(e) => setMarketingMessages(e.target.checked)}>
              I would prefer not to receive marketing messages from Music Waves
            </Checkbox>
            <Checkbox color={'white'} colorScheme="white" isChecked={shareData} onChange={(e) => setShareData(e.target.checked)}>
              Share my registration data with Music Waves's content providers for marketing purposes
            </Checkbox>
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
