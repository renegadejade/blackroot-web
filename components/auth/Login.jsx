import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGoogle, FaApple } from 'react-icons/fa'
import { Card } from './Card'
import { DividerWithText } from './DividerWithText'
import { Link } from './Link'
import { LoginForm } from './LoginForm'
import { Logo } from './Logo'

export const Login = () => (
  <Box
    bg={useColorModeValue('inherit', 'inherit')}
    py="6"
    px={{
      base: '4',
      lg: '8',
    }}
  >
    <Box maxW="md" mx="auto">
      <Logo
        mx="auto"
        h="8"
        mb={{
          base: '5',
          md: '10',
        }}
      />
      
      
      <Card>
        <LoginForm buttontext="Continue Your Journey"/>
        <DividerWithText mt="6">or continue with</DividerWithText>
        <SimpleGrid mt="6" columns={2} spacing="3">
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Google</VisuallyHidden>
            <FaGoogle />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Apple</VisuallyHidden>
            <FaApple />
          </Button>
        </SimpleGrid>
        
        <Text mt="4" mb="2" align="center" maxW="md" fontWeight="medium">
        <Text fontSize="sm" as="span"> <Link>Forget password?</Link></Text>
      </Text>
      <Text mt="4" mb="2" align="center" maxW="md" fontWeight="medium">
        <Text fontSize="sm" as="span">Need an account? <Link>Sign Up</Link></Text>
      </Text>
      </Card>
    </Box>
  </Box>
)
