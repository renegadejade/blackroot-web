import {
    SimpleGrid,
    Flex,
    Container,
    useColorModeValue,
    VStack,
    Center,
    Heading,
    Link,
    Text
  } from '@chakra-ui/react'

function Changelog(){
    return(
    <VStack pt="5">
    <Container>
      <Heading>Changelog</Heading>
      <Text fontSize="lg">v0.1</Text>
      <Text fontSize="lg">Stuff</Text>
    </Container>
  </VStack>
    )
}

export default Changelog