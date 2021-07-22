import { Box, Badge, Image, Button, Heading, Text, useColorModeValue, useDisclosure, SimpleGrid, Link } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import * as React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import { CreateAccount } from '../components/auth/CreateAccount'
import CTAButton from './CTAButton'


function ArticleCard() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: "1 August 2021",
    baths: 2,
    title: "THE ONE RING release date announced",
    formattedPrice: "$1,900.00",
    reviewCount: "An taima palis tehto hap. Úil telco nalanta or, oia oaris cotumo elendë ëa, lá vírë tulca timpinen tul. Ar nur onótima taniquelassë. ",
    rating: 4,
  }

  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="blackroot.red">
      <Image maxH="150px" minW="100%" src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {/* <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge> */}
          {/* a */}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          color="blackroot.white"
        >
          {property.title}
        </Box>

        {/* <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box> */}

        <Box d="flex" mt="2" alignItems="baseline" >
          {/* {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))} */}
          <Text ml="2" fontSize="sm" alignItems="baseline" color="blackroot.white">
            {property.reviewCount}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default ArticleCard