import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaDiscord } from 'react-icons/fa'

export const SocialMediaLinksHeader = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="#" aria-label="Discord" icon={<FaDiscord fontSize="22px" />} />
    <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="22px" />} />
  </ButtonGroup>
)
