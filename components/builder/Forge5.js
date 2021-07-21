import { Button, chakra, IconButton, FormControl, FormLabel, Input, Stack, Select, Heading, Container, Text, Flex, Spacer, RadioGroup, Radio, Divider } from '@chakra-ui/react'
import { Rangers } from "./Rangers"
import { ElvesLindon } from "./ElvesLindon"
import React, { useState } from 'react';
import { Warden } from './callings/Warden'
import { PhoneIcon } from '@chakra-ui/icons'

const rewards = [
  {
    label: "Close-Fitting",
    value: "closefitting",
  },
  {
    label: "Cunning Make",
    value: "cunningmake"
  },
  {
    label: "Fell",
    value: "fell"
  },
  {
    label: "Grievous",
    value: "grievous"
  },
  {
    label: "Keen",
    value: "keen"
  },
  {
    label: "Reinforced",
    value: "shortspear"
  }
]

const virtues = [
  {
    label: "Confidence",
    value: "confidence",
  },
  {
    label: "Dour-Handed",
    value: "dourhanded",
  },
  {
    label: "Hardiness",
    value: "hardiness",
  },
  {
    label: "Mastery",
    value: "mastery",
  },
  {
    label: "Nimbleness",
    value: "Nibleness",
  },
  {
    label: "Prowess",
    value: "prowess"
  }
  
]

function getHeroicCallingComponent(calling){

  // Conditional rendering
  switch (calling) {
    case 'warden':
      console.log("got here")
      return <Warden/>
    case 'elves-lindon':
      console.log("got here elves")
      return <ElvesLindon/>
    // repeat for each culture
    default:
      break;
  }
}

function Forge5(){
  const [calling, setCalling] = useState(null);

  const handleChange = (e) => {
    setCalling(e.target.value)
    console.log(calling + " hello")
    console.log(e.target.value)
  }

  return(
    <Container>
      <Stack  bg="brand.900" color="brand.100" p="5" spacing="3" rounded="10" >
      <Heading size="lg">Rewards & Virtues</Heading>
      <Divider />
        <Heading size="md">Starting Reward</Heading>
        <Select size="lg" placeholder="None" onChange={handleChange}>
        {rewards.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select>
        <Heading size="sm">Apply to which item?</Heading>
        <Select size="lg" placeholder="Leather Corslet" onChange={handleChange}>
        {rewards.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select>
        <Divider />
        <Heading size="md">Starting Virtue</Heading>
        <Select size="lg" placeholder="None" onChange={handleChange}>
        {virtues.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select>
       
      </Stack>
    </Container> 
  )
}

export default Forge5