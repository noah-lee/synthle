const Amount = ({ state, setState }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    setState((prevState) => ({
      ...prevState,
      amount: +value,
    }));
  };

  return <input type="range" value={state.amount} onChange={handleChange} />;
};

export default Amount;
