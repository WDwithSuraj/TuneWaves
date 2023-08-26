import React from 'react';
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
  const navigate=useNavigate();
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
      <Box>
        <img
          src="/path-to-your-logo.png"
          alt="Logo"
          style={{ width: '100px', height: 'auto' }}
        />
      </Box>

      <Spacer />

      {/* Search Bar */}
      <Box  pt="0"> 
        <Input
          placeholder="Search..."
          variant="outline"
          size="sm"
          w={500}
          borderRadius="full"
          p={5}
          
        />
        <IconButton
        //   icon={<FiSearch />}
          aria-label="Search"
          variant="ghost"
          size="lg"
          ml="10px"
        

        />
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
        <Button onClick={()=>navigate("/login")} color={"black"} variant="ghost" size="sm" bg={"gray"}>
          Login
        </Button>
        <Button onClick={()=>navigate("/signup")} colorScheme="blue" size="sm">
          Sign Up
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
