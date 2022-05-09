import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../Styled";

const Wet = ({ state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      wet: +value,
    }));
  };

  return (
    <Wrapper>
      <p>Wet</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={state.wet} max={1} />
        <HSliderInput
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={state.wet}
          onChange={handleChange}
        />
        <HSliderText>{(state.wet * 100).toFixed()} %</HSliderText>
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


export default Wet;
