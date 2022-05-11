import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import Toggle from "./Controls/Toggle";
import Range from "./Controls/Range";

const Distortion = () => {
  const {
    distortionConfig,
    setDistortionConfig,
    handleMouseOver,
    handleMouseLeave,
  } = useContext(SettingsContext);

  // Tooltip
  const distortionTooltip =
    "Distortion will modify the input signal by applying a wave shaping function and 'distorting' the sound.";

  return (
    <Wrapper
      onMouseOver={() => handleMouseOver(distortionTooltip)}
      onMouseLeave={handleMouseLeave}
    >
      <Toggle
        state={distortionConfig}
        setState={setDistortionConfig}
        parameter="on"
        name="Distortion"
      />
      <Range
        state={distortionConfig}
        setState={setDistortionConfig}
        parameter="amount"
        name="Amnt"
        type="percentage"
        min={0}
        max={50}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Distortion;
