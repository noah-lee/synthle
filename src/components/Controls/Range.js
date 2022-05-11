import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../contexts/SettingsContext";

import { linToLog, logToLin, valueToGain } from "../../utils/conversion";

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
  parameter,
  name,
  type,
  min,
  max,
  tooltip,
}) => {
  const { handleMouseOver, handleMouseLeave } = useContext(SettingsContext);

  const value =
    type === "frequency" || type === "time"
      ? logToLin(state[parameter], min, max)
      : state[parameter];

  const sliderMin = type === "frequency" || type === "time" ? 0 : min;
  const sliderMax = type === "frequency" || type === "time" ? 100 : max;

  const handleChange = (ev) => {
    const sliderPos = ev.target.value;
    const sliderValue =
      type === "frequency" || type === "time"
        ? linToLog(sliderPos, min, max)
        : sliderPos;
    setState((prevState) => ({
      ...prevState,
      [parameter]: +sliderValue,
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
        {type === "frequency" && (
          <HSliderText>{state[parameter].toFixed()} Hz</HSliderText>
        )}
        {type === "gain" && (
          <HSliderText>
            {state[parameter] === 0
              ? "-Inf"
              : valueToGain(state[parameter] / max)}{" "}
            dB
          </HSliderText>
        )}
        {type === "percentage" && (
          <HSliderText>
            {((state[parameter] * 100) / max).toFixed()} %
          </HSliderText>
        )}
        {type === "time" && (
          <HSliderText>{state[parameter].toFixed(1)} s</HSliderText>
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
