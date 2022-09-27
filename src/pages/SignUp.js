import { Input, Textarea } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import {
  ChakraProvider,
  Flex,
  theme,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  

  
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Navigate, Outlet, useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'



export default function SignUp() {



  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setrole] = React.useState('');
  const [FullName, setfullName] = React.useState('');
  const [phoneNumber, setphoneNumber] = React.useState('');
  const [email, setemail] = React.useState('');
  const [major, setmajor] = React.useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData,setFormData]=useState()
  const [category,setCategory]=useState()
  const[yearsOfExperience,setYears]=useState()
  const[summary,setSummery]=useState()

  const toast = useToast()

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();

    const bodyValue = {
      username,
      password,
      role,
      FullName,
      phoneNumber,
      email,
      major,
      category,
      summary,
      yearsOfExperience,
        

    };

    try {
      const request = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyValue),
      });

      const data = await request.json();

      // if (request.status === 201) {
        toast({
          title: 'Success',
          description: data.message,
          status: 'success',
          duration: 2000,
          isClosable: false,
          position: 'top',
        });
      if (request.status === 200) {
        navigate('/singin');
      } else {

        // toast({
        //   title: 'Error',
        //   description: 'please check your input',
        //   status: 'error',
        //   duration: 2000,
        //   isClosable: false,
        //   position: 'top',
          
        // });

      }
    } catch (e) {
   
      return;
    }
  };

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      navigate('/');
    }
  }, []);

  return (
        <ChakraProvider theme={theme}>
        <Navbar/>
    <Flex
      minH={'50vh'}
      minW={'100vh'}
      align={'center'}
      justify={'center'}
      bgColor={'#276749'}
>      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={1} minWidth={'90vh'} minHeight={'50vh'} >
        <Stack align={'center'}>
          <Heading fontSize={'6xl'} textAlign={'center'} color={'white'} fontFamily='Heading Font Name'>
            Sign up
          </Heading>
         <Text fontSize={'lg'} color={'gray.600'}>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={100}>
          <Stack spacing={4}>
            <HStack>
              
                <FormControl id="firstName" isRequired>
                  <FormLabel  >Full Name</FormLabel>
                  <Input value={FullName}
            onChange={(e) => setfullName(e.target.value)}
            type='text'/>
                </FormControl>
              
            </HStack>
            <HStack>

              
                <FormControl id="username" isRequired>
                  <FormLabel v>Username</FormLabel>
                  <Input value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'/>
                </FormControl>
              
              </HStack>
            <FormControl id="password" isRequired>
              <FormLabel >Password</FormLabel>
              <InputGroup>
                <Input  value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password' />
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <HStack>
            
                <FormControl id="major" isRequired>
                  <FormLabel>Major</FormLabel>
                  <Input value={major}
            onChange={(e) => setmajor(e.target.value)}
            type='text'/>
                </FormControl>
              
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='xxxx@hotmail.com' value={email}
            onChange={(e) => setemail(e.target.value)}
             />
            </FormControl>
            <HStack>
              
                <FormControl id="phoneNumber" isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="text"  placeholder='05xxxxx' value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            />
                </FormControl>
            </HStack>
            <Stack>
            <Select placeholder='Select role' onChange={(e) => {
              console.log(e.target.value)
              if(e.target.value==='HR'){
                setFormData(
                  <>
                  <Select placeholder='Select category' onChange={(r) => setCategory(r.target.value)}>
                    <option value='Health'>Health</option>
  <option value='Education'>Education</option>
  <option value='Technical'>Technical</option>
  <option value='Business'>Business</option>
                  </Select>
                  <Select placeholder=' Years of experice' onChange={(r) => setYears(r.target.value)}>
                  <option value='1-3'>1-3</option>
<option value='3-5'>3-5</option>
<option value='5-10'>5-10</option>
<option value='10-above'>10-above</option>
                </Select>
                <FormControl id="summary" isRequired>
                  <FormLabel v>Summary</FormLabel>
                  <Textarea value={summary}
            onChange={(r) => setSummery(r.target.value)}
            type='text'/>
                </FormControl>
                </>
                )
              }else{
                setFormData()
              }
              setrole(e.target.value)}}>
  <option value='HR'>HR</option>
  <option value='Customer'>Customer</option>
</Select>
{formData}
</Stack>
            <Stack spacing={10} pt={2}>
              <Button
              onClick={formSubmit}
                loadingText="Submitting"
                name=''
                size="lg"
                bgImage={'hr-1.png'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} onClick={() => {
                navigate('/signin');
              }} >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    <Footer/>
    
    </ChakraProvider>
    
  );
}