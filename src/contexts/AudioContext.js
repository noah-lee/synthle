import { createContext, useState } from "react";

export const AudioContext = createContext();

export const AudioContextProvider = ({ children }) => {
  // States  & default settings
  const [masterConfig, setMasterConfig] = useState({
    gain: 0.2,
    max: 0.2,
    pitch: 0,
  });

  const [adsrConfig, setAdsrConfig] = useState({
    none: {
      attack: 0.01,
      decay: 0,
      sustain: 1,
      release: 0.01,
    },
    adsrA: {
      attack: 1,
      decay: 0.1,
      sustain: 1,
      release: 1,
    },
    adsrB: {
      attack: 0.05,
      decay: 0.1,
      sustain: 1,
      release: 0.5,
    },
  });

  const [filterConfig, setFilterConfig] = useState({
    frequency: 500,
    target: 5000,
    type: "lowpass",
    adsr: "adsrA",
  });

  const [lfoConfig, setLfoConfig] = useState({
    waveform: "triangle",
    frequency: 5,
    amplitude: 0.5,
    max: 0.5,
  });

  // Web audio API context
  const [actx] = useState(
    new (window.AudioContext || window.webkitAudioContext)()
  );

  // Master gain node
  const [master] = useState(
    new GainNode(actx, { gain: masterConfig.gain })
  );

  // Routing
  master.connect(actx.destination);

  return (
    <AudioContext.Provider
      value={{
        actx,
        master,
        masterConfig,
        setMasterConfig,
        adsrConfig,
        setAdsrConfig,
        filterConfig,
        setFilterConfig,
        lfoConfig,
        setLfoConfig
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
