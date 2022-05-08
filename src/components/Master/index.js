import { useContext } from "react";
import styled from "styled-components";

import { AudioContext } from "../../contexts/AudioContext";
import { SettingsContext } from "../../contexts/SettingsContext";

import Gain from "./Gain";

const Master = () => {
  const { master } = useContext(AudioContext);
  const { masterConfig, setMasterConfig } = useContext(SettingsContext);

  return (
    <Wrapper>
      <p>Master</p>
      <Gain node={master} state={masterConfig} setState={setMasterConfig} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 320px;
  height: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

export default Master;
