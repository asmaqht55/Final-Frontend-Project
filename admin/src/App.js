import Sider from './componant/Sider';
import User from './pages/User.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
  Menu,
  MenuButton,
  MenuItem,
  ChevronDownIcon,
  MenuList,
  HStack
  

  


} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const App=()=> {
  return (
    
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Routes>
    <Route path="/user" element={<User />} />
    </Routes>
    </BrowserRouter>
   </ChakraProvider>
  );
}

export default App;
