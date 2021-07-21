import { Button, chakra, FormControl, FormLabel, Input, Stack, Select, Heading, Container, Text, Flex, Spacer, RadioGroup, Radio } from '@chakra-ui/react'
import { Rangers } from "./Rangers"
import { ElvesLindon } from "./ElvesLindon"
import React, { useState } from 'react';
import { Warden } from './callings/Warden'

const skills = [
  {
    label: "Captain",
    value: "captain",
  },
  {
    label: "Champion",
    value: "champion"
  },
  {
    label: "Messenger",
    value: "messenger"
  },
  {
    label: "Scholar",
    value: "scholar"
  },
  {
    label: "Treasure Hunter",
    value: "treasurehunter"
  },
  {
    label: "Warden",
    value: "warden"
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

function Forge3(){
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
      <Stack  bg="brand.900" color="brand.100" p="5" spacing="3" rounded="10" >
      
        <Heading size="lg">Previous Experience</Heading>
        {/* <Select size="lg" placeholder="Calling" onChange={handleChange}>
        {skills.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select> */}

      </Stack>
    </Container> 
  )
}

export default Forge3