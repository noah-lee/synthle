import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import MasterPitch from "./Controls/MasterPitch";
import Range from "./Controls/Range";
// import GainRange from "./Controls/GainRange";

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
