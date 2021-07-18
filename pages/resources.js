import {
    SimpleGrid,
    Flex,
    Container,
  } from '@chakra-ui/react'
  import { Footer } from '../components/footer/Footer'
  // import { Header } from '../components/Header'
  import { ToolCard } from '../components/ToolCard'
  import Navbar from '../components/core/Navbar.tsx'
  
  function Resources() {
    return (
      <Flex bg="brand.50" direction="column" height="100vh" >
        <Navbar></Navbar>
        
        <Container maxW="container.md">
          <SimpleGrid minChildWidth="340px" spacing="40px" marginTop="40px">
            <ToolCard
              name="Narvi"
              description="A Discord bot that integrates with Tengwar Tools"
              link="https://bitbucket.org/HawthornThistleberry/narvi/src/master/"
              external= {true}
            />
            <ToolCard
              name="The One Ring Discord"
              description="Get support for Tengwar Tools"
              link="https://discord.me/theonering"
              external= {true}
            />
          </SimpleGrid>
          </Container>
        <Footer />
      </Flex>
    )
  }
  
  export default Resources
  