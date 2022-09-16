import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import UserOrder from './pages/UserOrder';
import HrOrder from './pages/HrOrder';



function App(){


  return (
  
  <ChakraProvider>
  <BrowserRouter>
  <HrOrder />
  <UserOrder/>
  </BrowserRouter>
  </ChakraProvider>
  


  );
}
export default App;


