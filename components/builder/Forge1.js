import { Button, chakra, FormControl, FormLabel, Input, Stack, Select, Heading, Container, Text, Flex, Spacer, RadioGroup, Radio, HStack, Divider } from '@chakra-ui/react'
import { Rangers } from "./Rangers"
import { ElvesLindon } from "./ElvesLindon"
import React, { useState } from 'react';
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import { Step, Steps, useSteps } from "chakra-ui-steps"

const distinctiveFeatures = [
  {
    label: "Bold",
    value: "bold"
  },
  {
    label: "Cunning",
    value: "cunning"
  },
  {
    label: "Eager",
    value: "eager"
  },
  {
    label: "Faithful",
    value: "faithful"
  },
  {
    label: "Fair-Spoken",
    value: "fairspoken"
  },
  {
    label: "Fierce",
    value: "fierce"
  },
  {
    label: "Generous",
    value: "generous"
  },
  {
    label: "Honourable",
    value: "honourable"
  },
  {
    label: "Inquisitive",
    value: "inquisitive"
  },
  {
    label: "Keen-Eyed",
    value: "keeneyed"
  },
  {
    label: "Lordly",
    value: "lordly"
  },
  {
    label: "Merry",
    value: "merry"
  },
  {
    label: "Patient",
    value: "patient"
  },
  {
    label: "Proud",
    value: "proud"
  },
  {
    label: "Rustic",
    value: "rustic"
  },
  {
    label: "Secretive",
    value: "secretive"
  },
  {
    label: "Stern",
    value: "stern"
  },
  {
    label: "Subtle",
    value: "subtle"
  },
  {
    label: "Swift",
    value: "swift"
  },
  {
    label: "Tall",
    value: "tall"
  },
  {
    label: "True-Hearted",
    value: "truehearted"
  },
  {
    label: "Wary",
    value: "wary"
  },
  {
    label: "Wilful",
    value: "wilful"
  }
]

function getHeroicCultureComponent(heroicCulture){

  // Conditional rendering
  switch (heroicCulture) {
    case 'rangers':
      console.log("got here")
      return <Rangers/>
    case 'elves-lindon':
      console.log("got here elves")
      return <ElvesLindon/>
    // repeat for each culture
    default:
      break;
  }
}

function Forge1(props){
  const [heroicCulture, setHeroicCulture] = useState(null);
  const [distinctiveFeature, setDistinctiveFeature] = useState(null);
  const handleCultureChange = (e) => {
    console.log(props)
    setHeroicCulture(e.target.value)
    console.log(heroicCulture + " hello")
    console.log(e.target.value)
  }

  const handleFeatureChange = (e) => {
    setDistinctiveFeature(e.target.value)
  }

  const handleClick = (e) => {
    console.log(e.target.value)
  }


  return(
 
    <Flex width="100%">
      <Stack  bg="brand.900" color="brand.100" p="5" spacing="3" rounded="10" >
        <Heading size="lg">The Basics</Heading>
        <Divider />
        <Heading size="md">Name & Age</Heading>
        <HStack direction="row">
        <Input size="lg" name="hero-name" type="text" placeholder="Hero Name" required />
        <NumberInput size="lg">
          <NumberInputField placeholder="Age"/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        </HStack>
        <Heading size="md" marginTop="3">
          Heroic Culture
        </Heading>
        <Select size="lg" placeholder="Heroic Culture" onChange={handleCultureChange}>
          <option value="bardings">Bardings</option>
          <option value="breefolk">Bree-folk</option>
          <option value="dwarves-durin">Dwarves of Durin's Folk</option>
          <option value="elves-lindon">Elves of Lindon</option>
          <option value="hobbits-shire">Hobbits of the Shire</option>
          <option value="rangers">Rangers of the North</option>
        </Select>

        {/* Show/hide these components based on the selected option */}
       {getHeroicCultureComponent(heroicCulture)}
       <Heading size="md" marginTop="3">
          Distinctive Feature (p67)
        </Heading>
        <Select size="lg" placeholder="Distinctive Feature">
        {distinctiveFeatures.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select>
       
      </Stack>
    </Flex> 
   
  )
}

export default Forge1