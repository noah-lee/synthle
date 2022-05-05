import { useContext } from "react";

import { SettingsContext } from "../../contexts/SettingsContext";

import Toggle from "./Toggle";
import Decay from "./Decay";

const Reverb = () => {
  const { reverbConfig, setReverbConfig } = useContext(SettingsContext);
  return (
    <div>
      Reverb
      <Toggle state={reverbConfig} setState={setReverbConfig} />
      <Decay state={reverbConfig} setState={setReverbConfig}/>
    </div>
  );
};

export default Reverb;
