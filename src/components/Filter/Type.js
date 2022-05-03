const Type = ({state, setState}) => {
  const types = ["lowpass", "highpass"]

  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      type: value,
    }));
  };

  return (
    <select onChange={handleChange} defaultValue={state.type}>
        {types.map(type=> <option key={type} value={type}>{type}</option>)}
      </select>
  )
}

export default Type