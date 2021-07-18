import { Box, Button, chakra, FormControl, FormLabel, Input, Stack, Select, Heading, Container, Text, Flex, Spacer, RadioGroup, Radio } from '@chakra-ui/react'
import * as React from 'react'

export const Rangers = (props) => (
<Box>
    <Text>
    An taima palis tehto hap. Úil telco nalanta or, oia oaris cotumo elendë ëa, lá vírë tulca timpinen tul. Ar nur onótima taniquelassë. Yá axo ataquë mirilya tanwëataquë, ep nún tasar racinë, varta tasar é mat. Up lívë inqua nal, tyávë amanyar goneheca lis lá.
    </Text>
    <Heading fontSize="xl" marginTop="3">
            Choose Attributes: STRENGTH - HEART - WITS
          </Heading>
    <RadioGroup>
      <Stack spacing={4} direction="column">
        <Radio value="1">7 - 5 - 2</Radio>
        <Radio value="2">7 - 4 - 3</Radio>
        <Radio value="3">6 - 5 - 3</Radio>
        <Radio value="4">6 - 4 - 4</Radio>
        <Radio value="5">5 - 5 - 4</Radio>
        <Radio value="6">6 - 6 - 2</Radio>
      </Stack>
    </RadioGroup>
    <Heading fontSize="xl" marginTop="3">
            Cultural Blessing: Kings of Men
          </Heading>
          <Text>Choose an Attribute to increase by 1.</Text>
          <RadioGroup>
      <Stack direction="row">
        <Radio value="1">Strength</Radio>
        <Radio value="2">Heart</Radio>
        <Radio value="3">Wits</Radio>
      </Stack>
    </RadioGroup>
    </Box>
  )



