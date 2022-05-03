const Percentage = ({ id, parameter, state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [parameter]: +value,
      },
    }));
  };

  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={state[id][parameter]}
      onChange={handleChange}
    />
  );
};

export default Percentage;
