import { useContext } from "react";

import { AudioContext } from "../../contexts/AudioContext";

const Adsr = ({ state, setState }) => {
  const { adsrConfig } = useContext(AudioContext);

  const adsrs = Object.keys(adsrConfig);

  const style = {
    backgroundColor: "teal",
  };

  const handleClick = (ev) => {
    const name = ev.target.name;
    setState((prevState) => ({
      ...prevState,
      adsr: name === prevState.adsr ? "none" : name,
    }));
  };

  return (
    <>
      {adsrs.map((adsr) => (
        <button
          key={adsr}
          name={adsr}
          hidden={adsr === "none"}
          style={state.adsr === adsr ? style : {}}
          onClick={handleClick}
        >
          {adsr}
        </button>
      ))}
    </>
  );
};

export default Adsr;
