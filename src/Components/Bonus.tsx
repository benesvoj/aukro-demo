import React from "react";
import {Box, Checkbox, FormControl, Stack} from "@chakra-ui/react";

export const Bonus = () => {
    return(
        <Box w={100}>
            <FormControl>
                    <Stack spacing={5} w={80}>
                        <Checkbox>
                            Přednostní výpis
                        </Checkbox>
                        <Checkbox>
                            Tučný titulek
                        </Checkbox>
                        <Checkbox>
                            Zvýraznění
                        </Checkbox>
                    </Stack>
            </FormControl>
        </Box>
    )
}