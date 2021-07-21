import { Text, Link } from '@chakra-ui/layout'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/color-mode'
import * as React from 'react'

export const Legal = (props) => (
  <Text align="center" textTransform="uppercase" color={useColorModeValue('gray.600', 'gray.200')} fontWeight="medium" fontSize="sm">
    <Link color="blue.500" href="#">Privacy</Link> | <Link color="blue.500" href="#">Terms</Link> | <Link color="blue.500" href="#">License</Link> 
  </Text>
)
