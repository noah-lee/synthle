import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../Styled";

const Amplitude = ({ state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      amplitude: +value,
    }));
  };

  return (
    <Wrapper>
    <p>Ampl</p>
    <HSliderContainer>
      <HSliderTrack />
      <HSliderRange value={state.amplitude} max={state.max} />
      <HSliderInput
        type="range"
        min={0}
        max={state.max}
        step={0.01}
        value={state.amplitude}
        onChange={handleChange}
      />
      <HSliderText>{(state.amplitude * 100 * 2).toFixed()} %</HSliderText>
    </HSliderContainer>
  </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 8px;
`;

export default Amplitude;
