import styled from "styled-components";

import { linToLog, logToLin } from "../../utils/conversion";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../styles/Styled";

const FrequencyRange = ({ parameter, name, state, setState, min, max }) => {
  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, min, max);
    setState((prevState) => ({
      ...prevState,
      [parameter]: +logValue.toFixed(),
    }));
  };

  return (
    <Wrapper>
      <p>{name}</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={logToLin(state[parameter], min, max)} max={100} />
        <HSliderInput
          type="range"
          value={logToLin(state[parameter], min, max)}
          onChange={handleChange}
        />
        <HSliderText>{state[parameter].toFixed()} Hz</HSliderText>
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

export default FrequencyRange;
