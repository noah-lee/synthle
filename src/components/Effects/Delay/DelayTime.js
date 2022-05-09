import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../Styled";

import { linToLog, logToLin } from "../../../utils/conversion";

const Decay = ({ state, setState }) => {
  const time = {
    min: 0.01,
    max: 2,
  };

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, time.min, time.max);
    setState((prevState) => ({
      ...prevState,
      delay: +logValue.toFixed(2),
    }));
  };

  return (
    <Wrapper>
    <p>Time</p>
    <HSliderContainer>
      <HSliderTrack />
      <HSliderRange
        value={logToLin(state.delay, time.min, time.max)}
        max={100}
      />
      <HSliderInput
        type="range"
        step={0.01}
        onChange={handleChange}
        value={logToLin(state.delay, time.min, time.max)}
      />
      <HSliderText>{state.delay} s</HSliderText>
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
