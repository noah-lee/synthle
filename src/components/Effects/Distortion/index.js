import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../../contexts/SettingsContext";

import Toggle from "./Toggle";
import Amount from "./Amount";
import Wet from "./Wet";

const Distortion = () => {
  const { distortionConfig, setDistortionConfig } = useContext(SettingsContext);

  return (
    <Wrapper>
      <Toggle state={distortionConfig} setState={setDistortionConfig} />
      {/* <Wet state={distortionConfig} setState={setDistortionConfig} /> */}
      <Amount state={distortionConfig} setState={setDistortionConfig} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Distortion;
