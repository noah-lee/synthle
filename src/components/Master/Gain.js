import styled from "styled-components";

import { valueToGain } from "../../utils/conversion";

import {
  VSliderContainer,
  VSliderInput,
  VSliderTrack,
  VSliderRange,
  VSliderText,
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
      <VSliderText>
        {state.gain === 0 ? "-Inf" : valueToGain(state.gain * 10)} dB
      </VSliderText>
    </VSliderContainer>
  );
};



export default Gain;
