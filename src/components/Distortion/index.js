import { useContext } from "react";

import { SettingsContext } from "../../contexts/SettingsContext";

import Toggle from "./Toggle";
import Amount from './Amount';

const Distortion = () => {
  const {distortionConfig, setDistortionConfig} = useContext(SettingsContext);

  return (
    <div>
      Distortion
      <Toggle state={distortionConfig} setState={setDistortionConfig} />
      <Amount state={distortionConfig} setState={setDistortionConfig} />
    </div>
  );
};

export default Distortion;
