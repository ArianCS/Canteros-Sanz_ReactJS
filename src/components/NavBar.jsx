import React from 'react';
import CartWidget from './CartWidget';
import {Container, Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Image} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container maxW='100%' bg='#000000' color='white'>
      <Flex>
        <Box pt='3' color='#21ad95'>
          <Menu>
            <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline' />
              <MenuList>
                  <MenuItem ><Link to={"/catalogue"}>Catalogue</Link></MenuItem>
                  <Link to={`/category/${"Electric Guitar"}`}><MenuItem>Electric Guitar</MenuItem></Link>
                  <Link to={`/category/${"Acoustic Guitar"}`}><MenuItem>Acoustic Guitar</MenuItem></Link>
              </MenuList>
          </Menu>
        </Box>
        <Spacer />
          <Link to={"/"}>
            <Box>
              <img src={logo}></img>
            </Box>
          </Link>
        <Spacer />
        <Box>
          <CartWidget/>
        </Box>
      </Flex>
    </Container>
  );
};

export default NavBar