const Wet = ({ state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      wet: +value,
    }));
  };

  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={state.wet}
      onChange={handleChange}
    />
  );
};

export default Wet;
