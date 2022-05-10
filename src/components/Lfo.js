import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import Waveform from "./Controls/Waveform";
import Range from './Controls/Range';

const Lfo = () => {
  const { lfoConfig, setLfoConfig } = useContext(SettingsContext);

  return (
    <Wrapper>
      <h2>LFO</h2>
      <Waveform state={lfoConfig} setState={setLfoConfig} />
      <Container>
        <Range
          state={lfoConfig}
          setState={setLfoConfig}
          parameter="frequency"
          name="Freq"
          type="frequency"
          min={1}
          max={50}
        />
        <Range
          state={lfoConfig}
          setState={setLfoConfig}
          parameter="amplitude"
          name="Ampl"
          type="percentage"
          min={0}
          max={0.5}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 360px;
  height: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export default Lfo;
