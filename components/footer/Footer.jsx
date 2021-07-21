import { Box, Stack, StackDivider, Link, Center, Image, useColorModeValue, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { LinkGrid } from './LinkGrid'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import { SubscribeForm } from './SubscribeForm'
import { Disclaimer } from './Disclaimer'
import { Legal } from './Legal'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >
    <Stack spacing="2" divider={<StackDivider borderColor="gray.400"/>}>
    <Copyright />
    
   <Legal/>
    </Stack>
    <Disclaimer mt="1"/>
    
  </Box>
)
