import { Box, Link, SimpleGrid, HStack, useColorModeValue, Center } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props) => (
  <SimpleGrid color={useColorModeValue('gray.600', 'gray.200')} fontWeight="bold" rows={1} {...props}>
    <Box minW="130px" >
      {/* <FooterHeading mb="4">Legal</FooterHeading> */}
      <HStack>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>License</Link>
      </HStack>

    </Box>
  </SimpleGrid>
)
