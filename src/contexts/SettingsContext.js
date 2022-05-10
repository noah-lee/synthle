import { createContext, useState } from "react";

import usePersistedState from "../hooks/use-persisted-state.hook";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  // Default settings
  const [masterConfig, setMasterConfig] = usePersistedState(
    {
      gain: 0.1,
      pitch: 0,
    },
    "master"
  );

  const [oscAConfig, setOscAConfig] = usePersistedState(
    {
      waveform: "triangle",
      pitch: 0,
      gain: 0.71,
      max: 1,
      adsr: "adsrA",
      filter: true,
      lfo: false,
    },
    "oscA"
  );

  const [oscBConfig, setOscBConfig] = usePersistedState(
    {
      waveform: "sine",
      pitch: -1,
      gain: 0.71,
      max: 1,
      adsr: "adsrA",
      filter: false,
      lfo: true,
    },
    "oscB"
  );

  const [adsrConfig, setAdsrConfig] = usePersistedState(
    {
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
    },
    "adsr"
  );

  const [filterConfig, setFilterConfig] = usePersistedState(
    {
      frequency: 1500,
      target: 8000,
      type: "lowpass",
      adsr: "adsrA",
    },
    "filter"
  );

  const [lfoConfig, setLfoConfig] = usePersistedState(
    {
      waveform: "sine",
      frequency: 5,
      amplitude: 0.25,
    },
    "lfo"
  );

  const [reverbConfig, setReverbConfig] = usePersistedState(
    {
      on: true,
      decay: 1.5,
      wet: 0.25,
    },
    "reverb"
  );

  const [delayConfig, setDelayConfig] = usePersistedState(
    {
      on: true,
      delay: 0.8,
      feedback: 0.3,
      wet: 0.2,
    },
    "delay"
  );

  const [distortionConfig, setDistortionConfig] = usePersistedState(
    {
      on: false,
      amount: 10,
      wet: 1,
    },
    "distortion"
  );

  return (
    <SettingsContext.Provider
      value={{
        masterConfig,
        setMasterConfig,
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
