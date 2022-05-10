import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../Styled";

const Sustain = ({ id, state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        sustain: +value,
      },
    }));
  };

  return (
    <Wrapper>
      <p>Sus</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={state[id].sustain} max={1} />
        <HSliderInput
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={state[id].sustain}
          onChange={handleChange}
        />
        <HSliderText>{(state[id].sustain * 100).toFixed()} %</HSliderText>
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

export default Sustain;
