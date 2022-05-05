import { createContext, useState, useContext } from "react";

import { SettingsContext } from "./SettingsContext";
import { AudioContext } from "./AudioContext";

import { createImpulseResponse, createDistortionCurve } from "../utils/audio";

export const EffectsContext = createContext();

export const EffectsContextProvider = ({ children }) => {
  const { reverbConfig, delayConfig, distortionConfig } =
    useContext(SettingsContext);
  const { actx, master } = useContext(AudioContext);

  // Now
  const now = actx.currentTime;

  // Reverb node & settings
  const [reverb] = useState(new ConvolverNode(actx));
  reverb.buffer = createImpulseResponse(actx, 3, reverbConfig.decay);

  // Delay node & settings
  const [delay] = useState(new DelayNode(actx, { maxDelayTime: 2 }));
  const [feedback] = useState(new GainNode(actx));
  delay.delayTime.setValueAtTime(delayConfig.delay, now);
  feedback.gain.setValueAtTime(delayConfig.feedback, now);

  // Distortion node & settings
  const [distortion] = useState(new WaveShaperNode(actx));
  distortion.curve = createDistortionCurve(actx, distortionConfig.amount);
  distortion.oversample = "4x";

  // Routing

  // Reverb routing
  if (reverbConfig.on) {
    master.connect(reverb);
    reverb.connect(actx.destination);
  } else {
    reverb.disconnect();
    master.connect(actx.destination);
  }

  // Delay routing
  if (delayConfig.on) {
    delay.connect(feedback);
    feedback.connect(delay);
    master.connect(delay);
    master.connect(actx.destination);
    delay.connect(actx.destination);
  } else {
    delay.disconnect();
    feedback.disconnect();
    master.connect(actx.destination);
  }

  // Distortion routing
  if (distortionConfig.on) {
    master.connect(distortion);
    distortion.connect(actx.destination);
  } else {
    distortion.disconnect();
    master.connect(actx.destination);
  }

  return (
    <EffectsContext.Provider value={{}}>{children}</EffectsContext.Provider>
  );
};
