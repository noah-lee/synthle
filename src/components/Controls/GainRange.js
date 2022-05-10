import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../styles/Styled";

import { valueToGain } from "../../utils/conversion";

const GainRange = ({ state, setState, max }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      gain: +value,
    }));
  };

  return (
    <Wrapper>
      <p>Gain</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={state.gain} max={max} />
        <HSliderInput
          type="range"
          min={0}
          max={max}
          step={0.01}
          value={state.gain}
          onChange={handleChange}
        />
        <HSliderText>
          {state.gain === 0 ? "-Inf" : valueToGain(state.gain / max)} dB
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

export default GainRange;
