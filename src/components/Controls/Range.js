import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../contexts/SettingsContext";

import { linToLog, logToLin, valueToGain } from "../../utils/conversion";

import {
  SliderContainer,
  SliderInput,
  SliderRange,
  SliderTrack,
  SliderText,
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

  const step = type === "frequency" || type === "time" ? 1 : 0.01;

  const handleChange = (ev) => {
    const sliderPos = ev.target.value;
    console.log(sliderPos);
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
      onFocus={() => handleMouseOver(tooltip)}
      onBlur={handleMouseLeave}
    >
      <p>{name}</p>
      <SliderContainer>
        <SliderTrack />
        <SliderRange value={value} max={sliderMax} />
        <SliderInput
          type="range"
          min={sliderMin}
          max={sliderMax}
          step={step}
          value={value}
          onChange={handleChange}
        />
        {type === "frequency" && (
          <SliderText>{state[parameter].toFixed()} Hz</SliderText>
        )}
        {type === "gain" && (
          <SliderText>
            {state[parameter] === 0
              ? "-Inf"
              : valueToGain(state[parameter] / max)}{" "}
            dB
          </SliderText>
        )}
        {type === "percentage" && (
          <SliderText>
            {((state[parameter] * 100) / max).toFixed()} %
          </SliderText>
        )}
        {type === "time" && (
          <SliderText>{state[parameter].toFixed(1)} s</SliderText>
        )}
      </SliderContainer>
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
