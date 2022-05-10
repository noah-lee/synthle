import styled from "styled-components";

import { linToLog, logToLin } from "../../../utils/conversion";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../Styled";

const Frequency = ({ parameter, state, setState }) => {
  const frequency = {
    min: 20,
    max: 20000,
  };

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, frequency.min, frequency.max);
    setState((prevState) => ({
      ...prevState,
      frequency: +logValue.toFixed(),
    }));
  };

  return (
    <Wrapper>
      <p>Freq</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange
          value={logToLin(state.frequency, frequency.min, frequency.max)}
          max={100}
        />
        <HSliderInput
          type="range"
          value={logToLin(state.frequency, frequency.min, frequency.max)}
          onChange={handleChange}
        />
        <HSliderText>
          {state.frequency.toFixed()} Hz
        </HSliderText>
      </HSliderContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export default Frequency;
