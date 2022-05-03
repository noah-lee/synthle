const Pitch = ({ state, setState }) => {
  const handleClick = (action) => {
    if (action === "pitch-down") {
      setState((prevState) => ({
        ...prevState,
        pitch: Math.max(-3, prevState.pitch - 1),
      }));
    } else if (action === "pitch-up") {
      setState((prevState) => ({
        ...prevState,
        pitch: Math.min(3, prevState.pitch + 1),
      }));
    }
  };

  return (
    <>
      <button onClick={() => handleClick("pitch-down")}>-</button>
      {state.pitch}
      <button onClick={() => handleClick("pitch-up")}>+</button>
    </>
  );
};

export default Pitch;
