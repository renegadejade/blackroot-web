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
    Divider,
    Input,
    Center,
    NumberInputField,
    NumberInput,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
  } from '@chakra-ui/react'
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
  import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"
  import { Stack, HStack, VStack } from "@chakra-ui/react"
  import { useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Stat } from './Stat'
import { StatLabel } from './StatLabel'
import { StatNumber } from './StatNumber'
import { MdRadioButtonUnchecked, MdRadioButtonChecked} from 'react-icons/md'

function AttributesSkills() {
    


    return (

<Box as="section">
    <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <HStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6" maxW="75%">
        {data.map(({ label, value, secondary }) => (
          <Stat bg="gray.100" key={label}>
            <HStack>
            <StatLabel>{label}</StatLabel>
            <Text>{value}</Text>
            </HStack>
            <HStack>
            <Text>TN</Text>
            <StatNumber>{20-value}</StatNumber>
            
            </HStack>
            <HStack>
            <StatLabel>{secondary}</StatLabel>
            <Text>20</Text>
            </HStack>
          </Stat>
        ))}
        
        <VStack align="left" mx="3"  colorScheme="brand">
        
        <HStack colorScheme="brand">
             
        <Badge bg="brand.50" ml="-1">FAV</Badge>
          
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Awe</Badge>
              
              <Spacer/>
              
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
           
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Athletics</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Awareness</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Hunting</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Song</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Craft</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
         
          <Text>Combat Proficiencies</Text>
      <HStack colorScheme="brand">
      
      
            
      <Badge as="button" minW="70">Axes</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
        
          </HStack>
          <HStack colorScheme="brand">
      
      
            
          <Badge as="button" minW="70">Bows</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
        
          </HStack>
          <HStack colorScheme="brand">
      
      
            
          <Badge as="button" minW="70">Spears</Badge>
      <Spacer/>
      <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>

  </HStack>
  <HStack colorScheme="brand">
      
      
            
  <Badge as="button" minW="70">Swords</Badge>
      <Spacer/>
      <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>

  </HStack>
      </VStack>
      <VStack  align="left" mx="3" colorScheme="brand">
      <HStack colorScheme="brand">
             
      <Badge bg="brand.50" ml="-1">FAV</Badge>
         
         </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Enhearten</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Travel</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Insight</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Healing</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Courtesy</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Battle</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
      </VStack>
      <VStack align="left" mx="3"  colorScheme="brand">
      <HStack colorScheme="brand">
      <Badge bg="brand.50" ml="-1">FAV</Badge>
         
         </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Persuade</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Stealth</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Scan</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Explore</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Riddle</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          <HStack colorScheme="brand">
              <Checkbox colorScheme="brand" bg="brand.500"/>
              <Badge as="button" minW="70">Lore</Badge>
              <Spacer/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
              <MdRadioButtonUnchecked/>
          </HStack>
          
      </VStack>
      
      </SimpleGrid>
      <Box rounded="10" bg="brand.800" width="25%" minH="100%" p="10">
          <VStack width="100%" minH="100%" align="left">
              <HStack>
              <Text color="gray.100">Current Endurance</Text>
              <Spacer/>
              <NumberInput size="md" maxW={24}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
              </HStack>
            
              <HStack>
              <Text color="gray.100">Current Hope</Text>
              <Spacer/>
              <NumberInput size="md" maxW={24}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
              </HStack>
              <HStack>
              <Text color="gray.100">Shadow</Text>
              <Spacer/>
              <NumberInput size="md" maxW={24}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
              </HStack>
              <HStack>
              <Text color="gray.100">Shadow Scars</Text>
              <Spacer/>
              <NumberInput size="md" maxW={24}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
              </HStack>
              <HStack>
              <Text color="gray.100">Total Shadow</Text>
              <Spacer/>
              <Badge rounded="md" bg="brand.100" px="2" fontSize="xl">8</Badge>
              <Spacer/>
              </HStack>
              <Divider/>
      <Text color="gray.100" fontSize="xl">Conditions</Text>
      <HStack colorScheme="brand"  ><Checkbox bg="brand.500"/><Text color="gray.100">Weary</Text></HStack>
      <HStack colorScheme="brand"><Checkbox bg="brand.500"/><Text color="gray.100">Miserable</Text></HStack>
      <HStack colorScheme="brand"><Checkbox bg="brand.500"/><Text color="gray.100">Wounded</Text></HStack>
      <Input placeholder="Injury"></Input>
      
      </VStack>
      </Box>
      
      
      </HStack>
      
     
      
    </Box>
  </Box>
    )
        }
export default AttributesSkills