import React from "react";
import {Box, FormControl, FormLabel, Input, Radio, RadioGroup, Stack} from "@chakra-ui/react";

export const Offer = () => {
    return(
        <Box w={100}>
            <FormControl>
                <RadioGroup defaultValue='2'>
                    <Stack spacing={5}>
                        <Radio colorScheme='red' value='1'>
                            Aukce
                        </Radio>
                        <Radio colorScheme='green' value='2'>
                            Kup ted
                        </Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl p={5}>
                <FormLabel w={80}>Pocatecni cena</FormLabel>
                <Input w={80} type='number'/>
            </FormControl>
        </Box>
    )
}