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
import { createImpulseResponse } from "../../utils/audio";

const Oscillator = ({ id: oscId }) => {
  const { actx, master } = useContext(AudioContext);
  const { lfoConfig, oscConfig, setOscConfig } = useContext(SettingsContext);

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
      <Container>
        <Controls>
          <Pitch oscId={oscId} state={oscConfig} setState={setOscConfig} />
          <Gain
            oscId={oscId}
            node={oscGroup}
            state={oscConfig}
            setState={setOscConfig}
          />
        </Controls>
        <Controls>
          <Adsr oscId={oscId} state={oscConfig} setState={setOscConfig} />
          <Routing>
            <Filter oscId={oscId} state={oscConfig} setState={setOscConfig} />
            <Lfo oscId={oscId} state={oscConfig} setState={setOscConfig} />
          </Routing>
        </Controls>
      </Container>

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
  height: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const Routing = styled.div`
  display: flex;
  gap: 8px;
`;

export default Oscillator;
