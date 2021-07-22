import { Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const DividerWithText = (props) => {
  const { children, ...flexProps } = props
  return (
    <Flex align="center" color="sauron.dark" {...flexProps}>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
      <Text as="span" px="3" color={useColorModeValue('gray.600', 'sauron.dark')} fontWeight="bold">
        {children}
      </Text>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
    </Flex>
  )
}
