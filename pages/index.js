import { Flex, useColorModeValue} from '@chakra-ui/react'
import Navbar from '../components/core/Navbar'
import { Footer } from '../components/footer/Footer'
import MainCTA from '../components/MainCTA'
import MainArticles from '../components/MainArticles'

function Home() {
  
  return (
    <Flex bgColor={useColorModeValue("blackroot.ivory","sauron.dark")} direction="column" minH="100vh">
      <Navbar/>
      <MainCTA/>
      <MainArticles/>
      <Footer/>
    </Flex>
  )
}

export default Home
