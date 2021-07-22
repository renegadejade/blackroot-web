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

function CTAButton(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
  return(
        <>
        <Button
            textTransform="uppercase"
            mt="8"
            size="lg"
            fontSize="25"
            fontWeight="bold"
            bg={useColorModeValue("blackroot.red", "sauron.red")}
            color={useColorModeValue("blackroot.white", "black")}
            p="10"
            rounded="10"
            onClick={onOpen}
             >
            {props.text}
          </Button>

          <Modal id="disclaimer" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent bg={useColorModeValue("blackroot.light", "sauron.medium")}>
        <ModalHeader color={useColorModeValue("blackroot.dark", "sauron.white")}>DISCLAIMER</ModalHeader>
          <ModalCloseButton color="black"/>
          <ModalBody>
            <Text color={useColorModeValue("blackroot.dark", "sauron.white")} fontSize="20" fontWeight="medium">You are not logged in. You can create a character without logging in but must sign up or login at the end to save them.</Text>
          </ModalBody>
          <ModalFooter>
          <SimpleGrid mt="6" columns={2} spacing="3" mx="auto">
            <Button bg={useColorModeValue("blackroot.red-dark","sauron.dark")} color={useColorModeValue("blackroot.light","sauron.white")} textTransform="uppercase">Create Account</Button>
            <Button as="a" cursor="pointer" href="/create" bg={useColorModeValue("blackroot.red-dark","sauron.dark")} color={useColorModeValue("blackroot.light","sauron.white")} textTransform="uppercase">Continue</Button>
          </SimpleGrid>
            </ModalFooter>
            <ModalFooter>
            <Text color={useColorModeValue("blackroot.dark", "sauron.white")} fontSize="sm" as="span"><Link>Already have an account?</Link></Text>

            </ModalFooter>
      </ModalContent>
    </Modal>
          </>
  )
}

export default CTAButton