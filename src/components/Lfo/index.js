import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../contexts/SettingsContext";

import Waveform from './Waveform';
import Frequency from './Frequency';
import Amplitude from './Amplitude';

const Lfo = () => {
  const { lfoConfig, setLfoConfig } = useContext(SettingsContext);

  return (
    <Wrapper>
      <h2>LFO</h2>
      <Waveform state={lfoConfig} setState={setLfoConfig} />
      <Frequency parameter="frequency" state={lfoConfig} setState={setLfoConfig}/>
      <Amplitude state={lfoConfig} setState={setLfoConfig}/>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  width: 360px;
  height: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

export default Lfo