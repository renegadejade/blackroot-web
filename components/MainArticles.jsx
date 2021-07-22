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
import ArticleCard from './ArticleCard'

function MainArticles(){
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
   // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
// will have the same effect.
<Box as="section">
 
<Box
          maxW="7xl"
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
         
<SimpleGrid columns={[1, 2, 3]} spacing="40px">
  <ArticleCard/>
  <ArticleCard/>
  <ArticleCard/>
  <ArticleCard/>
  <ArticleCard/>
  <ArticleCard/>
</SimpleGrid>
<Button bg="blackroot.red" color="blackroot.white" mt="10">MORE</Button>
</Box>
</Box>
)}

export default MainArticles