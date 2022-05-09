import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../Styled";

const Amount = ({ state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      amount: +value,
    }));
    setState((prevState) => ({
      ...prevState,
      wet: +value / 100,
    }));
  };

  return (
    <Wrapper>
      <p>Amnt</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={state.amount} max={100} />
        <HSliderInput
          type="range"
          value={state.amount}
          onChange={handleChange}
        />
        <HSliderText>{state.amount} %</HSliderText>
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

export default Amount;