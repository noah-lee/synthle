import styled from "styled-components";

import { linToLog, logToLin } from "../../utils/conversion";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../Styled";

const Target = ({ state, setState }) => {
  const frequency = {
    min: 20,
    max: 20000,
  };

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, frequency.min, frequency.max);
    setState((prevState) => ({
      ...prevState,
      target: +logValue.toFixed(),
    }));
  };

  return (
    <Wrapper>
      <p>Target</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange
          value={logToLin(state.target, frequency.min, frequency.max)}
          max={100}
        />
        <HSliderInput
          type="range"
          value={logToLin(state.target, frequency.min, frequency.max)}
          onChange={handleChange}
        />
        <HSliderText>{state.target.toFixed()} Hz</HSliderText>
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

export default Target;
