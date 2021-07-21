import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'

export const CreateAccountForm = (props: HTMLChakraProps<'form'>) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault()
      // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        {/* <FormLabel>Email</FormLabel> */}
        <Input placeholder="Email" name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Create Account
      </Button>
    </Stack>
  </chakra.form>
)
