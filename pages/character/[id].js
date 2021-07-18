import {
    SimpleGrid,
    Flex,
    Container,
    Box,
    IconButton,
    EditIcon,
    CheckIcon,
    Heading,
    Text,
    Checkbox,
    CheckboxGroup,
    Spacer,
    Grid,
    Badge,
    Center
  } from '@chakra-ui/react'
  import { Footer } from '../../components/footer/Footer'
  import { ToolCard } from '../../components/ToolCard'
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
  import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"
  import { Stack, HStack, VStack } from "@chakra-ui/react"
  import { useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Stat } from '../../components/Stat'
import { StatLabel } from '../../components/StatLabel'
import { StatNumber } from '../../components/StatNumber'
import AttributesSkills from '../../components/AttributesSkills'
import Navbar from '../../components/core/Navbar.tsx'
import { useRouter } from 'next/router'
  
  function Character(props) {
    
    const router = useRouter()
    const { id } = router.query

    return (
      <Text>{id}</Text>
//       <Flex bg="brand.50" direction="column" height="100%" >
//         <Navbar />
//         <Container maxW="container.xl">
//         <Flex colorScheme="brand" mt="10">
//         <Heading fontFamily="MedievalSharp" pr="2">Aragorn</Heading>
        
//         <Text mr="16" mt="4">87 years old</Text>
//         <Center>
//         <Text color="gray.800" size="sm" mr="1">
//                 Valour
//             </Text>
            
//             <Badge bg="brand.900" fontSize="xl" color="gray.100" size="sm" px="3" rounded="25%" mr="3">
//                 1
//             </Badge>
            
//         <Text color="gray.800" size="sm" mr="1">
//                 Wisdom
//             </Text>
            
//             <Badge bg="brand.900" fontSize="xl" color="gray.100" size="sm" px="3" rounded="25%">
//                 1
//             </Badge>
//             </Center>
        
//         </Flex>
//         <Box colorScheme="brand" mt="5">
//             <HStack spacing="16">
//         <VStack >
//             <Text color="gray.800" size="sm">
//                 Heroic Culture
//             </Text>
            
//             <Badge fontSize="sm" as="button" rounded="lg" p="2" bg="brand.700" color="brand.50">Rangers of the North</Badge>
//         </VStack>
//         <VStack>
//             <Text color="gray.800" size="sm">
//                 Cultural Blessing
//             </Text>
            
//             <Badge fontSize="sm" as="button" rounded="lg" p="2" bg="brand.700" color="brand.50">Kings of Men</Badge>
//         </VStack>
//         <VStack >
//             <Text color="gray.800" size="sm">
//                 Calling
//             </Text>
            
//             <Badge fontSize="sm" as="button" rounded="lg" p="2" bg="brand.700" color="brand.50">Warden</Badge>
//         </VStack>
//         <VStack >
//             <Text color="gray.800" size="sm">
//                 Shadow Path
//             </Text>
            
//             <Badge fontSize="sm" as="button" rounded="lg" p="2" bg="brand.700" color="brand.50">Path of Despair</Badge>
//             </VStack>
//             <VStack >
//             <Text color="gray.800" size="sm">
//                 Standard of Living
//             </Text>
            
//             <Badge fontSize="sm" as="button" rounded="lg" p="2" bg="brand.700" color="brand.50">Frugal</Badge>
//             </VStack>
//         </HStack>
        
//         </Box>
        
//         <Tabs colorScheme="brand" isFitted mt="10">
//   <TabList>
//     <Tab>Atrributes & Skills</Tab>
//     <Tab>War Gear & Items</Tab>
//     <Tab>Conditions & XP</Tab>
//     <Tab>Notes</Tab>
//   </TabList>

//   <TabPanels>
//     <TabPanel>
//     <AttributesSkills />
//     </TabPanel>
//     <TabPanel>
//       <p>two!</p>
//     </TabPanel>
//     <TabPanel>
//       <p>three!</p>
//     </TabPanel>
//     <TabPanel>
//         <p>An taima palis tehto hap. Úil telco nalanta or, oia oaris cotumo elendë ëa, lá vírë tulca timpinen tul. Ar nur onótima taniquelassë. Yá axo ataquë mirilya tanwëataquë, ep nún tasar racinë, varta tasar é mat. Up lívë inqua nal, tyávë amanyar goneheca lis lá.</p>
//         <p>Rambë artaquetta né erë. Nu cemna foina caw, lápa nainië mittanya iel cé. As pio yára liquis. Má yulmë rambë ríc.</p>
//         <p>Sín tó talta hwarma, laira nostalë mel us. Viltë tasar lindë her sú, ainu tussa amilessë aha ep, sir et yúyo hecil nahamna. Nú centa pereldar lav. Et halda hesta nót. Cemna cotumo tol er, engë alatúvëaúra tuo ar, men rauko melissë mí.</p>
//     </TabPanel>
//   </TabPanels>
// </Tabs>
//           </Container>
//         <Footer />
//       </Flex>
    )
  }
  
  export default Character
  