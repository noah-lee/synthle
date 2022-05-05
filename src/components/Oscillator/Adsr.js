import { useContext } from "react";

import { SettingsContext } from "../../contexts/SettingsContext";

import { Button } from '../Styled';

const Adsr = ({ oscId, state, setState }) => {
  const { adsrConfig } = useContext(SettingsContext);

  const adsrs = Object.keys(adsrConfig);

  const style = {
    backgroundColor: "var(--color-accent)",
  };

  const handleClick = (ev) => {
    const name = ev.target.name;
    setState((prevState) => ({
      ...prevState,
      [oscId]: {
        ...prevState[oscId],
        adsr: name === prevState[oscId].adsr ? "none" : name,
      },
    }));
  };

  return (
    <>
      {adsrs.map((adsr) => (
        <Button
          key={adsr}
          name={adsr}
          hidden={adsr === "none"}
          style={state[oscId].adsr === adsr ? style : {}}
          onClick={handleClick}
        >
          {adsr}
        </Button>
      ))}
    </>
  );
};

export default Adsr;
