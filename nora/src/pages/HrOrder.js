import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  ChakraProvider,
  Box,
  Text,
  Radio,
  Stack,
} from '@chakra-ui/react'

function HrOrder(){


  return (
    <>
  <ChakraProvider>
  <Text textAlign={"center"} fontSize='3xl'> Confirmed orders</Text>

  <Box p={4}>
  <TableContainer>
  <Table size='sm'>
    <Thead >
      <Tr >
        <Th fontSize={15} textAlign={[ 'left', 'center' ]}>Message</Th>
        <Th fontSize={15}textAlign={[ 'left', 'center' ]}> Order State</Th>
        <Th fontSize={15}textAlign={[ 'left', 'center' ]}>Time</Th>
        <Th fontSize={15}textAlign={[ 'left', 'center' ]}>Day</Th>
        <Th  fontSize={15}textAlign={[ 'left', 'center' ]} >Date</Th>
      </Tr>
    </Thead>

    <Tbody>
      <Tr >
        <Td textAlign={[ 'left', 'center' ]}>Meeting in zoom</Td>
        <Td textAlign={[ 'left', 'center' ]}>Acsepts</Td>
        <Td textAlign={[ 'left', 'center' ]}>5pm</Td>
        <Td textAlign={[ 'left', 'center' ]}>Sunday</Td>
        <Td textAlign={[ 'left', 'center' ]}>24/2/2022</Td>
      </Tr>
     
      <Tr>
        <Td textAlign={[ 'left', 'center' ]}>Meeting in zoom</Td>
        <Td textAlign={[ 'left', 'center' ]}>Acsepts</Td>
        <Td textAlign={[ 'left', 'center' ]}>5pm</Td>
        <Td textAlign={[ 'left', 'center' ]}>Sunday</Td>
        <Td textAlign={[ 'left', 'center' ]}>24/2/2022</Td>
      </Tr>
      
      <Tr>
        <Td textAlign={[ 'left', 'center' ]}>Meeting in zoom</Td>
        <Td textAlign={[ 'left', 'center' ]}>Acsepts</Td>
        <Td textAlign={[ 'left', 'center' ]}>5pm</Td>
        <Td textAlign={[ 'left', 'center' ]}>Sunday</Td>
        <Td textAlign={[ 'left', 'center' ]}>24/2/2022</Td>
      </Tr>
    </Tbody>
  
  </Table>
</TableContainer>
</Box>
</ChakraProvider>
   
<ChakraProvider>
  <Box p={4} >
  <Text textAlign={"center"} fontSize='3xl'>Order wait confermd</Text>
    
  <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th fontSize={15}textAlign={[ 'left', 'center' ]}>Message</Th>
        <Th fontSize={15}textAlign={[ 'left', 'center' ]}> Order State</Th>
        <Th fontSize={15}textAlign={[ 'left', 'center' ]}>Time</Th>
        <Th fontSize={15}textAlign={[ 'left', 'center' ]}>Day</Th>
        <Th fontSize={15}textAlign={[ 'left', 'center' ]} >Date</Th>
      </Tr>
    </Thead>

    <Tbody>
      <Tr>
        <Td textAlign={[ 'left', 'center' ]}>Meeting in zoom</Td>
        <Td >
          <Stack alignItems="center"defaultValue='2'>
          <Radio colorScheme='green' value='1'> Acsepts</Radio>
          <Radio colorScheme='red' value='2'>Regect</Radio>
          </Stack>
        </Td>
        <Td textAlign={[ 'left', 'center' ]}>5pm</Td>
        <Td textAlign={[ 'left', 'center' ]}>Sunday</Td>
        <Td textAlign={[ 'left', 'center' ]}>24/2/2022</Td>
      </Tr>
     
      <Tr>
        <Td textAlign={[ 'left', 'center' ]}>Meeting in zoom</Td>
        <Td>
          <Stack alignItems="center"defaultValue='2'>
          <Radio colorScheme='green' value='1'> Acsepts</Radio>
          <Radio colorScheme='red' value='2'>Regect</Radio>
          </Stack>
        </Td>
        <Td textAlign={[ 'left', 'center' ]}>5pm</Td>
        <Td textAlign={[ 'left', 'center' ]}>Sunday</Td>
        <Td textAlign={[ 'left', 'center' ]}>24/2/2022</Td>
      </Tr>
      
      <Tr>
        <Td textAlign={[ 'left', 'center' ]}>Meeting in zoom</Td>
        <Td>
          <Stack alignItems="center"defaultValue='2'>
          <Radio colorScheme='green' value='1'>Acsepts</Radio>
          <Radio colorScheme='red' value='2'>Regect</Radio>
          </Stack>
        </Td>
        <Td textAlign={[ 'left', 'center' ]}>5pm</Td>
        <Td textAlign={[ 'left', 'center' ]}>Sunday</Td>
        <Td textAlign={[ 'left', 'center' ]}>24/2/2022</Td>
      </Tr>
    </Tbody>
  
  </Table>
</TableContainer>
</Box>
</ChakraProvider>  
 </> );
}
export default HrOrder;
