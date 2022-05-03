import { linToLog, logToLin } from "../../utils/conversion";

const Time = ({ id, parameter, state, setState }) => {
  const time = {
    min: 0.01,
    max: 5,
  };

  const handleChange = (ev) => {
    const linValue = ev.target.value;
    const logValue = linToLog(linValue, time.min, time.max);
    setState((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], [parameter]: +logValue.toFixed(2) },
    }));
  };

  return (
    <input
      type="range"
      value={logToLin(state[id][parameter], time.min, time.max)}
      onChange={handleChange}
    />
  );
};

export default Time;
