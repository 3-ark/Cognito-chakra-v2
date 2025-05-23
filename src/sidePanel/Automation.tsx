
import {
   AccordionButton, AccordionItem, AccordionPanel, Grid, Text 
  } from '@chakra-ui/react';

import { useConfig } from './ConfigContext';
import { SettingTitle } from './SettingsTitle';

export const Automation = () => {
  const { config } = useConfig();
  
  return (
    <AccordionItem
      border="2px solid var(--text)"
      borderBottomWidth="2px !important"
      borderRadius={16}
      mb={4}
    >
      <AccordionButton _hover={{ backgroundColor: 'transparent' }} paddingBottom={1} paddingRight={2}>
        <SettingTitle
          padding={0}
          text="Automation"
          icon="🔨"
          widget={(
            <Grid alignItems="center" display="flex">
              
            </Grid>
              )}
        />
      </AccordionButton>
      <AccordionPanel p={4} pt={2}>
        <Text textAlign="left" color="var(--text)" fontSize="md" fontWeight={800}>Placeholder</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};
