import { Text, Link } from '@chakra-ui/layout'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/color-mode'
import * as React from 'react'

export const Copyright = (props) => (
  <Text
    align="center"
    textTransform="uppercase"
    color={useColorModeValue('blackroot.dark', 'sauron.white')}
    fontWeight="bold"
    fontSize="sm">
    DEV <Link color={useColorModeValue("blackroot.red-dark", "sauron.light")} isExternal href="https://johnthomas.tech">John Thomas</Link> And <Link color={useColorModeValue("blackroot.red-dark", "sauron.light")} isExternal href="#">Contributors</Link> 
  </Text>
)
