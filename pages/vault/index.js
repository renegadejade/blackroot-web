import {
    SimpleGrid,
    Flex,
    Container,
    useColorModeValue,
    VStack,
    Center,
    Heading,
    Link
  } from '@chakra-ui/react'
  // import Footer from '../components/core/Footer'
  import { ToolCard } from '../../components/GetStarted'
  import Changelog from '../../components/core/changelog'
  import Navbar from '../../components/core/Navbar'
  import { Header } from 'next/dist/lib/load-custom-routes'
  import { Footer } from '../../components/footer/Footer'
  import { CharacterCard } from '../../components/vault/CharacterCard'
  
  function Vault() {
    
    return (
      <Flex direction="column" minH="100vh">
        <Navbar/>
        <Container maxW="container.lg">
            <Heading>Character Vault</Heading>
        </Container>
        <Container maxW="container.lg" mx="auto">
         
          <SimpleGrid columns={[1, null, 3]} spacing="20px">
          <CharacterCard
              name="Aragorn"
              culture="Rangers of the North"
              calling="Warden"
              link="/user/zensomancer/character/1"
              valour="5"
              wisdom="5"
              
            />
            <CharacterCard
              name="Aragorn"
              culture="Rangers of the North"
              calling="Warden"
              link="/user/zensomancer/character/1"
              valour="5"
              wisdom="5"
              
            />
            <CharacterCard
              name="Aragorn"
              culture="Rangers of the North"
              calling="Warden"
              link="/user/zensomancer/character/1"
              valour="5"
              wisdom="5"
              
            />
            <CharacterCard
              name="Aragorn"
              culture="Rangers of the North"
              calling="Warden"
              link="/user/zensomancer/character/1"
              valour="5"
              wisdom="5"
              
            />
          </SimpleGrid>
          </Container>
        <Footer />
      </Flex>
    )
  }
  
  export default Vault
  