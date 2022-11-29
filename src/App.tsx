import React, {useState} from 'react';
import './App.css';
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Button, Divider
} from "@chakra-ui/react";
import {Article} from "./Components/Article";
import {Offer} from "./Components/Offer";
import {Transport} from "./Components/Transport";
import {Bonus} from "./Components/Bonus";


export const App = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsChange = (index: React.SetStateAction<number>) => {
    setTabIndex(index)
  }

  return (
    <div className="App">
      <Box>
        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <TabList>
            <Tab>Popis predmetu</Tab>
            <Tab>Nabídka</Tab>
            <Tab>Doprava a platba</Tab>
            <Tab>Propagace</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Article />
            </TabPanel>
            <TabPanel>
              <Offer />
            </TabPanel>
            <TabPanel>
              <Transport />
            </TabPanel>
            <TabPanel>
              <Bonus />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Divider m={5}/>
      <Button colorScheme='blue' >Pokracovat</Button>
    </div>
  );
}