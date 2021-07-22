import { Text, Link } from '@chakra-ui/layout'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/color-mode'
import * as React from 'react'

export const Legal = (props) => (
  <Text align="center" textTransform="uppercase" color={useColorModeValue('blackroot.dark', 'sauron.white')} fontWeight="medium" fontSize="sm">
    <Link color={useColorModeValue("blackroot.red-dark", "sauron.light")} href="#">Privacy</Link> | <Link color={useColorModeValue("blackroot.red-dark", "sauron.light")} href="#">Terms</Link> | <Link color={useColorModeValue("blackroot.red-dark", "sauron.light")} href="#">License</Link> 
  </Text>
)
