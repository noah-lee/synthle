import styled from "styled-components";

import { valueToGain } from "../../utils/conversion";

import {
  VSliderContainer,
  VSliderInput,
  VSliderTrack,
  VSliderRange,
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
    <VSliderContainer>
      <VSliderInput
        type="range"
        min={0}
        max={state.max}
        step={0.001}
        value={state.gain}
        onChange={handleChange}
      />
      <VSliderTrack />
      <VSliderRange value={state.gain} max={state.max} />
      <SliderText>
        {state.gain === 0 ? "-Inf" : valueToGain(state.gain * 10)} dB
      </SliderText>
    </VSliderContainer>
  );
};

const SliderText = styled.p`
  width: 100px;
  height: 16px;
  padding-right: 8px;
  transform: rotate(270deg);
  transform-origin: left;
  z-index: 4;
  position: absolute;
  top: 92px;
  left: 8px;
  pointer-events: none;
  font-size: 16px;
  text-align: end;
  opacity: 0.5;
`;

export default Gain;
