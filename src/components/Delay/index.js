import { useContext } from "react";

import { SettingsContext } from "../../contexts/SettingsContext";

import Toggle from "./Toggle";
import DelayTime from "./DelayTime";
import Feedback from './Feedback';

const Delay = () => {
  const { delayConfig, setDelayConfig } = useContext(SettingsContext);

  return (
    <div>
      Delay
      <Toggle state={delayConfig} setState={setDelayConfig} />
      <DelayTime state={delayConfig} setState={setDelayConfig} />
      <Feedback state={delayConfig} setState={setDelayConfig} />
    </div>
  );
};

export default Delay;
