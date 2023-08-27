
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  HStack,
  Switch,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Image,
  Select,
  Spacer,
} from '@chakra-ui/react';

function Signup() {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);

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
console.log(data)
      if (response.ok) {
        setResponseMessage('Sign-up successful!');
        openSuccessAlert();
        setTimeout(() => {
          navigate("/");
        }, 3000); 
        setEmail('');
        setName('');
        setPassword('');
        setGender('');

      } else {
        setResponseMessage(data.message);
        openErrorAlert();
      }
    } catch (error) {
      setResponseMessage('An error occurred while signing up.');
      openErrorAlert();
    }

  };


  const openSuccessAlert = () => {
    setIsSuccessAlertOpen(true);
  };

  const closeSuccessAlert = () => {
    setIsSuccessAlertOpen(false);
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
      <Box flex="0.8" pt={81} pl={40} pb={189} h={"100vh"} background={"#3A2619"} >
     <img
    width="12%"
    onClick={()=>navigate("/")}
    src="logo1.jpg" 
    alt=""
    style={{ position: 'absolute', top: -10, left: 5 }}
  />
     

       <img width={"72%"}src=" /Register.png" alt="" />
    <b>   <h2 style={{textAlign:"center",marginRight:"120px",fontSize:"25px",color:"#FFFFFF"}}>All Your Music.</h2>
       <h2 style={{textAlign:"center",marginRight:"120px",fontSize:"20px",color:"#88553E"}}>Anytime,anywhere</h2></b>
      </Box>

      {/* Right half */}
      <Box flex="1" display="flex" justifyContent="flex-end">
        {/* <HStack spacing={6} alignItems="flex-start"> */}
          {/* <VStack mt={40} ml={10} alignItems="flex-start">
          <Button
            variant="outline"
            size="lg"
            color="grey"
            p={7}
            leftIcon={<Image src="/download (1).png" mr={3} boxSize={10} />}
            onClick={() => console.log('Sign Up with Google')}
          >
            Sign Up with Google
          </Button>
          <Button
            variant="outline"
            size="lg"
            color="gray"
            p={7}
            leftIcon={<Image src="/download.png" boxSize={10} mr={3} />}
            onClick={() => console.log('Sign Up with Twitter')}
          >
            Sign Up with Twitter
          </Button>
          </VStack> */}
          <Box  p={10} mt={0} height={"500px"} marginRight={"120px"}  marginTop={"-150px"} rounded="lg"  maxWidth="700px" width="70%" style={{ backdropFilter: 'blur(5px)',fontFamily:"sans-serif" }}>
          <h4 style={{position:"absolute",top:-40 , right:-80,fontSize:"13px"}}>Already have an acoount? <button onClick={()=>navigate("/login")} style={{border:"1px solid gray",borderRadius:"13px",padding:" 5px 17px"}}>Login</button></h4>

         
         <b style={{textAlign:"center",fontSize:"30px",marginLeft:"20px"}}>  <h1 >Welcome to TuneWave.</h1></b>
           <p style={{marginTop:"-6px",marginLeft:"52px",fontSize:"18px"}}>Sign up with your Email address</p>
           <form  onSubmit={handleSubmit} style={{paddingLeft:"80px",paddingTop:"10px",marginTop:"30px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}} >
          
            <FormControl >
             
              <Input type="text" textAlign={"center"} borderColor={"gray"} borderRadius={"20px"} w={"300px"} mt={"20px"} mb={"15px"} placeholder='Name' color="gray" value={name} onChange={(e) => setName(e.target.value)} required />
            </FormControl>
            <FormControl>
            
            <Input type="email" borderColor={"gray"} textAlign={"center"}  borderRadius={"20px"} w={"300px"} mb={"15px"}  placeholder='Email' color="gray" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormControl>
            <FormControl>
            
              <Input type="password" textAlign={"center"} borderColor={"gray"} borderRadius={"20px"} w={"300px"}mb={"15px"}  placeholder='Password' color="gray" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </FormControl>
            <FormControl>
            
              <Select color="gray"borderColor={"gray"} textAlign={"center"}  borderRadius={"20px"} w={"300px"} mb={"0px"} value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option color="gray" value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <p style={{color:"gray",fontSize:"13px",marginTop:"25px"}}>By selecting ‘Continue’, you agree to MusicWaves’s Terms of Service and Privacy Policy.</p>
            <Button type="submit" fontSize={"xl"} p={"20px 60px 20px 60px"} ml={"43"} mb={"25px"} mt="8" bg="#2BC5B4" colorScheme="white">
             Continue
            </Button>
          </form>
          {responseMessage && <Text color="white">{responseMessage}</Text>}
          </Box>
        {/* </HStack> */}
        
      <AlertDialog isOpen={isSuccessAlertOpen} onClose={closeSuccessAlert}>
        <AlertDialogOverlay>
          <AlertDialogContent bg="#2BC5B4" color="white" borderRadius="md">
            <AlertDialogHeader>Success</AlertDialogHeader>
            <AlertDialogBody>{responseMessage}</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={closeSuccessAlert}>Close</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <AlertDialog isOpen={isErrorAlertOpen} onClose={closeErrorAlert}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Please try again</AlertDialogHeader>
            <AlertDialogBody>{responseMessage}</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={closeErrorAlert}>Close</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </Box>
    </Box>
  );
}

export default Signup;
