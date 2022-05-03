import { useContext, useState, useEffect } from "react";

import { AudioContext } from "../../contexts/AudioContext";

import { play, stop } from "../../utils/adsr";

const Node = ({ oscGroup, note, oscConfig }) => {
  // Audio context
  const { actx, masterConfig, adsrConfig, filterConfig } =
    useContext(AudioContext);

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
  const oscAdsr = adsrConfig[oscConfig.adsr];
  osc.type = oscConfig.waveform;
  const pitch = masterConfig.pitch + oscConfig.pitch;
  if (pitch > 3 || pitch < -3) {
    osc.frequency.value = 0;
  } else {
    osc.frequency.value = note.freq * 2 ** pitch;
  }

  // Filter active settings
  const filterAdsr = adsrConfig[filterConfig.adsr];
  const filterTarget =
    filterConfig.adsr === "none" ? filterConfig.frequency : filterConfig.target;
  filter.frequency.value = filterConfig.frequency;
  filter.type = filterConfig.type;

  // Routing
  osc.connect(oscGain);
  oscGain.disconnect();
  if (oscConfig.filter) {
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
    (async () => {
      await actx.resume();
      if (ev.key === note.key) {
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
      }
    })();
  };

  const handKeyUp = (ev) => {
    if (ev.key === note.key) {
      stop(actx, oscGain, "gain", 0, oscAdsr.release);
      stop(
        actx,
        filter,
        "frequency",
        filterConfig.frequency,
        filterAdsr.release
      );
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

export default Node;
