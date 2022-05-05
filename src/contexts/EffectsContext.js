import { createContext, useState, useContext } from "react";

import { SettingsContext } from "./SettingsContext";
import { AudioContext } from "./AudioContext";

import { createImpulseResponse } from "../utils/audio";

export const EffectsContext = createContext();

export const EffectsContextProvider = ({ children }) => {
  const { reverbConfig } = useContext(SettingsContext);
  const { actx, master } = useContext(AudioContext);

  console.log(reverbConfig);

  // Reverb node
  const [reverb] = useState(new ConvolverNode(actx));
  reverb.buffer = createImpulseResponse(actx, 3, reverbConfig.decay);

  // Routing
  master.connect(actx.destination);
  if (reverbConfig.on) {
    master.connect(reverb);
    reverb.connect(actx.destination);
  } else {
    reverb.disconnect();
  }

  return (
    <EffectsContext.Provider value={{}}>{children}</EffectsContext.Provider>
  );
};
