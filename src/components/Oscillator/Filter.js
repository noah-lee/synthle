const Filter = ({ state, setState }) => {
  const style = {
    backgroundColor: "teal",
  };

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      filter: !prevState.filter,
    }));
  };

  return (
    <button onClick={handleClick} style={state.filter ? style : {}}>
      Filter
    </button>
  );
};

export default Filter;
