import { useContext } from "react";

import { SettingsContext } from "../../contexts/SettingsContext";

import Waveform from './Waveform';
import Frequency from './Frequency';
import Amplitude from './Amplitude';

const Lfo = () => {
  const { lfoConfig, setLfoConfig } = useContext(SettingsContext);

  return (
    <div>Lfo
      <Waveform state={lfoConfig} setState={setLfoConfig} />
      <Frequency parameter="frequency" state={lfoConfig} setState={setLfoConfig}/>
      <Amplitude state={lfoConfig} setState={setLfoConfig}/>
    </div>
  )
}

export default Lfo