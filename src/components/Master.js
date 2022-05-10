import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import Pitch from "./Controls/MasterPitchSelect";
import GainRange from './Controls/GainRange';

const Master = () => {
  const { masterConfig, setMasterConfig } = useContext(SettingsContext);

  return (
    <Wrapper>
      <p>Master</p>
      <Container>
        <GainRange state={masterConfig} setState={setMasterConfig} max={0.1} />
        <Pitch state={masterConfig} setState={setMasterConfig} />
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
