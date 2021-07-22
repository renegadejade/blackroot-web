import { Box, Divider, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const DividerWithText = (props) => {
  const { children, ...flexProps } = props
  return (
    <Flex align="center" color={useColorModeValue("blackroot.dark","sauron.dark")} {...flexProps}>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
      <Text as="span" px="3" color={useColorModeValue('blackroot.dark', 'sauron.dark')} fontWeight="bold">
        {children}
      </Text>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
    </Flex>
  )
}
