import { Text, Link } from '@chakra-ui/layout'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/color-mode'
import * as React from 'react'

export const Copyright = (props) => (
  <Text align="center" textTransform="uppercase" color={useColorModeValue('gray.600', 'gray.200')} fontWeight="bold" fontSize="sm" {...props}>
    DEV <Link color="blue.500" isExternal href="https://johnthomas.tech">John Thomas</Link> AND <Link color="blue.500" isExternal href="#">Contributors</Link> 
  </Text>
)
