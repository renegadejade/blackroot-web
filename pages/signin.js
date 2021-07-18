import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import * as React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Card } from '../components/auth/Card'
import { DividerWithText } from '../components/auth/DividerWithText'
import { Link } from '../components/auth/Link'
import { LoginForm } from '../components/auth/CreateAccountForm'
import { Logo } from '../components/auth/Logo'
import { useDisclosure } from "@chakra-ui/react"
import { AuthModal } from '../components/auth/AuthModal'

function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <Box>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <AuthModal/>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
  </Box>
  )
}

export default SignIn
