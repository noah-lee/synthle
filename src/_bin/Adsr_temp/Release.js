import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../Styled";

import { linToLog, logToLin } from "../../utils/conversion";

const Release = ({ id, state, setState }) => {
  const time = {
    min: 0.01,
    max: 5,
  };

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, time.min, time.max);
    setState((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], release: +logValue.toFixed(2) },
    }));
  };
  
  return (
    <Wrapper>
      <p>Rls</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange
          value={logToLin(state[id].release, time.min, time.max)}
          max={100}
        />
        <HSliderInput
          type="range"
          step={0.01}
          value={logToLin(state[id].release, time.min, time.max)}
          onChange={handleChange}
        />
        <HSliderText>{state[id].release} s</HSliderText>
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

export default Release;