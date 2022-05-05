const Gain = ({ oscId, node, state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      [oscId]: {
        ...prevState[oscId],
        gain: value,
      },
    }));
  };

  return (
    <input
      type="range"
      min={0}
      max={state[oscId].max}
      step={0.01}
      value={state[oscId].gain}
      onChange={handleChange}
    />
  );
};

export default Gain;
