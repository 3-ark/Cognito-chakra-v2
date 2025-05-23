import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text
} from '@chakra-ui/react';

// Removed unused imports: processQueryWithAI, urlRewriteRuntime, cleanUrl
import { useConfig } from './ConfigContext';
import { SettingTitle } from './SettingsTitle';

const WebSearchModeSelector = ({ webMode, updateConfig }) => (
  <Grid width="50%">
    {['duckduckgo', 'brave', 'google'].map(mode => ( // Added google
      <Grid
        key={mode}
        alignItems="center"
        cursor="pointer"
        display="flex"
        mb={4}
        onClick={() => updateConfig({ webMode: mode })}
      >
        <input
          checked={webMode === mode}
          style={{ fontSize: '1.5rem', borderColor: 'var(--text)' }}
          type="checkbox"
        />
        <Text color="var(--text)" fontSize="lg" fontWeight={800} pl={2}>
          {mode}
        </Text>
      </Grid>
    ))}
  </Grid>
);

const WebSearchSlider = ({ size, updateConfig }) => (
  <Box width="45%">
    <Text
      color="var(--text)"
      fontSize="lg"
      fontWeight={800}
      ml={-4}
      pb={6}
      pl={2}
      textAlign="left"
    >
      char limit:
      {' '}
      {size === 128 ? 'inf' : `${size}k`}
    </Text>
    <Slider
      defaultValue={size}
      max={128}
      min={1}
      onChange={value => updateConfig({ webLimit: value })}
    >
      <SliderTrack background="var(--text)">
        <SliderFilledTrack background="var(--text)" />
      </SliderTrack>
      <SliderThumb background="var(--text)" style={{ zoom: 1.5 }} />
    </Slider>
  </Box>
);


export const WebSearch = () => {
  const { config, updateConfig } = useConfig();
  const size = config?.webLimit || 1;

  return (
    <AccordionItem border="2px solid var(--text)" borderRadius={16} mb={4}>
      <AccordionButton
        _hover={{ backgroundColor: 'transparent' }}
        pb={1}
        pr={2}
      >
        <SettingTitle
          icon="🌐"
          padding={0}
          text="Web Search"
        />
      </AccordionButton>
      <AccordionPanel p={4} pt={2}>
        <Grid display="flex">
          <WebSearchModeSelector updateConfig={updateConfig} webMode={config?.webMode} />
          <WebSearchSlider size={size} updateConfig={updateConfig} />
        </Grid>
      </AccordionPanel>
    </AccordionItem>
  );
};

export const cleanUrl = (url: string) => {
  if (url.endsWith('/')) {
    return url.slice(0, -1);
  }

  return url;
};