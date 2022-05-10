import { useContext, useState, useEffect } from "react";

import { AudioContext } from "../contexts/AudioContext";
import { SettingsContext } from "../contexts/SettingsContext";

import { play, stop } from "../utils/audio";

const Note = ({ note, oscGroup, state }) => {
  // Audio context
  const { actx } = useContext(AudioContext);
  const { masterConfig, adsrConfig, filterConfig } =
    useContext(SettingsContext);

  // Oscillator nodes
  const [osc] = useState(new OscillatorNode(actx));
  const [oscGain] = useState(new GainNode(actx, { gain: 0 }));

  // Filter node
  const [filter] = useState(
    new BiquadFilterNode(actx, {
      frequency: filterConfig.frequency,
      type: filterConfig.type,
    })
  );

  // Oscillator active settings
  const now = actx.currentTime;
  const oscAdsr = adsrConfig[state.adsr];
  osc.type = state.waveform;
  const pitch = masterConfig.pitch + state.pitch;
  if (pitch > 3 || pitch < -3) {
    osc.frequency.setValueAtTime(0, now);
  } else {
    osc.frequency.setValueAtTime(note.freq * 2 ** pitch, now);
  }

  // Filter active settings
  const filterAdsr = adsrConfig[filterConfig.adsr];
  const filterTarget =
    filterConfig.adsr === "none" ? filterConfig.frequency : filterConfig.target;
  filter.frequency.setValueAtTime(filterConfig.frequency, now);
  filter.type = filterConfig.type;

  // Routing
  osc.connect(oscGain);
  oscGain.disconnect();
  if (state.filter) {
    oscGain.connect(filter);
    filter.connect(oscGroup);
  } else {
    oscGain.connect(oscGroup);
  }

  // Oscillator start
  useEffect(() => {
    osc.start();
  }, [osc]);

  const handleKeyDown = (ev) => {
    if (ev.repeat) return;
    if (ev.key === note.key) {
      (async () => {
        await actx.resume();
        play(
          actx,
          oscGain,
          "gain",
          0,
          1,
          oscAdsr.attack,
          oscAdsr.decay,
          oscAdsr.sustain
        );
        play(
          actx,
          filter,
          "frequency",
          filterConfig.frequency,
          filterTarget,
          filterAdsr.attack,
          filterAdsr.decay,
          filterAdsr.sustain
        );
      })();
    }
  };

  const handKeyUp = (ev) => {
    if (ev.key === note.key) {
      (async () => {
        await actx.resume();
        stop(actx, oscGain, "gain", 0, oscAdsr.release);
        stop(
          actx,
          filter,
          "frequency",
          filterConfig.frequency,
          filterAdsr.release
        );
      })();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handKeyUp);
    };
  });

  return <></>;
};

export default Note;
