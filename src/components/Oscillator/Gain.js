const Gain = ({ node, state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      gain: value,
    }));
    node.gain.value = value;
  };

  return (
    <input
      type="range"
      min={0}
      max={state.max}
      step={0.01}
      value={state.gain}
      onChange={handleChange}
    />
  );
};

export default Gain;
