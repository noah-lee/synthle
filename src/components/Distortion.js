import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import Toggle from "./Controls/Toggle";
import Range from './Controls/Range';

const Distortion = () => {
  const { distortionConfig, setDistortionConfig } = useContext(SettingsContext);

  return (
    <Wrapper>
      <Toggle state={distortionConfig} setState={setDistortionConfig} parameter="on" name="Distortion" />
      <Range state={distortionConfig} setState={setDistortionConfig} parameter="amount" name="Amnt" type="percentage" min={0} max={50}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Distortion;
