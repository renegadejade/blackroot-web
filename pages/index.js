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
import { ToolCard } from '../components/ToolCard'
import Changelog from '../components/core/changelog'
import Navbar from '../components/core/Navbar'
// import { Header } from 'next/dist/lib/load-custom-routes'
import { Footer } from '../components/footer/Footer'

function Home() {
  // const [ session, loading ] = useSession()
  return (
    <Flex direction="column" minH="100vh">
      <Navbar/>
      <Container maxW="container.md" mx="auto">
        <SimpleGrid columns={[1, null, 2]} spacing="20px">
          <ToolCard
            name="Character Creator"
            description="Create a new Player-hero"
            link="/characters/forge"
          />
          <ToolCard
            name="Character Vault"
            description="Manage your Player-heroes"
            link="/characters"
          />
        </SimpleGrid>
       <Changelog/>
        </Container>
      <Footer />
    </Flex>
  )
}

export default Home
