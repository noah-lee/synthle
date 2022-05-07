import styled from "styled-components";

import { HSliderContainer, HSliderInput, HSliderRange, HSliderTrack, HSliderText } from '../Styled';

import { valueToGain } from "../../utils/conversion";

const Gain = ({ oscId, node, state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      [oscId]: {
        ...prevState[oscId],
        gain: +value,
      },
    }));
  };

  return (
    <Wrapper>
      <p>Gain</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={state[oscId].gain} max={state[oscId].max} />
        <HSliderInput
          type="range"
          min={0}
          max={state[oscId].max}
          step={0.01}
          value={state[oscId].gain}
          onChange={handleChange}
        />
        <HSliderText>
          {state[oscId].gain === 0 ? "-Inf" : valueToGain(state[oscId].gain)} dB
        </HSliderText>
      </HSliderContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default Gain;
