import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    py="4"
    px={{
      base: '2',
      md: '5',
    }}
    shadow="md"
    rounded={{
      sm: 'lg',
    }}
    {...props}
  />
)
