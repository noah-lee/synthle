import { linToLog, logToLin } from "../../utils/conversion";

const Frequency = ({ parameter, state, setState }) => {
  const frequency = {
    min: 1,
    max: 50,
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
      step={0.01}
      value={logToLin(state[parameter], frequency.min, frequency.max)}
      onChange={handleChange}
    />
  );
};

export default Frequency;
