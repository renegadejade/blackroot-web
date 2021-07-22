import { Button, Form, chakra, FormControl, FormLabel, Input, Stack, Link, Text, InputGroup, InputRightElement, useColorModeValue} from '@chakra-ui/react'
// import { useForm } from "react-hook-form";
import * as React from 'react'
import initAuth from '../../lib/initAuth'
import firebase from 'firebase/app'
import 'firebase/auth'

initAuth()

function LoginForm(){

    // const {
    //   handleSubmit,
    //   register,
    //   formState: { errors, isSubmitting }
    // } = useForm();

    // function onSubmit(values) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //       resolve();
    //     }, 3000);
    //   });
    // }
  




  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // async function handleSubmit(){
  //   console.log("Submit clicked")
  //   // // e.preventDefault()
  //   // await firebase.auth().createUserWithEmailAndPassword(email, password);
  //   // window.location.href = '/';
  // }

  return(
  <Form >
    <Stack spacing="5">
      <FormControl>
        <Input
          placeholder="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          bg={useColorModeValue("blackroot.white", "sauron.white")}
          textColor={useColorModeValue("blackroot.dark", "sauron.dark")}
          
          />

      </FormControl>
      {/* <FormControl id="password" isRequired>
        <Input
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          bg={useColorModeValue("blackroot.white", "sauron.white")}
          textColor={useColorModeValue("blackroot.dark", "sauron.dark")}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
    </FormControl> */}
      <Button
        // isLoading={isSubmitting}
        type="submit"
        color={useColorModeValue("blackroot.white", "sauron.white")}
        bg={useColorModeValue("blackroot.red", "sauron.dark")}
        size="lg"
        fontSize="md" as="h4"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        Create Account
      </Button>
    </Stack>
  </Form>
)}
export default LoginForm