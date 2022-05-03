const Filter = ({ state, setState }) => {
  const style = {
    backgroundColor: "teal",
  };

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      lfo: !prevState.lfo,
    }));
  };

  return (
    <button onClick={handleClick} style={state.lfo ? style : {}}>
      Lfo
    </button>
  );
};

export default Filter;
