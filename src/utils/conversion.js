export const linToLog = (value, min, max) => {
  const scale = (Math.log(max) - Math.log(min)) / (100 - 0);
  return Math.exp(Math.log(min) + scale * (value - 0));
};

export const logToLin = (value, min, max) => {
  const scale = (Math.log(max) - Math.log(min)) / (100 - 0);
  return Math.max(0, (Math.log(value) - Math.log(min)) / scale + 0);
};

export const valueToTime = (value) => {
  return (value.toFixed(2) * 1000).toFixed();
};

export const valueToGain = (value) => {
  return (20 * Math.log10(value)).toFixed(1);
};