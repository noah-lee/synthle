import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import Reverb from "./Reverb";
import Delay from "./Delay";
import Distortion from "./Distortion";

import { Module } from '../styles/Styled';

const Effects = () => {
  const { handleMouseOver, handleMouseLeave } = useContext(SettingsContext);

  const fxTooltip = "Effects will modify the overall output sound of the synthesizer. Hover over each effect to learn more."

  return (
    <Module>
      <h2
        onMouseOver={() => handleMouseOver(fxTooltip)}
        onMouseLeave={handleMouseLeave}
      >
        Effects
      </h2>
      <Container>
        <Delay />
        <VContainer>
          <Reverb />
          <Distortion />
        </VContainer>
      </Container>
    </Module>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const VContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Effects;
