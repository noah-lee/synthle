import { useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "../../contexts/SettingsContext";

import { Button } from "../../styles/Styled";

const LfoToggle = ({ state, setState, parameter, name, tooltip }) => {
  const { handleMouseOver, handleMouseLeave } = useContext(SettingsContext);

  const style = {
    backgroundColor: "var(--color-accent)",
  };

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      [parameter]: !prevState[parameter],
    }));
  };

  return (
    <StyledButton
      onClick={handleClick}
      style={state[parameter] ? style : {}}
      onMouseOver={() => handleMouseOver(tooltip)}
      onMouseLeave={handleMouseLeave}
      onFocus={() => handleMouseOver(tooltip)}
      onBlur={handleMouseLeave}
    >
      {name}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  flex: 1;
`;

export default LfoToggle;
