import { useContext } from "react";
import styled from "styled-components"

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
    <Wrapper>
      <p>ADSR</p>
      {adsrs.map((adsr) => (
        <StyledButton
          key={adsr}
          name={adsr}
          hidden={adsr === "none"}
          style={state[oscId].adsr === adsr ? style : {}}
          onClick={handleClick}
        >
          {adsr.charAt(4)}
        </StyledButton>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const StyledButton = styled(Button)`
  flex: 1
`

export default Adsr;
