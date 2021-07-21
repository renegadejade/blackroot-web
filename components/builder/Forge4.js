import { Button, chakra, IconButton, FormControl, FormLabel, Input, Stack, Select, Heading, Container, Text, Flex, Spacer, RadioGroup, Radio, Divider } from '@chakra-ui/react'
import { Rangers } from "./Rangers"
import { ElvesLindon } from "./ElvesLindon"
import React, { useState } from 'react';
import { Warden } from './callings/Warden'
import { PhoneIcon } from '@chakra-ui/icons'

const weapons = [
  {
    label: "Dagger",
    value: "dagger",
  },
  {
    label: "Cudgel",
    value: "cudgel"
  },
  {
    label: "Short Sword",
    value: "shortsword"
  },
  {
    label: "Sword",
    value: "sword"
  },
  {
    label: "Long Sword",
    value: "longsword"
  },
  {
    label: "Short Spear",
    value: "shortspear"
  },
  {
    label: "Spear",
    value: "spear"
  },
  {
    label: "Great Spear",
    value: "greatspear"
  },
  {
    label: "Axe",
    value: "axe"
  },
  {
    label: "Club",
    value: "club"
  },
  {
    label: "Long-Hafted Axe",
    value: "longhaftedaxe"
  },
  {
    label: "Great Axe",
    value: "greataxe"
  },
  {
    label: "Mattock",
    value: "mattock"
  },
  {
    label: "Bow",
    value: "bow"
  },
  {
    label: "Great Bow",
    value: "greatbow"
  }
]

const armour = [
  {
    label: "Leather Shirt",
    value: "leathershirt",
  },
  {
    label: "Leather Corslet",
    value: "leathercorslet",
  },
  {
    label: "Mail-Shirt",
    value: "mailshirt",
  },
  {
    label: "Coat of Mail",
    value: "coatofmail",
  },
  {
    label: "Helm",
    value: "helm",
  }
  
]

const shields = [
  {
    label: "Buckler",
    value: "buckler",
  },
  {
    label: "Shield",
    value: "sheild",
  },
  {
    label: "Great Shield",
    value: "greatshield",
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

function Forge4(){
  const [calling, setCalling] = useState(null);

  const handleChange = (e) => {
    setCalling(e.target.value)
    console.log(calling + " hello")
    console.log(e.target.value)
  }

  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return(
    <Container>
      <Stack  bg="brand.900" color="brand.100" p="5" spacing="3" rounded="10">
        <Heading size="lg">Starting Gear</Heading>
        <Divider/>
        <Heading size="md">Weapons</Heading>
        <Select size="lg" placeholder="None" onChange={handleChange}>
        {weapons.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select>

        {/* Harded coded second select for display purposes only, remove later */}
        <Select size="lg" placeholder="None" onChange={handleChange}>
        {weapons.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select>
       <Button size="lg" colorScheme="brand">Add Weapon</Button>
        <Heading size="md">Armour</Heading>
        <Select size="lg" placeholder="None" onChange={handleChange}>
        {armour.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select>
        <Button size="lg" colorScheme="brand">Add Armour</Button>
        <Heading size="md">Shields</Heading>
        <Select size="lg" placeholder="None" onChange={handleChange}>
        {shields.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select>
        <Heading size="md">Useful Items</Heading>
        <Input size="lg" placeholder="Item" />
        <Button size="lg" colorScheme="brand">Add Item</Button>
        
      </Stack>
    </Container> 
  )
}

export default Forge4