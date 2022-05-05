const Waveform = ({ oscId, state, setState }) => {
  const waveforms = ["sine", "square", "sawtooth", "triangle"];

  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      [oscId]: {
        ...prevState[oscId],
        waveform: value,
      },
    }));
  };

  return (
    <select onChange={handleChange} defaultValue={state[oscId].waveform}>
      {waveforms.map((waveform) => (
        <option key={waveform} value={waveform}>
          {waveform}
        </option>
      ))}
    </select>
  );
};

export default Waveform;
