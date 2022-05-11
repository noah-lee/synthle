import { useContext } from "react";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";

import { SettingsContext } from "../contexts/SettingsContext";

import MasterPitch from "./Controls/MasterPitch";
import Range from "./Controls/Range";
import Presets from "./Presets";

const Master = () => {
  const { masterConfig, setMasterConfig, handleMouseOver, handleMouseLeave } =
    useContext(SettingsContext);

  // Tooltips
  const masterTooltip =
    "The master module will control the overall volume (gain) and pitch of the synthesizer. You can also select one of the existing presets to help you get started.";
  const masterGainTooltip =
    "The master gain controls the overall volume of the synthesizer.";
  const masterPitchTooltip =
    "Increasing or decreasing the master pitch will raise or lower the overall pitch by one octave.";
  const presetsTooltip = "Choose one of the existing synthesizer presets for inspiration."

  return (
    <Wrapper>
      <h2
        onMouseOver={() => handleMouseOver(masterTooltip)}
        onMouseLeave={handleMouseLeave}
      >
        Master
      </h2>
      <Container>
        <Range
          state={masterConfig}
          setState={setMasterConfig}
          parameter="gain"
          name="Gain"
          type="gain"
          min={0}
          max={0.1}
          tooltip={masterGainTooltip}
        />
        <MasterPitch
          state={masterConfig}
          setState={setMasterConfig}
          tooltip={masterPitchTooltip}
        />
      </Container>
      <Presets tooltip={presetsTooltip}/>
      <AccentText>
        Learn and experiment sound design with a synthesizer. Create your own
        beautiful instruments and soundscapes.
      </AccentText>
      <TextContainer>
        <p>Created by Noah Lee</p>{" "}
        <AccentLink target="_blank" href="https://github.com/noah-lee/synthle">
          <FaGithubSquare size={24} color="var(--color-accent)" />
          GitHub
        </AccentLink>
      </TextContainer>
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
  gap: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AccentText = styled.p`
  color: var(--color-accent);
`;

const AccentLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--color-accent);
  font-weight: bold;
  cursor: pointer;
`;

export default Master;
