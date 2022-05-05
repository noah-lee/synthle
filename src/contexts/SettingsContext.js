import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  // Default settings
  const [masterConfig, setMasterConfig] = useState({
    gain: 0.2,
    max: 0.2,
    pitch: 0,
  });

  const [oscConfig, setOscConfig] = useState({
    oscA: {
      waveform: "triangle",
      pitch: 0,
      gain: 0.75,
      max: 1,
      adsr: "adsrA",
      filter: false,
      lfo: true,
    },
    oscB: {
      waveform: "triangle",
      pitch: 0,
      gain: 0.5,
      max: 1,
      adsr: "none",
      filter: false,
      lfo: true,
    },
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

  return (
    <SettingsContext.Provider
      value={{
        masterConfig,
        setMasterConfig,
        oscConfig,
        setOscConfig,
        adsrConfig,
        setAdsrConfig,
        filterConfig,
        setFilterConfig,
        lfoConfig,
        setLfoConfig,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
