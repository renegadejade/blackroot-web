import * as React from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'
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
            color={'gray.800'}
            bg={'gray.400'}
            href={'#'}
            onClick={onOpen}
            _hover={{
              bg: 'gray.100',
            }}>
            Sign Up
        </Button>

<Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay/>
<ModalContent>
  <ModalCloseButton color="gray.500"/>
  <ModalBody>
    <CreateAccount/>
  </ModalBody>
</ModalContent>
</Modal>
</>
    )
}
export default SignUpButton