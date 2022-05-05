import { useContext } from "react";

import { AudioContext } from "../../contexts/AudioContext";
import { SettingsContext } from "../../contexts/SettingsContext";

import Gain from "./Gain";

const Master = () => {
  const { master } = useContext(AudioContext);
  const { masterConfig, setMasterConfig } = useContext(SettingsContext);

  return (
    <div>
      Master
      <Gain node={master} state={masterConfig} setState={setMasterConfig} />
    </div>
  );
};

export default Master;
