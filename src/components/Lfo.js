import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import Waveform from "./Controls/Waveform";
import Range from "./Controls/Range";

const Lfo = () => {
  const { lfoConfig, setLfoConfig, handleMouseOver, handleMouseLeave } =
    useContext(SettingsContext);

  // Tooltips
  const lfoTooltip =
    "LFO (Low Frequency Oscillator) is a 'slower' oscillator envelope that modulates a given parameter at a defined frequency and waveform shape.";
  const waveformTooltip =
    "Waveforms will define the 'shape' of the modulated parameter.";
  const freqTooltip =
    "LFO frequency controls the rate at which the parameter will be modulated.";
  const ampTooltip = "LFO ampltitude controls the amplitude of the modulation.";

  return (
    <Wrapper>
      <h2
        onMouseOver={() => handleMouseOver(lfoTooltip)}
        onMouseLeave={handleMouseLeave}
      >
        LFO
      </h2>
      <Waveform state={lfoConfig} setState={setLfoConfig} tooltip={waveformTooltip} />
      <VContainer>
        <Range
          state={lfoConfig}
          setState={setLfoConfig}
          parameter="frequency"
          name="Freq"
          type="frequency"
          min={1}
          max={50}
          tooltip={freqTooltip}
        />
        <Range
          state={lfoConfig}
          setState={setLfoConfig}
          parameter="amplitude"
          name="Ampl"
          type="percentage"
          min={0}
          max={0.5}
          tooltip={ampTooltip}
        />
      </VContainer>
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

const VContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export default Lfo;
