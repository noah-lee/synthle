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

  // Reverb node
  const [reverb] = useState(new ConvolverNode(actx));
  const [reverbWetNode] = useState(new GainNode(actx));
  const [reverbDryNode] = useState(new GainNode(actx));
  const [reverbGroupNode] = useState(new GainNode(actx));

  // Reverb settings
  reverb.buffer = createImpulseResponse(actx, 3, reverbConfig.decay);
  reverbWetNode.gain.setValueAtTime(reverbConfig.wet, now);
  reverbDryNode.gain.setValueAtTime(1 - reverbConfig.wet, now);

  // Delay node
  const [delay] = useState(new DelayNode(actx, { maxDelayTime: 2 }));
  const [feedback] = useState(new GainNode(actx));
  const [delayWetNode] = useState(new GainNode(actx));
  const [delayDryNode] = useState(new GainNode(actx));
  const [delayGroupNode] = useState(new GainNode(actx));

  // Delay settings
  delay.delayTime.setValueAtTime(delayConfig.delay, now);
  feedback.gain.setValueAtTime(delayConfig.feedback, now);
  delayWetNode.gain.setValueAtTime(delayConfig.wet, now);
  delayDryNode.gain.setValueAtTime(1 - delayConfig.wet, now);

  // Distortion node
  const [distortion] = useState(new WaveShaperNode(actx));
  const [distortionWetNode] = useState(new GainNode(actx));
  const [distortionDryNode] = useState(new GainNode(actx));
  const [distortionGroupNode] = useState(new GainNode(actx));

  // Distortion settings
  distortion.curve = createDistortionCurve(actx, distortionConfig.amount);
  distortion.oversample = "4x";
  distortionWetNode.gain.setValueAtTime(distortionConfig.wet, now);
  distortionDryNode.gain.setValueAtTime(1 - distortionConfig.wet, now);

  // Reverb routing
  if (reverbConfig.on) {
    // Wet
    master.connect(reverb);
    reverb.connect(reverbWetNode);
    reverbWetNode.connect(reverbGroupNode);
    // Dry
    master.connect(reverbDryNode);
    reverbDryNode.connect(reverbGroupNode);
  } else {
    // Disconnect
    reverb.disconnect();
    reverbWetNode.disconnect();
    reverbDryNode.disconnect();
    // Bypass
    master.connect(reverbGroupNode);
  }

  // Delay routing
  if (delayConfig.on) {
    // Wet
    reverbGroupNode.connect(delay);
    delay.connect(delayWetNode);
    delayWetNode.connect(feedback);
    feedback.connect(delayWetNode);
    delayWetNode.connect(delayGroupNode);
    // Dry
    reverbGroupNode.connect(delayDryNode);
    delayDryNode.connect(delayGroupNode);
  } else {
    // Disconnect
    delay.disconnect();
    feedback.disconnect();
    delayWetNode.disconnect();
    delayDryNode.disconnect();
    // Bypass
    reverbGroupNode.connect(delayGroupNode);
  }

  // Distortion routing
  if (distortionConfig.on) {
    // Wet
    delayGroupNode.connect(distortion);
    distortion.connect(distortionWetNode);
    distortionWetNode.connect(distortionGroupNode);
    // Dry
    delayGroupNode.connect(distortionDryNode);
    distortionDryNode.connect(distortionGroupNode);
  } else {
    // Disconnect
    distortion.disconnect();
    distortionWetNode.disconnect();
    distortionDryNode.disconnect();
    // Bypass
    delayGroupNode.connect(distortionGroupNode);
  }

  distortionGroupNode.connect(actx.destination);

  return (
    <EffectsContext.Provider value={{}}>{children}</EffectsContext.Provider>
  );
};
