import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { AudioContext } from "../contexts/AudioContext";
import { SettingsContext } from "../contexts/SettingsContext";

import WaveformSelect from "./Controls/WaveformSelect";
import PitchSelect from "./Controls/PitchSelect";
import GainRange from "./Controls/GainRange";
import AdsrSelect from "./Controls/AdsrSelect";
import FilterToggle from "./Controls/FilterToggle";
import Lfo from "./Controls/LfoToggle";
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
      <WaveformSelect state={state} setState={setState} />
      <Container>
        <GainRange state={state} setState={setState} max={1} />
        <PitchSelect state={state} setState={setState} />
      </Container>
      <Container>
        <AdsrSelect state={state} setState={setState} />
        <FilterToggle state={state} setState={setState} />
        <Lfo state={state} setState={setState} />
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
