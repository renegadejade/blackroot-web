import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Tools</FooterHeading>
      <Stack>
        <Link>Build</Link>
        <Link>Vault</Link>
        <Link>Name Generator</Link>
        <Link>Discord Bot</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Support</FooterHeading>
      <Stack>
        <Link>Discord</Link>
        <Link>Forum</Link>
        <Link>Changelog</Link>
        <Link>Contact</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
