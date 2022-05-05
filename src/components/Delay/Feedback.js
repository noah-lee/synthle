const Feedback = ({ state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      feedback: +value,
    }));
  };

  return (
    <input
      type="range"
      min={0}
      max={0.9}
      step={0.01}
      value={state.feedback}
      onChange={handleChange}
    />
  );
};

export default Feedback;
