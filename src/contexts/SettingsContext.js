import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  // Default settings
  const [masterConfig, setMasterConfig] = useState({
    gain: 0.1,
    max: 0.1,
    pitch: 0,
  });

  const [oscConfig, setOscConfig] = useState({
    oscA: {
      waveform: "triangle",
      pitch: 0,
      gain: 1,
      max: 1,
      adsr: "none",
      filter: false,
      lfo: false,
    },
    oscB: {
      waveform: "sine",
      pitch: 0,
      gain: 0,
      max: 1,
      adsr: "none",
      filter: false,
      lfo: false,
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
      attack: 1.5,
      decay: 5,
      sustain: 1,
      release: 1.5,
    },
    adsrB: {
      attack: 0.05,
      decay: 5,
      sustain: 1,
      release: 2,
    },
  });

  const [filterConfig, setFilterConfig] = useState({
    frequency: 500,
    target: 500,
    type: "lowpass",
    adsr: "none",
  });

  const [lfoConfig, setLfoConfig] = useState({
    waveform: "sine",
    frequency: 5,
    amplitude: 0.5,
    max: 0.5,
  });

  const [reverbConfig, setReverbConfig] = useState({
    on: false,
    decay: 1,
    wet: 0.5,
  });

  const [delayConfig, setDelayConfig] = useState({
    on: false,
    delay: 0.3,
    feedback: 0.5,
    wet: 0.5,
  })
  
  const [distortionConfig, setDistortionConfig] = useState({
    on: false,
    amount: 50,
    wet: 1,
  })

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
        reverbConfig,
        setReverbConfig,
        delayConfig,
        setDelayConfig,
        distortionConfig,
        setDistortionConfig
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
