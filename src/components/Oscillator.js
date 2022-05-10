import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { AudioContext } from "../contexts/AudioContext";
import { SettingsContext } from "../contexts/SettingsContext";

import Waveform from "./Controls/Waveform";
import Pitch from "./Controls/Pitch";
import Range from "./Controls/Range";
import AdsrToggle from "./Controls/AdsrToggle";
import Toggle from "./Controls/Toggle";
import Note from "./Note";

import notes from "../data/notes";

const Oscillator = ({ state, setState }) => {
  // Audio context
  const { actx, master } = useContext(AudioContext);

  // Oscillator group node
  const [oscGroup] = useState(new GainNode(actx));

  // Oscillator group settings
  const now = actx.currentTime;
  oscGroup.gain.setValueAtTime(state.gain, now);

  // Lfo config
  const { lfoConfig } = useContext(SettingsContext);

  // Lfo nodes
  const [lfo] = useState(new OscillatorNode(actx));
  const [lfoOffset] = useState(new ConstantSourceNode(actx, { offset: -1 }));
  const [lfoAmp] = useState(new GainNode(actx));
  const [lfoGain] = useState(new GainNode(actx));

  // Lfo settings
  lfo.type = lfoConfig.waveform;
  lfo.frequency.setValueAtTime(lfoConfig.frequency, now);
  lfoAmp.gain.setValueAtTime(lfoConfig.amplitude, now);

  // Routing: OscGroup => LFO || Master
  oscGroup.disconnect();
  if (state.lfo) {
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
      <Waveform state={state} setState={setState} />
      <Container>
        <Range
          state={state}
          setState={setState}
          parameter="gain"
          name="Gain"
          type="gain"
          min={0}
          max={1}
        />
        <Pitch state={state} setState={setState} />
      </Container>
      <Container>
        <AdsrToggle state={state} setState={setState} />
        <Toggle
          state={state}
          setState={setState}
          parameter="filter"
          name="Filter"
        />
        <Toggle state={state} setState={setState} parameter="lfo" name="LFO" />
      </Container>
      {notes.map((note) => (
        <Note key={note.id} note={note} oscGroup={oscGroup} state={state} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 360px;
  height: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export default Oscillator;
