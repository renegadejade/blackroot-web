import { Button, Form, chakra, FormControl, FormLabel, Input, Stack, Link, Text, InputGroup, InputRightElement} from '@chakra-ui/react'
import * as React from 'react'
import initAuth from '../../lib/initAuth'
import firebase from 'firebase/app'
import 'firebase/auth'

initAuth()

function LoginForm(props){
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(){
    console.log("Submit clicked")
    // // e.preventDefault()
    // await firebase.auth().createUserWithEmailAndPassword(email, password);
    // window.location.href = '/';
  }

  return(
  <chakra.form onSubmit={handleSubmit()}>
    <Stack spacing="5">
      <FormControl id="email" isRequired>
        <Input
          placeholder="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          />
      </FormControl>
      <FormControl id="password" isRequired>
        <Input
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
    </FormControl>
      <Button
        type="submit"
        colorScheme="gray"
        size="lg"
        fontSize="md" as="h4"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        {props.buttontext}
      </Button>
    </Stack>
  </chakra.form>
)}

export default LoginForm
