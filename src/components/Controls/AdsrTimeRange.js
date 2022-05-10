import styled from "styled-components";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../styles/Styled";

import { linToLog, logToLin } from "../../utils/conversion";

const AdsrTimeRange = ({ state, setState, adsrId, parameter, name, min, max }) => {

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, min, max);
    setState((prevState) => ({
      ...prevState,
      [adsrId]: { ...prevState[adsrId], [parameter]: +logValue.toFixed(2) },
    }));
  };

  return (
    <Wrapper>
      <p>{name}</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange
          value={logToLin(state[adsrId][parameter], min, max)}
          max={100}
        />
        <HSliderInput
          type="range"
          step={0.01}
          value={logToLin(state[adsrId][parameter], min, max)}
          onChange={handleChange}
        />
        <HSliderText>{state[adsrId][parameter]} s</HSliderText>
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

export default AdsrTimeRange;
