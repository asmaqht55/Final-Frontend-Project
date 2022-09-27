import { Box, SimpleGrid, Icon, Text, Stack, Flex, Center } from '@chakra-ui/react';
import { FcDonate, FcInTransit } from 'react-icons/fc';
import {StarIcon} from '@chakra-ui/icons'



const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex 
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} textAlign='center'  border='1px' borderColor='blue.200' justifyContent={'center'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} >
        <Feature 
          icon={<Icon as={StarIcon} w={10} h={10} />}
          title={'About'}
          text={
            'A website that brings HR experts together with people who want to prepare themselves for personal interviews.'
          }
        />
        <Feature
          icon={<Icon as={StarIcon} w={10} h={10} justifyContent={'center'} textAlign='center' />}
          title={'Services'}
          text={
            ' virtual meetings available for experimental interviews and giving advice on CV.'
          }
        />
        <Feature
          icon={<Icon as={StarIcon} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}