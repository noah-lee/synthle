import { createContext, useState, useContext } from "react";

import { SettingsContext } from "./SettingsContext";

export const AudioContext = createContext();

export const AudioContextProvider = ({ children }) => {
  const { masterConfig } = useContext(SettingsContext);

  // Web audio API context
  const [actx] = useState(
    new (window.AudioContext || window.webkitAudioContext)()
  );

  // Master gain node
  const [master] = useState(new GainNode(actx, { gain: masterConfig.gain }));

  // Routing
  master.connect(actx.destination);

  return (
    <AudioContext.Provider
      value={{
        actx,
        master,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
