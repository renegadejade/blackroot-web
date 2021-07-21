import { Text, Link } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import * as React from 'react'

export const Disclaimer = (props) => (
  <Text align="center" color={useColorModeValue('gray.500', 'gray.500')} fontSize="sm" {...props}>
    Blackroot is not affliated with nor endorsed by Free League Publishing in any way.
  </Text>
)
