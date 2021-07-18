import {
    Link as ChakraLink,
    Text,
    Heading,
    Badge,
    StarIcon,
    LinkBox,
    LinkOverlay,
    ArrowForwardIcon,
    background,
    Flex,
    Box
  } from '@chakra-ui/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ToolCard = (props) => (
<LinkBox maxW="350px" boxShadow="lg" p="5" rounded="2xl">
      <Heading size="lg" my="2">
        <LinkOverlay isExternal={props.external} size="lg" href={props.link}>
          {props.name} <FontAwesomeIcon icon={faArrowRight}/>
        </LinkOverlay>
      </Heading>
      {/* <Text>
        {props.description}
      </Text> */}
    </LinkBox>
)