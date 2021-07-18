import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaDiscord } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant={props.variant} color="gray.600" {...props}>
    <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="#" aria-label="Discord" icon={<FaDiscord fontSize="20px" />} />
  </ButtonGroup>
)
