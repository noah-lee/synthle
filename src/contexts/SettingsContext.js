import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  // Default settings
  const [masterConfig, setMasterConfig] = useState({
    gain: 0.1,
    pitch: 0,
  });

  const [oscConfig, setOscConfig] = useState({
    oscA: {
      waveform: "triangle",
      pitch: 0,
      gain: 0.71,
      max: 1,
      adsr: "adsrA",
      filter: true,
      lfo: false,
    },
    oscB: {
      waveform: "sine",
      pitch: -1,
      gain: 0.71,
      max: 1,
      adsr: "adsrA",
      filter: false,
      lfo: true,
    },
  });

  const [oscAConfig, setOscAConfig] = useState({
    waveform: "triangle",
    pitch: 0,
    gain: 0.71,
    max: 1,
    adsr: "adsrA",
    filter: true,
    lfo: false,
  });

  const [oscBConfig, setOscBConfig] = useState({
    waveform: "sine",
    pitch: -1,
    gain: 0.71,
    max: 1,
    adsr: "adsrA",
    filter: false,
    lfo: true,
  });

  const [adsrConfig, setAdsrConfig] = useState({
    none: {
      attack: 0.01,
      decay: 0,
      sustain: 1,
      release: 0.01,
    },
    adsrA: {
      attack: 0.01,
      decay: 5,
      sustain: 1,
      release: 2,
    },
    adsrB: {
      attack: 1.5,
      decay: 2,
      sustain: 0.5,
      release: 1,
    },
  });

  const [filterConfig, setFilterConfig] = useState({
    frequency: 1500,
    target: 8000,
    type: "lowpass",
    adsr: "adsrA",
  });

  const [lfoConfig, setLfoConfig] = useState({
    waveform: "sine",
    frequency: 5,
    amplitude: 0.25,
  });

  const [reverbConfig, setReverbConfig] = useState({
    on: true,
    decay: 1.5,
    wet: 0.25,
  });

  const [delayConfig, setDelayConfig] = useState({
    on: true,
    delay: 0.8,
    feedback: 0.3,
    wet: 0.2,
  });

  const [distortionConfig, setDistortionConfig] = useState({
    on: false,
    amount: 10,
    wet: 1,
  });

  return (
    <SettingsContext.Provider
      value={{
        masterConfig,
        setMasterConfig,
        oscConfig,
        setOscConfig,
        oscAConfig,
        setOscAConfig,
        oscBConfig,
        setOscBConfig,
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
        setDistortionConfig,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
