
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Image,
} from '@chakra-ui/react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './component/Navbar'
import Footer from './component/Footer'

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'hr.png'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={4}>
          {/* <Image src="m.png" width={'500'} height={'500px'}  justify={'center'}/> */}
          <Text
  bgGradient='linear(to-r,white, green.500 )'
  bgClip='text'
  fontSize='7xl'
  fontWeight='extrabold'
>
  Welcome to Mulem
</Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
           For people who want to prepare themselves for personal interviews.
          </Text>
          <Stack direction={'row'}>
            <Button
            onClick={() => {
              navigate('/signin');
            }}
              bg={'green.600'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'gray.500' }}>
              SignIn
            </Button>
            <Button onClick={() => {
          navigate('/signup');
        }}
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
              >
              SignUp
            </Button>
          </Stack>
        </Stack>
      </VStack>
 
    </Flex>
    <Footer/>
    </>
  );
}