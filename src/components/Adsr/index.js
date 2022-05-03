import { useContext } from "react";

import { AudioContext } from "../../contexts/AudioContext";

import Time from "./Time";
import Percentage from './Percentage';

const Adsr = ({ id }) => {
  const { adsrConfig, setAdsrConfig } = useContext(AudioContext);

  return (
    <div>
      {id}
      <Time
        id={id}
        parameter="attack"
        state={adsrConfig}
        setState={setAdsrConfig}
      />
      <Time
        id={id}
        parameter="decay"
        state={adsrConfig}
        setState={setAdsrConfig}
      />
      <Percentage
        id={id}
        parameter="sustain"
        state={adsrConfig}
        setState={setAdsrConfig}
      />
      <Time
        id={id}
        parameter="release"
        state={adsrConfig}
        setState={setAdsrConfig}
      />
    </div>
  );
};

export default Adsr;
