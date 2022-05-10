import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../contexts/SettingsContext";

import Toggle from "./Controls/Toggle";
import Range from './Controls/Range';

const Reverb = () => {
  const { reverbConfig, setReverbConfig } = useContext(SettingsContext);
  return (
    <Wrapper>
      <Toggle state={reverbConfig} setState={setReverbConfig} parameter="on" name="Reverb" />
      <Range state={reverbConfig} setState={setReverbConfig} parameter="decay" name="Dcy" type="time" min={0.1} max={10} />
      <Range state={reverbConfig} setState={setReverbConfig} parameter="wet" name="Wet" type="percentage" min={0} max={1}/>
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
