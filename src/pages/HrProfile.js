import React from 'react'
//import Sider from '../component/Sider'
import Nave from '../component/Nave'
import Footer from '../component/Footer'

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
  HStack,
  Select,
  Image,
} from '@chakra-ui/react';
import Sider from '../component/Sider';

const HrProfile =()=> {
       
    
  return (
    
      <>
        <Nave/>
        
        <HStack>
       
        <Flex justifyContent="center"
          alignItems="center"
          display={['none', 'none', 'flex']}
          backgroundColor="#F9F9FC"
          height="100vh"
          width={['0', '0', '30%']}>
      <VStack mx="auto"
            align="left"
            spacing="5"
            width={['90%', '90%', '458px']}>
      <Sider/>
      </VStack>
      </Flex>

       
      <Flex  height="100vh"
          width={['100%', '100%', '50%']}
          justifyContent="center"
          alignItems="space-between"
         >
      <VStack  mx="auto"
            align="left"
            spacing="5"
            marginTop="10"
            width={['90%', '90%', '458px']}>
    
    

        <Select placeholder='Category' >
         <option value='option1'>Health</option>
        <option value='option2'>Education</option>
        <option value='option2'>Technical</option>
        <option value='option2'>Business</option>
         </Select>

          <Select placeholder='years of experice'>
          <option value='option1'>1-3</option>
          <option value='option2'>3-5</option>
          <option value='option3'>5-10</option>
          <option value='option4'>10 - above</option>
          </Select>


          
  
      </VStack>
      </Flex> 
     
       </HStack>
       <Footer/>
       </>
    
    )
}

export default HrProfile;

    
