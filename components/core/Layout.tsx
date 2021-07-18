import { Flex, useColorModeValue } from '@chakra-ui/react'

function Layout(child) {

  const bg = useColorModeValue("gray.500", "gray.200")
  const color = useColorModeValue("white", "gray.800")

  return(
    <Flex bg={bg} color={color} direction="column" height="100vh">
      {child}
    </Flex>
  )
}

export default Layout