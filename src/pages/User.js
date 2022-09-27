import React from 'react'
//import Sider from '../component/Sider'
import Nave from '../component/Nave'
import Footer from '../component/Footer'

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Box,
  Text,
  VStack,
  HStack,
  Select,
  SimpleGrid,
  Avatar,
  Badge,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import Sider from '../component/Sider';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useToast } from '@chakra-ui/react'






const User =()=> {

  const[category,setCategory]=useState('');
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const handleDateChange = (event) => setDate(event.target.value)
  const [hour, setHour] = useState(1);
  const [hrId,setHrId]=useState(1)

  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

  
    const fetchData = async (category) => {
      let hrArr1=[];
      const request = await fetch('/api/v1/hr/getByCategory/'+category);
      const data = await request.json();
      for (let index = 0; index < data.length; index++) {
        //console.log(data[index].userId);
        try {
        const requestU = await fetch('/api/v1/auth/find-user/'+data[index].userId);
       // console.log(requestU)
        const dataU = await requestU.json();  
        console.log(dataU);
        hrArr1.push(
          {
            id:data[index].id,
            FullName:dataU.fullName,
            email:dataU.email,
            major:dataU.major,
            category:data[index].category,
            yearsOfExperience:data[index].yearsOfExperience,
            summary:data[index].summary

          }
        )
      }
    catch(e){
      console.log(e)
    }
      console.log(hrArr1)
      setHrlist(hrArr1)
  }
     // setHrlist(data);
    //  console.log(data)
    };

   

  const[hrList,setHrlist]=useState([]);
  const[id,setId]=useState();

  useEffect(() => {
    const getHr = async () => {
      let hrArr=[];
      const request = await fetch('/api/v1/hr');
      //console.log(request)
      const data = await request.json();
console.log(data);
      for (let index = 0; index < data.length; index++) {
        console.log(data[index].userId);
        try {
        const requestU = await fetch('/api/v1/auth/find-user/'+data[index].userId);
       // console.log(requestU)
        const dataU = await requestU.json();  
        console.log(dataU);
        hrArr.push(
          {
            id :data[index].id,
            FullName:dataU.fullName,
            email:dataU.email,
            major:dataU.major,
            category:data[index].category,
            yearsOfExperience:data[index].yearsOfExperience,
            summary:data[index].summary

          }
        )
        
      }
    catch(e){
      console.log(e)
    }
      console.log(hrArr)
      setHrlist(hrArr)
  }
    
    };
    getHr();
  }, []);
  console.log(hrList)

  const navigate = useNavigate();

  // const hrDetails = () => {
    
  //   const params = useParams();
  //   const id = params.id;
  
  //   const navigate = useNavigate();
  
  //   useEffect(() => {
  //     const fetchBlogDetails = async () => {
  //       const request = await fetch('http://localhost:8080/api/v1/blog/' + id);
  //       const data = await request.json();
  //       setTitle(data.title);
  //       setBody(data.body);
  //     };
  //     fetchBlogDetails();
  //   }, []);










const sendAppointmentData = async () => {
  console.log(hrId)
  var raw = {
    "hrId": hrId,
    "numberOfHours": hour,
    "date": date,
    "time": time,
  };


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify(raw),
};
const request = await fetch("/api/v1/auth/meet", requestOptions);
const data =  request.json();
console.log(data);
            console.log(data.message)
                setDate("");     
                
                if (request.status === 200) {
                  toast({
                    title: 'Success',
                    description: data.message,
                    status: 'success',
                    duration: 2000,
                    isClosable: false,
                    position: 'top',
                  });
                }
               
}


  //fetch

  const BookAppointment = async (e) => {
    sendAppointmentData();
}


  
  return (
    
    <>
        <Nave/>

    <HStack spacing="0" width="100vw" height="100vh"> 
    
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
              

  <Select placeholder='Category'  value={category}
            onChange={e => {
              console.log(e.target.value)
             setCategory(e.target.value);
              fetchData(e.target.value);
            }}>
  <option value='Health'>Health</option>
  <option value='Education'>Education</option>
  <option value='Technical'>Technical</option>
  <option value='Business'>Business</option>
  </Select>

  <HStack  mx="auto"
            align="right"
            spacing="5"
            marginTop="10"
            width={['90%', '90%', '458px']}>

<SimpleGrid  columns={3} spacing={5}> 

  { hrList.map((hr,index)=>{
    
return (<>
 
 <Center py={6} key={index}> 
  
        <Box
          maxW={'220px'}
          w={'full'}
          bg={'white'}
          boxShadow={'lg'}
          rounded={'md'}
          p={6}
          textAlign={'center'}> 
          <Avatar
            size={'xl'}
            src={
              'https://images.un-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
             
             
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          
            
          <Heading fontSize={'2xl'} fontFamily={'body'}>
          {hr.FullName}

          </Heading>
          <Text fontWeight={600} color={'green.500'} mb={4} >  {hr.id}</Text>

          <Text fontWeight={600} color={'green.500'} mb={4} >          {hr.major}

          </Text> 
          <Text
            textAlign={'center'}
            color={'gray.700'}
            px={3}>
              {hr.summary}
          </Text>
          
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={'gray.50'}
              fontWeight={'400'}>
              {hr.category}
            </Badge>
            
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
          
           
            <Button
            onClick={()=>{
              console.log(hr)
              setHrId(hr.id)
              onOpen();
            }}

              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'green.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
              booking
            </Button>
            <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

          <FormControl>
          <FormLabel>Select Date:</FormLabel>
      <Input
                              value={date}
                              min={new Date().toISOString().slice(0, 16)}
                              onChange={handleDateChange}
       placeholder="Select Date and Time"
           size="md"
          type="datetime-local"
 
/>
      </FormControl>
       
   
      <FormControl>
      <FormLabel>Number of Hours:</FormLabel>
      <NumberInput                   onChange={setHour}
                        value={hour} max={4} min={1}>
      <NumberInputField />
      <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
      </NumberInputStepper>
      </NumberInput>
      </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={BookAppointment} colorScheme='blue' mr={3}>
              Send
            </Button>
            <Button onClick={onClose} mr={3}>ok</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      
          </Stack>
        </Box>
        
      </Center>
      

      </>)
})}
</SimpleGrid>
  </HStack>
  </VStack>
   </Flex>
   </HStack>
    <Footer/>

      </>
  )
}

export default User