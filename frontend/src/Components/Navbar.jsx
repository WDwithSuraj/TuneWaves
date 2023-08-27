import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Flex,
  Spacer,
  Input,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { FiSearch, FiMusic, FiUser } from 'react-icons/fi'; // Correct import
import { FiLogIn, FiUserPlus } from 'react-icons/fi'; // Correct import
import Login from './Login';
import { FaSignLanguage } from 'react-icons/fa';
// import { FiSearch, FiMusic } from '@chakra-ui/icons';

const languages = [
  
  'English',
  'Hindi',
  'Tamil',
  'Bengali',
  'Punjabi',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
];

const Navbar = () => {
  const [playlists, setPlaylists] = useState([]);
  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const user=localStorage.getItem("user")
const token=localStorage.getItem("token")
  useEffect(() => {
    fetch("http://localhost:8080/tuneWaves/songs")
      .then((res) => res.json())
      .then((data) => {
        const playlists = data.data.map((el) => el.title);
        setPlaylists(playlists);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchChange = (event) => {
    
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Perform the search action and update searchResults
    const updatedResults = performSearch(newSearchTerm);
    setSearchResults(updatedResults);
  };

  const performSearch = (term) => {
    // Filter playlists that contain the search term
    return playlists.filter((playlist) =>
      playlist.toLowerCase().includes(term.toLowerCase())
    );
  };
  return (
    <Flex
      as="nav"
      align="center"
      padding="1rem"
      height='20'
      width={"auto"}
      borderBottom="1px solid #eee"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      backgroundColor="#253653"
      margin= '-0.8px'
  
    
      // backgroundColor=" #e5e5f7"
      // opacity= "0.8"
      // backgroundImage="  repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #444cf755, #444cf7 )"
    >
      {/* Website Logo */}
      <Box style={{display:"flex"}}>
      <a href="./">  <img
          src="Musiclogo.png"
          alt="Logo"
          // onClick={()=>{navigate("/")}}
          style={{ width: '90px', height: 'auto' }}
        /></a>
        <a href="./"><h4 style={{marginTop:"30px",fontFamily:"Fantasy", position: 'absolute', top: -8, left: 68,color:'#d5d5d5'}}>TuneWaves</h4></a>
      </Box>

      <Spacer />

      {/* Search Bar */}
      
      <Box pt="0" position="relative">
  <Input
    placeholder="Scout for Tunes..."
    textAlign={'center'}
    variant="outline"
    size="sm"
    w={500}
    borderRadius="full"
    p={5}
    value={searchTerm}
    onChange={handleSearchChange}
    background={'#d5d5d5'}
  />
  {/* Display search results */}
  {searchResults.length > 0 && searchTerm.length > 0 && (
    <Box
      mt={2}
      w={500}
      maxHeight="260px" // Set maximum height for results
      overflowY="auto" // Add scrollbar if content overflows
      position="absolute" // Position the results absolutely
      zIndex={1} // Make sure results appear above other content
      bg="white" // Add a background color
      // border="1px solid #eee" // Add a borders
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" // Add a shadow
      background={'#d5d5d5'}
    >
      {searchResults.slice(0, 10).map((result) => (
        <Box key={result} >
          {result}
        </Box>
      ))}
    </Box>
  )}
</Box>

      <Spacer />

      {/* Music and Language Options */}
      {/* <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FaSignLanguage />}
            variant="ghost"
            size="sm"
            backgroundColor={"gray"}
            marginRight={"30"}
          />
          <MenuList pl>
            {languages.map((language) => (
              <MenuItem key={language}>{language}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box> */}
      {/* <a href="" style={{}}><b><h3 style={{color:"#e99d72",fontFamily:"sans-serif",paddingRight:"30px"}}>{user}</h3></b></a> */}
      
      {token?<><b><h3 style={{color:"#4CAF50",fontFamily:"sans-serif",paddingRight:"8px",fontWeight:"bolder"}}>{user}</h3></b><IconButton   variant="ghost" icon={<FiUser />} style={{color:"#e99d72",fontFamily:"sans-serif",marginRight:"30px"}} placeholder='user'/></>:<Box>
        {/* Use FiLogIn and FiUserPlus icons for Login and Sign Up */}
        <IconButton
          icon={<FiLogIn />}
          aria-label="Login"
          variant="ghost"
          size="md"
          onClick={() => navigate("/login")}
          color={"black"}
          bg={"gray"}
          marginRight={2}
          borderRadius={"40%"}
          padding={4}
        />
        <IconButton
          icon={<FiUserPlus />}
          aria-label="Sign Up"
          background="#e99d72"
          size="md"
          borderRadius={"40%"}
          padding={4}
          onClick={() => navigate("/signup")}
        />
      </Box>}
    </Flex>
  );
};

export default Navbar;
