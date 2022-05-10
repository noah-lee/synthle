import styled from "styled-components";

import { Button } from "../../styles/Styled";

const LfoToggle = ({ state, setState, parameter, name }) => {
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
    <StyledButton onClick={handleClick} style={state[parameter] ? style : {}}>
      {name}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  flex: 1;
`;

export default LfoToggle;
