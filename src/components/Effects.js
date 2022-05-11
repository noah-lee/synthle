import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import Reverb from "./Reverb";
import Delay from "./Delay";
import Distortion from "./Distortion";

const Effects = () => {
  const { handleMouseOver, handleMouseLeave } = useContext(SettingsContext);

  const fxTooltip = "Effects will modify the overall output sound of the synthesizer. Hover over each effect to learn more."

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 360px;
  height: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

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
