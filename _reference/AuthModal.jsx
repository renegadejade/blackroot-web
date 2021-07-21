import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image
  } from '@chakra-ui/react'
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
  import * as React from 'react'
  import { FaFacebook, FaGithub, FaGoogle, FaApple } from 'react-icons/fa'
  import { Card } from './Card'
  import { DividerWithText } from './DividerWithText'
  import { Link } from './Link'
  import { CreateAccountForm } from './CreateAccountForm'
  import { Logo } from './Logo'
  
  export const AuthModal = () => (
   
          
    <Box
      bg={useColorModeValue('white', 'inherit')}
      
      py="12"
      px={{
        base: '4',
        lg: '8',
      }}
    >
      <Box maxW="md" mx="auto">
          <Image  size="2xl" src="/images/tengwar-dark-large.png"/>
        {/* <Logo
          mx="auto"
          h="8"
          mb={{
            base: '10',
            md: '20',
          }}
        /> */}
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Create Account
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Already have an account?</Text>
          <Link href="#">Login here</Link>
        </Text>
        <Card>
        <CreateAccountForm />
         
          <DividerWithText mt="6">or continue with</DividerWithText>
          <SimpleGrid mt="6" columns={2} spacing="3">
            {/* <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Facebook</VisuallyHidden>
              <FaFacebook />
            </Button> */}
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <FaGoogle />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Apple</VisuallyHidden>
              <FaApple />
            </Button>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
    
  )