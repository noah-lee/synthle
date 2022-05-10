import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../../styles/Styled";

const Amount = ({ state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      amount: +value,
    }));
    setState((prevState) => ({
      ...prevState,
      wet: (+value / 100) * 2,
    }));
  };

  return (
    <Wrapper>
      <p>Amnt</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={state.amount} max={50} />
        <HSliderInput
          type="range"
          max={50}
          value={state.amount}
          onChange={handleChange}
        />
        <HSliderText>{state.amount * 2} %</HSliderText>
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
