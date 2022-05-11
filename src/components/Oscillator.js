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

import { Module } from '../styles/Styled';

const Oscillator = ({ state, setState }) => {
  // Audio context
  const { actx, master } = useContext(AudioContext);

  // Oscillator group node
  const [oscGroup] = useState(new GainNode(actx));

  // Oscillator group settings
  const now = actx.currentTime;
  oscGroup.gain.setValueAtTime(state.gain, now);

  // Lfo config
  const { lfoConfig, handleMouseOver, handleMouseLeave } =
    useContext(SettingsContext);

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

  // Tooltips
  const oscTooltip =
    "Oscillators are what generate sound by producing signals at specific frequencies and amplitude. The tone or timbre depends on the shape of the waveforms generated. The oscillator output will be routed to the input of the next module.";
  const waveformTooltip =
    "Oscillator waveforms will define the characteristics of the sound. There are an infinite number of possible waveforms but the four basic ones are sine, triangle, square and sawtooth waves. The best way to learn is to try the different shapes!";
  const gainTooltip =
    "Oscillator gain controls the volume of the individual oscillator.";
  const pitchTooltip =
    "Oscillator pitch changes the octave of the individual oscillator.";
  const adsrTooltip =
    "Toggle between routing the oscillator gains to the ADSR envelope modules A, B or bypass them. Hover over the ADSR modules to learn more.";
  const filterTooltip =
    "Toggle between routing the oscillator outputs to the Filter module or bypass it. Hover over the Filter module to learn mode.";
  const lfoTooltip =
    "Toggle between routing the oscillator outputs to the LFO module or bypass it. Hover over the LFO module to learn mode.";

  return (
    <Module>
      <h2
        onMouseOver={() => handleMouseOver(oscTooltip)}
        onMouseLeave={handleMouseLeave}
      >
        Oscillator
      </h2>
      <Waveform state={state} setState={setState} tooltip={waveformTooltip} />
      <Container>
        <Range
          state={state}
          setState={setState}
          parameter="gain"
          name="Gain"
          type="gain"
          min={0}
          max={1}
          tooltip={gainTooltip}
        />
        <Pitch state={state} setState={setState} tooltip={pitchTooltip} />
      </Container>
      <Container>
        <AdsrToggle state={state} setState={setState} tooltip={adsrTooltip} />
        <Toggle
          state={state}
          setState={setState}
          parameter="filter"
          name="Filter"
          tooltip={filterTooltip}
        />
        <Toggle
          state={state}
          setState={setState}
          parameter="lfo"
          name="LFO"
          tooltip={lfoTooltip}
        />
      </Container>
      {notes.map((note) => (
        <Note key={note.id} note={note} oscGroup={oscGroup} state={state} />
      ))}
    </Module>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export default Oscillator;
