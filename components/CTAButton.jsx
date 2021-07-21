import { Box, Button, Heading, Text, useColorModeValue, useDisclosure, SimpleGrid, Link } from '@chakra-ui/react'
import * as React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

function CTAButton(){
    const { isOpen, onOpen, onClose } = useDisclosure()
  return(
        <>
        <Button
            textTransform="uppercase"
            mt="8"
            size="lg"
            fontSize="25"
            fontWeight="bold"
            bg={'gray.400'}
            p="10"
            rounded="10"
            onClick={onOpen}
             >
            Start Your Journey
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
        <ModalHeader color={useColorModeValue("gray.700", "gray.100")}>DISCLAIMER</ModalHeader>
          <ModalCloseButton color="gray.500"/>
          <ModalBody>
            <Text color={useColorModeValue("gray.700", "gray.100")} fontSize="20" fontWeight="medium">You are not logged in. You can create a character without logging in but must sign up or login at the end to save them.</Text>
          </ModalBody>
          <ModalFooter>
          <SimpleGrid mt="6" columns={2} spacing="3" mx="auto">
            <Button bg={'gray.400'} textTransform="uppercase">Create Account</Button>
            <Button as="a" cursor="pointer" href="/create" bg={'gray.400'} textTransform="uppercase">Continue</Button>
          </SimpleGrid>
            </ModalFooter>
            <ModalFooter>
            <Text color={useColorModeValue("gray.700", "gray.100")} fontSize="sm" as="span"><Link>Already have an account?</Link></Text>

            </ModalFooter>
      </ModalContent>
    </Modal>
          </>
  )
}

export default CTAButton