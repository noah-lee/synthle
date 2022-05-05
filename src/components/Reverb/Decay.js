import { linToLog, logToLin } from "../../utils/conversion";

const Decay = ({ state, setState }) => {
  const time = {
    min: 0.1,
    max: 10,
  };

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, time.min, time.max);
    setState((prevState) => ({
      ...prevState,
      decay: +logValue.toFixed(2),
    }));
  };

  return (
    <input
      type="range"
      onChange={handleChange}
      value={logToLin(state.decay, time.min, time.max)}
    />
  );
};

export default Decay;
