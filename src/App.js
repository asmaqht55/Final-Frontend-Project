import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import Home from './Home';
import SmallWithSocial from './component/Footer';
import SignUp from './pages/SignUp';
import SginIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Hr from './pages/Hr';
import Navbar from './component/Navbar'
import UserDetails from './pages/UserDetails';
import UserOrder from './pages/CreateOrder';
import HrProfile from './pages/HrProfile';
import Index from './pages/Index';
import Order from './pages/Order';
import CreateOrder from './pages/CreateOrder';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      {/* <Index/> */}
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SginIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          <Route path="/hr" element={<Hr />} />
          <Route path="/hrp" element={<HrProfile />} />
          <Route path="/userd" element={<UserDetails />} />
          <Route path="/create" element={<CreateOrder />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<NotFound />} />



        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
