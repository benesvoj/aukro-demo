import React from "react";
import {Box, FormControl, Heading, Radio, RadioGroup, Stack} from "@chakra-ui/react";

export const Transport = () => {
    return(
        <Box w={100}>
            <FormControl>
                <RadioGroup defaultValue='1'>
                    <Stack spacing={5} w={80}>
                        <Radio value='1'>
                            Platba pres Aukro
                        </Radio>
                        <Radio value='2'>
                            Platba převodem bez Aukro garance
                        </Radio>
                        <Radio value='3'>
                            Platba při převzetí bez Aukro garance
                        </Radio>
                    </Stack>
                </RadioGroup>
                <Heading size='lg' w={80} m={5}>Doprava pres aukro</Heading>
                <RadioGroup defaultValue='1'>
                    <Stack spacing={5} w={80}>
                        <Radio value='1'>
                            Balikovna
                        </Radio>
                        <Radio value='2'>
                            Zasilkovna
                        </Radio>
                        <Radio value='3'>
                            Ceska posta
                        </Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}