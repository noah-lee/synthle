import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../styles/Styled";

const PercentageRange = ({ state, setState, parameter, name, min, max }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      [parameter]: +value,
    }));
  };

  return (
    <Wrapper>
      <p>{name}</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={state[parameter]} max={max} />
        <HSliderInput
          type="range"
          min={min}
          max={max}
          step={0.01}
          value={state[parameter]}
          onChange={handleChange}
        />
        <HSliderText>{(state[parameter] * 100 * 2).toFixed()} %</HSliderText>
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

export default PercentageRange;
