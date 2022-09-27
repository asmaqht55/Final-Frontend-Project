import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import {
  ChakraProvider,
  Flex,
  theme,
  VStack,
  Text,
  Button,
  HStack,
  Input,
  Image,
  useToast,
  Box,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import logo from './img/logobs.png';
const SginIn=()=> {
    const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const[userdata,setuserdata]= React.useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const headers = new Headers();


  const login = async () => {
    const request = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        authorization: 'Basic ' + btoa(username + ':' + password),
      },
    });
      
    const data = await request.json();
     console.log(data)
     
      const fetchusersData = async () => {
        const request = await fetch('/api/v1/auth/find-by-username/'+username, {method:'GET',
        headers: {
          authorization: 'Basic ' + btoa(username + ':' + password),
        },
       })
        const data1 = await request.json();
        console.log(data1);
        setuserdata(data1);

        if(data1.role==='HR')
      navigate('/hr');
      else{navigate('/user')}
      };
      fetchusersData();
   



    if (request.status === 401) {
      toast({
        title: 'Error',
        description: data.message,
        status: 'error',
        duration: 2000,
        isClosable: false,
        position: 'top',
      });
    } else {
      localStorage.setItem('loggedIn', true);
      
    }
  };

  
  



  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      navigate('/user');
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <HStack spacing="0" width="100vw" height="100vh">
        <Flex
          height="100vh"
          width={['100%', '100%', '50%']}
          justifyContent="center"
          alignItems="center"
          bgColor={'#276749'}
        >
          <VStack
            mx="auto"
            align="left"
            spacing="5"
            width={['90%', '90%', '458px']}
          >
            <Text fontWeight="bold" fontSize="3rem" color="white" fontFamily='Heading Font Name'>
              Sign In 
            </Text>
            <VStack spacing="10">
            <Input bgColor={'white'}
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder="Username"
          type='text'
        />
        <Input bgColor={'white'}
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          type='password'
        />
            </VStack>
            <Button bgImage={'hr-1.png'}
            onClick={login} width="100%">
          Login
        </Button>
          </VStack>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          display={['none', 'none', 'flex']}
          backgroundColor="#F9F9FC"
          height="100vh"
          width={['0', '0', '50%']}
>             
          <Image height="790px" width="720px" src='hr-1.png' /> 
        </Flex>
      </HStack>
      <Footer/>
    </ChakraProvider>
  );
}

export default SginIn;