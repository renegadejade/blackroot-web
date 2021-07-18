
import {
    Link as ChakraLink,
    Text,
    Heading,
    Badge,
    LinkBox,
    LinkOverlay,
    background,
    Flex,
    Box,
    HStack,
    useProps
  } from '@chakra-ui/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const CharacterCard = (props) => (
<LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
  {/* <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
    13 days ago
  </Box> */}
  <Heading size="md" my="2">
    <LinkOverlay href={props.link}>
      {props.name}
    </LinkOverlay>
  </Heading>
  <Text mb="3">
    {props.culture}
  </Text>
  <Text mb="3">
    {props.calling}
  </Text>
  <Text mb="3">
   Valour: {props.valour} | Wisdom: {props.wisdom}
  </Text>
</LinkBox>
)