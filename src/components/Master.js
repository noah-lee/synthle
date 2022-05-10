import { useContext } from "react";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";

import { SettingsContext } from "../contexts/SettingsContext";

import MasterPitch from "./Controls/MasterPitch";
import Range from "./Controls/Range";
import Presets from "./Presets";

const Master = () => {
  const { masterConfig, setMasterConfig } = useContext(SettingsContext);

  return (
    <Wrapper>
      <p>Master</p>
      <Container>
        <Range
          state={masterConfig}
          setState={setMasterConfig}
          parameter="gain"
          name="Gain"
          type="gain"
          min={0}
          max={0.1}
        />
        <MasterPitch state={masterConfig} setState={setMasterConfig} />
      </Container>
      <Presets />
      <TextContainer>
        <Text>Created by Noah Lee</Text>{" "}
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

const Text = styled.p`
  /* color: var(--color-main); */
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
