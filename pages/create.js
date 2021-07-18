import {
    Link as ChakraLink,
    Text,
    Code,
    List,
    ListIcon,
    ListItem,
    Box,
    Heading,
    Badge,
    StarIcon,
    LinkBox,
    LinkOverlay,
    ArrowForwardIcon,
    Input,
    Select,
    VStack,
    Stack,
    Flex,
    Container,
    Button,
    Spacer
  } from '@chakra-ui/react'
// import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Forge1 from '../components/forge/Forge1'
import Forge2 from '../components/forge/Forge2'
import Forge3 from '../components/forge/Forge3'
import Forge4 from '../components/forge/Forge4'
import Forge5 from '../components/forge/Forge5'
// import { DarkModeSwitch } from '../components/DarkModeSwitch'
// import { Header } from '../../components/Header'
// import { Main } from '../../components/Main'
import { Footer } from '../components/footer/Footer'
import { Step, Steps, useSteps } from 'chakra-ui-steps';
// import { LoremIpsum } from "react-lorem-ipsum"
import Navbar from '../components/core/Navbar.tsx'

const step1 = (
  <Flex py="2">
    <Forge1/>
  </Flex>
);

const step2 = (
  <Flex py="2">
    <Forge2 />
  </Flex>
);
const step3 = (
  <Flex py="2">
    <Forge3 />
  </Flex>
);
const step4 = (
  <Flex py="2">
    <Forge4 />
  </Flex>
);
const step5 = (
  <Flex py="2">
    <Forge5 />
  </Flex>
);
const steps = [
  { label: 'Heroic Culture', content: step1 },
  { label: 'Calling', content: step2 },
  { label: 'Previous Experience', content: step3 },
  { label: 'Equipment', content: step4 },
  { label: 'Rewards & Virtues', content: step5 }
];


function Build() {

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const createCharacter = async event => {
    event.preventDefault()
  

    const res = await fetch(
      'http://localhost:3000/api/character/',
      {
        body: JSON.stringify({
          name: "Bilbo2"
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      }
    )
    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return(

    
    <Flex bg="brand.50" direction="column" height="100%">
      <Button size="2xl" onClick={createCharacter}>CREATE TEST</Button>
     <Navbar></Navbar>
      <Container width="100%" mt="5">
      <Steps bg="brand.900" p="5" rounded="10" colorScheme="brand"  activeStep={activeStep}>
      {steps.map(({ label, content }) => (
          <Step key={label}>
            {content}
          </Step>))}
      </Steps>
    
      <Flex  px="4">
      <Button bg="brand.900" minW="130" size="lg" colorScheme="brand" onClick={prevStep}>BACK</Button>
        <Spacer/>
      <Button bg="brand.900"minW="130" size="lg" colorScheme="brand" onClick={nextStep}>NEXT</Button>
      </Flex>
      </Container>
     

    
     
      <Footer />
    </Flex>
  )
}
  
export default Build
  