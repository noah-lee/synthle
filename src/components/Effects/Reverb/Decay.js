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
    min: 0.1,
    max: 10,
  };

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, time.min, time.max);
    setState((prevState) => ({
      ...prevState,
      decay: +logValue.toFixed(2),
    }));
  };

  return (
    <Wrapper>
      <p>Dcy</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange
          value={logToLin(state.decay, time.min, time.max)}
          max={100}
        />
        <HSliderInput
          type="range"
          step={0.01}
          onChange={handleChange}
          value={logToLin(state.decay, time.min, time.max)}
        />
        <HSliderText>{state.decay} s</HSliderText>
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
