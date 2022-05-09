import { useContext } from "react";
import styled from "styled-components";

import { AudioContext } from "../../contexts/AudioContext";
import { SettingsContext } from "../../contexts/SettingsContext";

import Gain from "./Gain";
import Pitch from "./Pitch";

const Master = () => {
  const { master } = useContext(AudioContext);
  const { masterConfig, setMasterConfig } = useContext(SettingsContext);

  return (
    <Wrapper>
      <p>Master</p>
      <Container>
        <Pitch state={masterConfig} setState={setMasterConfig} />
        <Gain node={master} state={masterConfig} setState={setMasterConfig} />
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
  gap: 8px;
  background-color: var(--color-dark);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export default Master;
