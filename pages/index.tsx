import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import {Box, Flex, Text} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const Home =({artists}) =>{
  return (
   <GradientLayout color='green' subtitle='profile' title='Isra Lopez' description='15 public playlists' image='/isra.jpeg' roundImage>
    <Box color='white' paddingX='40px'>
      <Box marginBottom='40px'>
        <Text fontSize='2xl' fontWeight='bold'>Top artist this month</Text>
        <Text color='gray.400' fontSize='small' fontWeight='bold'>only visible to you</Text>
      </Box>
      <Flex>
        {artists.map((artist)=>{
          return(
            <Box paddingX='10px' width='16%'>
              <Box bg='gray.900' borderRadius='10px' padding='15px' width='100%'>
                <Flex justify='center'>
                  <Image src='https://placekitten.com/300/300' borderRadius='100%' width='85%'/>
                </Flex>
                <Box marginTop='20px'>
                  <Text fontSize='large' fontWeight='bold'>{artist.name}</Text>
                  <Text fontSize='x-small' color='gray.500' fontWeight='bold'>Artist</Text>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Flex>
    </Box>
   </GradientLayout>
  )
}

export const getServerSideProps = async () =>{
  const artists = await prisma.artist.findMany({});
  return {
    props: {artists}
  }
}

export default Home;