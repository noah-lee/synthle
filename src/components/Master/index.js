import { useContext } from "react";

import { AudioContext } from "../../contexts/AudioContext";

import Gain from "./Gain";


const Master = () => {
  const { master, masterConfig, setMasterConfig } = useContext(AudioContext);

  return (
    <div>
      Master
      <Gain node={master} state={masterConfig} setState={setMasterConfig} />
    </div>
  );
};

export default Master;
