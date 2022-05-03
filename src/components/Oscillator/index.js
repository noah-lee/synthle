import { useState, useContext, useEffect } from "react";

import { AudioContext } from "../../contexts/AudioContext";

import Node from "./Node";
import Waveform from "./Waveform";
import Pitch from "./Pitch";
import Gain from "./Gain";
import Adsr from "./Adsr";
import Filter from "./Filter";
import Lfo from "./Lfo";

import notes from "../../data/notes";

const Oscillator = ({ id }) => {
  const { actx, master, lfoConfig } = useContext(AudioContext);

  // Oscillator default settings
  const [oscConfig, setOscConfig] = useState({
    id: id,
    waveform: "triangle",
    pitch: 0,
    gain: 0.5,
    max: 1,
    adsr: "none",
    filter: false,
    lfo: true,
  });

  // Oscillator group node
  const [oscGroup] = useState(
    new GainNode(actx, { gain: oscConfig.gain })
  );

  // Lfo node
  const [lfo] = useState(new OscillatorNode(actx));
  const [lfoOffset] = useState(new ConstantSourceNode(actx, { offset: -1 }));
  const [lfoAmp] = useState(new GainNode(actx));
  const [lfoGain] = useState(new GainNode(actx));

  // Lfo active settings
  lfo.type = lfoConfig.waveform;
  lfo.frequency.value = lfoConfig.frequency;
  lfoAmp.gain.value = lfoConfig.amplitude;

  // Routing
  oscGroup.disconnect();
  if (oscConfig.lfo) {
    lfo.connect(lfoAmp); // -1 to 1
    lfoOffset.connect(lfoAmp); // constant -1
    // -1 to 1 ADD -1 => -2 to 0 TIMES 0.5 => -1 to 0
    lfoAmp.connect(lfoGain.gain); // -1 to 0 ADD 1 => 0 to 1
    oscGroup.connect(lfoGain); // lfoGain goes from 0 to 1
    lfoGain.connect(master);
  } else {
    oscGroup.connect(master);
  }

  // Lfo start
  useEffect(() => {
    lfo.start();
    lfoOffset.start();
  }, [lfo, lfoOffset]);

  return (
    <div>
      Oscillator
      <Waveform state={oscConfig} setState={setOscConfig} />
      <Pitch state={oscConfig} setState={setOscConfig} />
      <Gain node={oscGroup} state={oscConfig} setState={setOscConfig} />
      <Adsr state={oscConfig} setState={setOscConfig} />
      <Filter state={oscConfig} setState={setOscConfig} />
      <Lfo state={oscConfig} setState={setOscConfig} />
      {notes.map((note) => (
        <Node
          key={note.id}
          note={note}
          oscGroup={oscGroup}
          oscConfig={oscConfig}
        />
      ))}
    </div>
  );
};

export default Oscillator;
