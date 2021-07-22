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
import { CreateAccount } from '../components/auth/CreateAccount'
import CTAButton from './CTAButton'

function MainCTA(){
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <>
      <Box as="section">
        <Box
          maxW="2xl"
          mx="auto"
          px={{
            base: '6',
            lg: '8',
          }}
          py={{
            base: '16',
            sm: '20',
          }}
          textAlign="center"
        >
          <Heading
              color={useColorModeValue("blackroot.red", "sauron.white")}
              as="h2"
              size="2xl"
              fontWeight="extrabold"
              letterSpacing="tight"
              textTransform="uppercase">
              The Road Goes Ever On
          </Heading>
          <Text color={useColorModeValue("blackroot.red", "sauron.white")} mt="4" fontSize="lg" fontWeight="bold">
            Create your first THE ONE RING™ hero.
          </Text>
          <CTAButton text="Start Your Adventure"/>
          <Text mt="4"  fontWeight="semibold" color={useColorModeValue("blackroot.red", "sauron.white")}>Nasty disturbing uncomfortable things! Make you late for dinner!</Text>
          <Text mt="1"  fontWeight="semibold" color={useColorModeValue("blackroot.red", "sauron.white")}>-Bilbo, to Gandalf (J.R.R. Tolkien)</Text>

          {/* <Button
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
          </Button> */}
        </Box>
      </Box>
      
      {/* <Modal coloreScheme="blue"isOpen={isOpen} onClose={onClose}>
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
    </Modal> */}
  </>
)}

export default MainCTA