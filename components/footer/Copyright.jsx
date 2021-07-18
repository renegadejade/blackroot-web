import { Text, Link } from '@chakra-ui/layout'
import * as React from 'react'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} <Link isExternal href="https://johnthomas.tech">John Thomas</Link> | <Link isExternal href="https://creativecommons.org/licenses/by/2.0/">CC-BY 2.0</Link>
  </Text>
)
