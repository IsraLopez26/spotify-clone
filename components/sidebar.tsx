import NextImage from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/layout'

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from 'react-icons/md'

const navMenu = [
  {
    label: 'Home',
    icon: MdHome,
    route: '/'
  },
  {
    label: 'Search',
    icon: MdSearch,
    route: '/search'
  },
  {
    label: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library'
  }
];

const musicMenu = [
  {
    label: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/'
  },
  {
    label: 'Favorites',
    icon: MdFavorite,
    route: '/favorites'
  }
];

const myPlayList = new Array(30).fill(1).map((el,i)=>`Playlist ${i+1}`)

const Sidebar = ()=>{
  return (
    <Box
      width='100%' 
      height='calc(100vh - 100px)' 
      bg='black' 
      paddingX='5px' 
      color='gray'
    >
      <Box paddingY='20px' height='100%'>
        <Box width='120px' marginBottom='20px' paddingX='20px'>
          <NextImage src='/logo.svg' height={60} width={120}/>
        </Box>
        <Box marginBottom='20px'>
          <List spacing={2}>
            {navMenu.map((item)=>{
              return(
                <ListItem paddingX='20px' fontSize='18px' key={item.label}>
                  <LinkBox>
                    <NextLink href={item.route} passHref>
                      <LinkOverlay>
                        <ListIcon as={item.icon} color='white' marginRight='20px'/>
                        {item.label}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box marginY='20px'>
          <List spacing={2}>
            {musicMenu.map((item)=>{
              return(
                <ListItem paddingX='20px' fontSize='18px' key={item.label}>
                  <LinkBox>
                    <NextLink href={item.route} passHref>
                      <LinkOverlay>
                        <ListIcon as={item.icon} color='white' marginRight='20px'/>
                        {item.label}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Divider color='gray.800'/>
        <Box height='69%' overflowY='auto' paddingY='20px'>
          <List spacing={2}>
            {myPlayList.map((item)=>{
              return(
                <ListItem paddingX='20px' fontSize='18px' key={item}>
                  <LinkBox>
                  <NextLink href='/'>
                      <LinkOverlay>
                        {item}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar;