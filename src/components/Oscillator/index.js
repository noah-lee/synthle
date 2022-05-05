import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { AudioContext } from "../../contexts/AudioContext";
import { SettingsContext } from "../../contexts/SettingsContext";

import Node from "./Node";
import Waveform from "./Waveform";
import Pitch from "./Pitch";
import Gain from "./Gain";
import Adsr from "./Adsr";
import Filter from "./Filter";
import Lfo from "./Lfo";

import notes from "../../data/notes";

const Oscillator = ({ id: oscId }) => {
  const { actx, master } = useContext(AudioContext);
  const { lfoConfig, oscConfig, setOscConfig } = useContext(SettingsContext);

  // // Oscillator default settings
  // const [oscConfig, setOscConfig] = useState({
  //   id: id,
  //   waveform: "triangle",
  //   pitch: 0,
  //   gain: 0.5,
  //   max: 1,
  //   adsr: "none",
  //   filter: false,
  //   lfo: true,
  // });

  // Oscillator group node
  const [oscGroup] = useState(
    new GainNode(actx, { gain: oscConfig[oscId].gain })
  );

  // Oscillator group active settings
  const now = actx.currentTime;
  oscGroup.gain.setValueAtTime(oscConfig[oscId].gain, now);

  // Lfo node
  const [lfo] = useState(new OscillatorNode(actx));
  const [lfoOffset] = useState(new ConstantSourceNode(actx, { offset: -1 }));
  const [lfoAmp] = useState(new GainNode(actx));
  const [lfoGain] = useState(new GainNode(actx));

  // Lfo active settings
  lfo.type = lfoConfig.waveform;
  lfo.frequency.setValueAtTime(lfoConfig.frequency, now);
  lfoAmp.gain.setValueAtTime(lfoConfig.amplitude, now);

  // Routing
  oscGroup.disconnect();
  if (oscConfig[oscId].lfo) {
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
    <Wrapper>
      <h2>Oscillator</h2>
      <Waveform oscId={oscId} state={oscConfig} setState={setOscConfig} />
      <Pitch oscId={oscId} state={oscConfig} setState={setOscConfig} />
      <Gain
        oscId={oscId}
        node={oscGroup}
        state={oscConfig}
        setState={setOscConfig}
      />
      <Adsr oscId={oscId} state={oscConfig} setState={setOscConfig} />
      <Filter oscId={oscId} state={oscConfig} setState={setOscConfig} />
      <Lfo oscId={oscId} state={oscConfig} setState={setOscConfig} />
      {notes.map((note) => (
        <Node
          key={note.id}
          note={note}
          oscId={oscId}
          oscGroup={oscGroup}
          oscConfig={oscConfig}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 320px;
  height: 160px;
  padding: 8px;
`;

export default Oscillator;
