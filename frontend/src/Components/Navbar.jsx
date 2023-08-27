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
import { FiSearch, FiMusic } from 'react-icons/fi'; // Correct import
import { FiLogIn, FiUserPlus } from 'react-icons/fi'; // Correct import
import Login from './Login';
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
      borderBottom="1px solid #eee"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
    >
      {/* Website Logo */}
      <Box style={{display:"flex"}}>
        <img
          src="weblogo1.jpg"
          alt="Logo"
          style={{ width: '70px', height: 'auto' }}
        />
        <h4>MusicWaves</h4>
      </Box>

      <Spacer />

      {/* Search Bar */}
      
      <Box pt="0" position="relative">
        <Input
          placeholder="Search..."
          variant="outline"
          size="sm"
          w={500}
          borderRadius="full"
          p={5}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* Display search results */}
        {searchResults.length > 0 && (
          <Box
            mt={2}
            w={500}
            maxHeight="160px" // Set maximum height for results
            overflowY="auto" // Add scrollbar if content overflows
            position="absolute" // Position the results absolutely
            zIndex={1} // Make sure results appear above other content
            bg="white" // Add a background color
            border="1px solid #eee" // Add a border
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" // Add a shadow
          >
            {searchResults.slice(0, 10).map((result) => (
              <Box key={result} p={2} borderBottom="1px solid #eee">
                {result}
              </Box>
            ))}
          </Box>

        )}
      </Box>


      <Spacer />

      {/* Music and Language Options */}
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            // icon={<FiMusic />}
            variant="ghost"
            size="sm"
          />
          <MenuList>
            {languages.map((language) => (
              <MenuItem key={language}>{language}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

      
      <Box>
        {/* Use FiLogIn and FiUserPlus icons for Login and Sign Up */}
        <IconButton
          icon={<FiLogIn />}
          aria-label="Login"
          variant="ghost"
          size="sm"
          onClick={() => navigate("/login")}
          color={"black"}
          bg={"gray"}
        />
        <IconButton
          icon={<FiUserPlus />}
          aria-label="Sign Up"
          colorScheme="blue"
          size="sm"
          onClick={() => navigate("/signup")}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
