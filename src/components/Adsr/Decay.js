import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../Styled";

import { linToLog, logToLin } from "../../utils/conversion";

const Decay = ({ id, state, setState }) => {
  const time = {
    min: 0.01,
    max: 5,
  };

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, time.min, time.max);
    setState((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], decay: +logValue.toFixed(2) },
    }));
  };
  
  return (
    <Wrapper>
      <p>Dcy</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange
          value={logToLin(state[id].decay, time.min, time.max)}
          max={100}
        />
        <HSliderInput
          type="range"
          value={logToLin(state[id].decay, time.min, time.max)}
          onChange={handleChange}
        />
        <HSliderText>{state[id].decay} s</HSliderText>
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

export default Decay;
