import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../Styled";

const Feedback = ({ state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      feedback: +value,
    }));
  };

  return (
    <Wrapper>
      <p>Fdbk</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={state.feedback} max={0.9} />
        <HSliderInput
          type="range"
          min={0}
          max={0.9}
          step={0.01}
          value={state.feedback}
          onChange={handleChange}
        />
        <HSliderText>{(state.feedback * 100).toFixed()} %</HSliderText>
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

export default Feedback;
