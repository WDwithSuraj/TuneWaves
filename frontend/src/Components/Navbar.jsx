import React from 'react';
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
  return (
    <Flex
      as="nav"
      align="center"
      padding="1rem"
      borderBottom="1px solid #eee"
      backgroundColor="black"
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
      <Box>
        <Input
          placeholder="Search..."
          variant="outline"
          size="sm"
          borderRadius="full"
        />
        <IconButton
        //   icon={<FiSearch />}
          aria-label="Search"
          variant="ghost"
          size="lg"
          ml="-10px"
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

      {/* Login and Signup */}
      <Box>
        <Button color={"black"} variant="ghost" size="sm" bg={"gray"}>
          Login
        </Button>
        <Button colorScheme="blue" size="sm">
          Sign Up
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
