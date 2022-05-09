import styled from "styled-components";

import { valueToGain } from "../../utils/conversion";

import {
  HSliderContainer,
  HSliderInput,
  HSliderTrack,
  HSliderRange,
  HSliderText,
} from "../Styled";

const Gain = ({ node, state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      gain: +value,
    }));
    node.gain.value = +value;
  };

  return (
    <Wrapper>
      <p>Gain</p>
      <HSliderContainer>
        <HSliderInput
          type="range"
          min={0}
          max={state.max}
          step={0.001}
          value={state.gain}
          onChange={handleChange}
        />
        <HSliderTrack />
        <HSliderRange value={state.gain} max={state.max} />
        <HSliderText>
          {state.gain === 0 ? "-Inf" : valueToGain(state.gain * 10)} dB
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

export default Gain;
