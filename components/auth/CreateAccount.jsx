import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Center
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGoogle, FaApple, FaGithub } from 'react-icons/fa'
import { Card } from './Card'
import { DividerWithText } from './DividerWithText'
import { Link } from './Link'
import LoginForm from './LoginForm'
import { Logo } from './Logo'

export const CreateAccount = () => (
  <Box
    bg={useColorModeValue('inherit', 'inherit')}
    py="4"
    px={{
      base: '2',
      lg: '4',
    }}
  >
    <Box color={useColorModeValue('gray.600', 'black')} maxW="md" mx="auto">
      <Center>
      <Image maxH="100" my="2" src="./images/logo_stone_dark.svg" />
      </Center>
   
      <Heading color={useColorModeValue("gray.400", "black")} my="3" align="center" fontSize="xl" textTransform="uppercase">Welcome to Blackroot</Heading>
 
        <LoginForm buttontext="Create Account"/>
        <DividerWithText mt="6">or continue with</DividerWithText>
        <SimpleGrid mt="6" columns={3} spacing="3">
          <Button color={useColorModeValue("gray.400", "sauron.white")} bg={useColorModeValue("gray.400", "sauron.dark")} variant="outline">
            <VisuallyHidden>Login with Google</VisuallyHidden>
            <FaGoogle />
          </Button>
          <Button color={useColorModeValue("gray.400", "sauron.white")} bg={useColorModeValue("gray.400", "sauron.dark")} variant="outline">
            <VisuallyHidden>Login with Apple</VisuallyHidden>
            <FaApple />
          </Button>
          <Button color={useColorModeValue("gray.400", "sauron.white")} bg={useColorModeValue("gray.400", "sauron.dark")} variant="outline">
            <VisuallyHidden>Login with Github</VisuallyHidden>
            <FaGithub />
          </Button>
          
        </SimpleGrid>
        <Text mt="4" mb="2" align="center" maxW="md" fontWeight="medium">
        <Text fontSize="sm" as="span"><Link color={useColorModeValue("gray.400", "sauron.black")} >Already have an account?</Link></Text>
      </Text>
      
    </Box>
  </Box>
)
