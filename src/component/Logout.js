import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
    const navigate=useNavigate();
const logout =async () => {
    
const request=await fetch('/api/v1/auth/logout');
console.log('request','request')
if (request.status===204){
    localStorage.removeItem('loggedIn');
    navigate('/');
}


};
return (
    // <Button onClick={logout}>
    //     Logout

    //     </Button>

<Button onClick={logout}
      display={{ base: 'none', md: 'inline-flex' }}
      fontSize={'sm'}
      fontWeight={600}
      color={'white'}
      bg={'red'}
      href={'#'}
      _hover={{
        bg: 'gray.300',
      }}>
      Log Out
    </Button>
  )
}
