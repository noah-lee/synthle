import { useContext } from 'react';
import styled from 'styled-components';

import { SettingsContext } from '../../contexts/SettingsContext';

import Toggle from '../Controls/Toggle';
import Range from '../Controls/Range';

const Reverb = () => {
  const { reverbConfig, setReverbConfig, handleMouseOver, handleMouseLeave } =
    useContext(SettingsContext);

  // Tooltip
  const reverbTooltip =
    'Reverb will simulate sound being reflected off surfaces and decaying as it is absorbed over time. Decay is the time it takes for the sound to dissipate to silence. Wet percentage defines the ratio of input sound that will be affected by the effect.';

  return (
    <Wrapper
      onMouseOver={() => handleMouseOver(reverbTooltip)}
      onMouseLeave={handleMouseLeave}
    >
      <Toggle
        state={reverbConfig}
        setState={setReverbConfig}
        parameter="on"
        name="Reverb"
        tooltip={reverbTooltip}
      />
      <Range
        state={reverbConfig}
        setState={setReverbConfig}
        parameter="decay"
        name="Dcy"
        type="time"
        min={0.1}
        max={10}
        tooltip={reverbTooltip}
      />
      <Range
        state={reverbConfig}
        setState={setReverbConfig}
        parameter="wet"
        name="Wet"
        type="percentage"
        min={0}
        max={1}
        tooltip={reverbTooltip}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Reverb;
