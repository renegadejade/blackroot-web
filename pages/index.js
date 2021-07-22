import { Flex, useColorModeValue} from '@chakra-ui/react'
import Navbar from '../components/core/Navbar'
import { Footer } from '../components/footer/Footer'
import MainCTA from '../components/MainCTA'

function Home() {
  
  return (
    <Flex bgColor={useColorModeValue("blackroot.ivory","sauron.dark")} direction="column" minH="100vh">
      <Navbar/>
      <MainCTA/>
      <Footer/>
    </Flex>
  )
}

export default Home
