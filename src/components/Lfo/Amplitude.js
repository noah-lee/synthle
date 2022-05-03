const Amplitude = ({ state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      amplitude: value,
    }));
  };

  return (
    <input
      type="range"
      min={0}
      max={state.max}
      step={0.01}
      value={state.amplitude}
      onChange={handleChange}
    />
  );
};

export default Amplitude;
