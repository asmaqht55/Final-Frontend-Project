import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    HStack,
  } from '@chakra-ui/react';
  
  
  function UserOrder(){
  
  
    return (
      <>
    <Flex>
       <Stack spacing={8} mx={'auto'} maxW={'md'} py={12} px={6}>
        <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Order Deatils</Heading>
       </Stack>
          
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
  
        <HStack>
        <Box>
          <FormControl >
          <FormLabel> Date</FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>
        
        <Box>
          <FormControl>
          <FormLabel>Day</FormLabel>
             <Input type="text" />
          </FormControl>
        </Box>
        </HStack>
        
        <HStack>
        <Box>
          <FormControl>
          <FormLabel>Time</FormLabel>
            <Input type="text" />
        </FormControl>
        </Box>
  
        <Box>
        <FormControl id="lastName">
        <FormLabel>State</FormLabel>
            <Input type="text" />
        </FormControl>
        </Box>
        </HStack>
        
        <Stack spacing={4}  w={'full'}>
        <FormControl id="payment">
        <FormLabel>Payment</FormLabel>
        <Input type="text" />
        </FormControl>
  
       
        <Button
          bg={'blue.400'}
          color={'white'}
           _hover={{
           bg: 'blue.500', }}>
          
           Home page
        </Button>
            
            </Stack>
          </Box>
        </Stack>
      </Flex>
  
  
   </> );
  }
  export default UserOrder;
  
  
  