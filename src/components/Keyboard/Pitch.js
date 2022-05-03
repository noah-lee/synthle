import { useEffect } from "react";

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

  useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.key === "z") {
        if (ev.repeat) return;
        handleClick("pitch-down");
      } else if (ev.key === "x") {
        if (ev.repeat) return;
        handleClick("pitch-up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <button onClick={() => handleClick("pitch-down")}>-</button>
      {state.pitch}
      <button onClick={() => handleClick("pitch-up")}>+</button>
    </>
  );
};

export default Pitch;
