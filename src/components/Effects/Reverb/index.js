import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../../contexts/SettingsContext";

import Toggle from "./Toggle";
import Decay from "./Decay";
import Wet from "./Wet";

const Reverb = () => {
  const { reverbConfig, setReverbConfig } = useContext(SettingsContext);
  return (
    <Wrapper>
      <Toggle state={reverbConfig} setState={setReverbConfig} />
      <Wet state={reverbConfig} setState={setReverbConfig} />
      <Decay state={reverbConfig} setState={setReverbConfig} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Reverb;
