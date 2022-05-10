import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../styles/Styled";

const AdsrPercentageRange = ({ state, setState, adsrId, parameter, name }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      [adsrId]: {
        ...prevState[adsrId],
        [parameter]: +value,
      },
    }));
  };

  return (
    <Wrapper>
      <p>{name}</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={state[adsrId][parameter]} max={1} />
        <HSliderInput
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={state[adsrId][parameter]}
          onChange={handleChange}
        />
        <HSliderText>{(state[adsrId][parameter] * 100).toFixed()} %</HSliderText>
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

export default AdsrPercentageRange;
