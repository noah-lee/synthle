import { linToLog, logToLin } from "../../utils/conversion";

const Frequency = ({ parameter, state, setState }) => {
  const frequency = {
    min: 20,
    max: 20000,
  };

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, frequency.min, frequency.max);
    setState((prevState) => ({
      ...prevState,
      [parameter]: +logValue.toFixed(),
    }));
  };

  return (
    <input
      type="range"
      value={logToLin(state[parameter], frequency.min, frequency.max)}
      onChange={handleChange}
    />
  );
};

export default Frequency;
