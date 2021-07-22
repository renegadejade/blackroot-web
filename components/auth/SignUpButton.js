import * as React from 'react'
import { Button, useDisclosure, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { CreateAccount } from './CreateAccount'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"

function SignUpButton(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            textTransform={'uppercase'}
            color={useColorModeValue('blackroot.ivory', 'black')}
            bg={useColorModeValue('blackroot.red-dark', 'sauron.red')}
            href={'#'}
            onClick={onOpen}
            _hover={{
              bg: 'blackroot.ivory',
            }}>
            Sign Up
        </Button>

<Modal id="signup" isOpen={isOpen} onClose={onClose} >
<ModalOverlay/>
<ModalContent bg={useColorModeValue("blackroot.light", "sauron.medium")} >
  <ModalCloseButton color={useColorModeValue("black", "black")}/>
  <ModalBody >
    <CreateAccount />
  </ModalBody>
</ModalContent>
</Modal>
</>
    )
}
export default SignUpButton