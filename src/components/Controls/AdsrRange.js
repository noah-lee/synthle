import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../contexts/SettingsContext";

import { linToLog, logToLin } from "../../utils/conversion";

import {
  HSliderContainer,
  HSliderInput,
  HSliderRange,
  HSliderTrack,
  HSliderText,
} from "../../styles/Styled";

const Range = ({
  state,
  setState,
  adsrId,
  parameter,
  name,
  type,
  min,
  max,
  tooltip,
}) => {
  const { handleMouseOver, handleMouseLeave } = useContext(SettingsContext);

  const value =
    type === "time"
      ? logToLin(state[adsrId][parameter], min, max)
      : state[adsrId][parameter];

  const sliderMin = type === "time" ? 0 : min;
  const sliderMax = type === "time" ? 100 : max;

  const handleChange = (ev) => {
    const sliderPos = ev.target.value;
    const sliderValue =
      type === "time" ? linToLog(sliderPos, min, max) : sliderPos;
    setState((prevState) => ({
      ...prevState,
      [adsrId]: { ...prevState[adsrId], [parameter]: +sliderValue },
    }));
  };

  return (
    <Wrapper
      onMouseOver={() => handleMouseOver(tooltip)}
      onMouseLeave={handleMouseLeave}
    >
      <p>{name}</p>
      <HSliderContainer>
        <HSliderTrack />
        <HSliderRange value={value} max={sliderMax} />
        <HSliderInput
          type="range"
          min={sliderMin}
          max={sliderMax}
          step={0.01}
          value={value}
          onChange={handleChange}
        />
        {type === "time" && (
          <HSliderText>{state[adsrId][parameter].toFixed(1)} s</HSliderText>
        )}
        {type === "percentage" && (
          <HSliderText>
            {((state[adsrId][parameter] * 100) / max).toFixed()} %
          </HSliderText>
        )}
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

export default Range;
