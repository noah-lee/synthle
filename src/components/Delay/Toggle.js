const Toggle = ({ state, setState }) => {
  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      on: !prevState.on,
    }));
  };
  return <button onClick={handleClick}>{state.on ? "On" : "Off"}</button>;
};

export default Toggle;
