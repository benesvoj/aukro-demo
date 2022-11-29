import {Box, FormControl, FormLabel, Image, Input, Stack, Textarea} from "@chakra-ui/react";
import React from "react";

export const Article = () => {
    return(
        <Box w={100}>
            <FormControl p={5}>
                <FormLabel w={80}>Nazev</FormLabel>
                <Input w={80} placeholder='Nazev ariklu, napr. lednice s mrazakem' />
            </FormControl>

            <FormControl p={5}>
                <FormLabel w={80}>Kategorie</FormLabel>
                <Input w={80} placeholder='Napr. bile zbozi' />
            </FormControl>

            <FormControl p={5}>
                <FormLabel w={80}>Popis</FormLabel>
                <Textarea w={80} />
            </FormControl>

            <FormControl p={5}>
                <FormLabel w={80}>Vloz fotky</FormLabel>
                <Stack direction='row'>
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/250' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/250' />
                </Stack>
            </FormControl>
        </Box>
    )
}