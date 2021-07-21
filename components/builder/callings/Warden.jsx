import { Box, Button, chakra, FormControl, FormLabel, Input, Stack, Select, Heading, Container, Text, Flex, Spacer, RadioGroup, Radio } from '@chakra-ui/react'
import * as React from 'react'
import { CheckboxGroup, Checkbox, HStack } from '@chakra-ui/react'

export const Warden = (props) => (
<Box>
    <Text>
    An taima palis tehto hap. Úil telco nalanta or, oia oaris cotumo elendë ëa, lá vírë tulca timpinen tul. Ar nur onótima taniquelassë. Yá axo ataquë mirilya tanwëataquë, ep nún tasar racinë, varta tasar é mat. Up lívë inqua nal, tyávë amanyar goneheca lis lá.
    </Text>
    <Heading fontSize="xl" marginTop="3">
            Choose 2 Favoured Skills
          </Heading>
    <CheckboxGroup colorScheme="brand">
  <HStack>
    <Checkbox value="awareness">Awareness</Checkbox>
    <Checkbox value="healing">Healing</Checkbox>
    <Checkbox value="insight">Insight</Checkbox>
  </HStack>
</CheckboxGroup>
    <Heading fontSize="xl" marginTop="3">
            Additional Distinctive Feature - Shadow-Lore
          </Heading>
          <Text>p46</Text>
          <Heading fontSize="xl" marginTop="3">
            Shadow Path - Path of Despair
          </Heading>
          <Text>p46</Text>
    </Box>
  )



